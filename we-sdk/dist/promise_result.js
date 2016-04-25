/**
 * Created by wangcheng on 16/2/23.
 */

"use strict";

/**
 * Class we-ral promise对象返回的结果类
 */

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PromiseResult = function () {
    (0, _createClass3.default)(PromiseResult, [{
        key: "__hackfix",
        value: function __hackfix() {
            rrd.console.log("空class,babel无缓存情况下会出错");
        }
    }]);

    function PromiseResult() {
        var status = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var msg = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
        var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var extras = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
        var error = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
        (0, _classCallCheck3.default)(this, PromiseResult);

        this.status = status;
        this.msg = msg;
        this.data = data;
        this.error = error;
        this.extras = extras;
    }

    /**
     * 获取promise结果json对象
     * @returns {{status: Number, msg: String, data: JSON, error: Error}}
     */


    (0, _createClass3.default)(PromiseResult, [{
        key: "getResult",
        value: function getResult() {
            return {
                status: this.status,
                msg: this.msg,
                data: this.data,
                error: this.error
            };
        }
    }]);
    return PromiseResult;
}();

module.exports = PromiseResult;