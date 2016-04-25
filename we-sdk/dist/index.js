/**
 * we sdk 入口
 * Created by jess on 16/4/19.
 */

'use strict';

var PromiseResult = require('./promise_result.js');
var ralManager = require('./ral_manager.js');
var ApiBase = require('./api_base.js');

var grape = global.grape;

var weSDK = {};

weSDK.generateRalService = ralManager.generateRalService;
weSDK.request = ralManager.request;
weSDK.ApiBase = ApiBase;

//全局对象
Object.defineProperty(global, 'weSDK', {
  value: weSDK,
  writable: false,
  enumerable: false
});

var singleton = {};

singleton.init = function () {

  ralManager.load();

  var api = require('./api/index.js');

  weSDK.api = api;
};

module.exports = singleton;