/**
 * Created by jess on 16/4/19.
 */

'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FundApi = function (_weSDK$ApiBase) {
    (0, _inherits3.default)(FundApi, _weSDK$ApiBase);

    function FundApi() {
        (0, _classCallCheck3.default)(this, FundApi);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FundApi).apply(this, arguments));
    }

    (0, _createClass3.default)(FundApi, [{
        key: 'getFundDetail',


        /**
         * @param code {string} 基金编码
         * @returns {Promise} 获取基金详情
         * @resolve {PromiseResult} promise resolve状态时返回的result对象
         */
        value: function getFundDetail(code, extraOptions) {
            var apiName = 'WE_FUND_GET_DEATIL_API';
            var options = {
                data: {
                    code: code
                }
            };

            return (0, _get3.default)((0, _getPrototypeOf2.default)(FundApi.prototype), 'request', this).call(this, apiName, options, extraOptions);
        }
    }]);
    return FundApi;
}(weSDK.ApiBase);

//都是暴露单例


module.exports = new FundApi();