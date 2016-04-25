/**
 * 封装请求后端service服务的 RAL , 负责加载配置/提供service生成的工厂方法
 * Created by jess on 16/4/18.
 */

'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');
var RAL = require('node-ral').RAL;

var PromiseResult = require('./promise_result.js');

var sep = path.sep;

//合并了环境相关配置之后的后端服务地址
var finalConfig = {};

//默认的后端服务请求地址
var DEFAULT_SERVER_LIST = [];

//本地开发时,使用的mock数据目录
var DEV_MOCK_DATA_DIR = path.normalize(__dirname + sep + 'mock-data');

var singleton = {};

singleton.load = function () {

    var CONF_DIR = path.normalize(__dirname + sep + 'backend-conf');

    var APP_RAL_CONF_PATH = path.normalize(__dirname + sep + 'ral-conf');

    var defaultConfig = grape.tryRequire('' + CONF_DIR + sep + 'server.default.js') || {};

    var envName = grape.util.getNodeEnv();

    var envConfigFile = '' + CONF_DIR + sep + 'server.' + envName + '.js';

    var envConfig = grape.tryRequire(envConfigFile);

    (0, _assign2.default)(finalConfig, defaultConfig, envConfig);

    if (finalConfig.DEFAULT_API && finalConfig.DEFAULT_API.server) {
        DEFAULT_SERVER_LIST = finalConfig.DEFAULT_API.server;
    } else {
        grape.console.error('未找到环境[' + envName + ']下的后端服务配置默认server');
    }

    //初始化 RAL

    RAL.init({
        confDir: path.join(APP_RAL_CONF_PATH),
        logger: {
            log_path: grape.path.APP_LOG_PATH,
            app: 'grape-ral-log'
        }
    });
};

singleton.generateRalService = function (serviceName, extraConf) {

    var ralBase = {
        protocol: 'http',
        pack: 'querystring',
        unpack: 'json',
        encoding: 'utf-8',
        balance: 'roundrobin',
        timeout: 5000,
        retry: 1,
        headers: {
            'x-client': 'grape-ral'
        }
    };

    var serviceConfDefault = finalConfig[serviceName] || {};

    var service = {};
    var temp = service[serviceName] = (0, _assign2.default)(ralBase, serviceConfDefault, extraConf);

    if (!temp.server) {
        //如果没有server字段,使用默认值
        temp.server = DEFAULT_SERVER_LIST.slice();
    }

    return service;
};

/**
 *
 * @param serviceName   服务名,在config/ral中定义
 * @param options      ral的配置, 参考https://github.com/fex-team/node-ral/wiki/RAL%E6%8E%A5%E5%8F%A3
 * @returns {Promise}
 * @resolve {PromiseResult} promise resolve状态时返回的result对象
 */
singleton.request = function (serviceName, options) {

    var weLog = grape.log;

    var ralResult = new PromiseResult();

    var serviceConfig = RAL.getConf(serviceName);

    if (grape.util.isDev() && serviceConfig.grape_use_mock) {
        //本地开发环境,允许针对某些API使用 mock 假数据
        weLog.warn('服务' + serviceName + '使用的本地假数据!!');
        var config = serviceConfig.we_mock_data || {};
        var mockData = config.body || {};
        if (config.js_file) {
            // let DEV_MOCK_DATA_DIR = grape.path.APP_MOCK_DATA_PATH;
            //假数据存在mock目录下的JS文件,需要require进来
            try {
                mockData = require(DEV_MOCK_DATA_DIR + sep + config.js_file);
            } catch (e) {
                weLog.error('服务' + serviceName + '的假数据文件[' + config.js_file + ']加载出错!!!');
                weLog.error(e);
            }
        }
        ralResult.data = mockData.data;
        ralResult.msg = mockData.message;
        ralResult.status = mockData.status;
        return _promise2.default.resolve(ralResult);
    }

    weLog.info('调用服务' + serviceName);

    return new _promise2.default(function (resolve, reject) {

        RAL(serviceName, options).on('data', function (data, extras) {

            weLog.info(data);

            ralResult.extras = extras;
            ralResult.data = data.data;
            ralResult.msg = data.message;
            ralResult.status = data.status;

            resolve(ralResult);
        }).on('error', function (error) {

            weLog.error(error);

            ralResult.status = 1;
            ralResult.msg = '失败';
            ralResult.error = error;
            resolve(ralResult);
        });
    });
};

module.exports = singleton;