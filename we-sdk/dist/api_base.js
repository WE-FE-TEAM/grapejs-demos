/**
 * 所有API类的基类
 * Created by jess on 16/4/19.
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APIBase = function () {
  function APIBase() {
    (0, _classCallCheck3.default)(this, APIBase);
  }

  (0, _createClass3.default)(APIBase, [{
    key: 'request',


    /**
     * 调用 RAL 请求后端服务
     * @param apiName {string} 服务名
     * @param options {object} 该服务需要的参数
     * @param extraOptions {object} 包含额外参数的对象, 比如 headers/ 版本信息等
     * @returns {*}
     */
    value: function request(apiName, options) {
      var extraOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


      //合并版本信息
      options.data = (0, _assign2.default)({}, extraOptions.data || {}, options.data);
      //合并请求头信息
      options.headers = (0, _assign2.default)({}, extraOptions.headers || {}, options.headers);

      return weSDK.request(apiName, options);
    }
  }]);
  return APIBase;
}();

module.exports = APIBase;