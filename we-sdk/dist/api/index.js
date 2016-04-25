/**
 * Created by jess on 16/4/19.
 */

'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fund = require('./fund/fund.js');

var ApiFactory = function () {
    function ApiFactory() {
        (0, _classCallCheck3.default)(this, ApiFactory);

        this.fund = fund;
    }

    (0, _createClass3.default)(ApiFactory, [{
        key: '_hack',
        value: function _hack() {
            var x = 'get risk of babel compile error';
        }
    }]);
    return ApiFactory;
}();

//单例


module.exports = new ApiFactory();