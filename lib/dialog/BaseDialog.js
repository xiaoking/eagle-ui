'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./../utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var BaseDialog = (function (d) {

    var stack = {},
        options = {
        successCallback: function successCallback() {},
        cancelCallback: function cancelCallback() {},
        //是否显示头部背景
        isHeaderBackground: true,
        //footer按钮对齐方式
        buttonAlign: 'center',
        //mask类型的是否显示头部，头部颜色是否需要显示
        isHeader: true,
        //内容对其方式
        contentAlign: 'center',
        //是否显示蒙版层
        isMask: true,
        //内容不在content之内 mask属性
        outside: false

    };

    var BaseDialog = (function () {
        function BaseDialog() {
            var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            _classCallCheck(this, _BaseDialog);

            this.wrapName = 'dialog-' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
            this.container = d.getElementById(this.wrapName);

            this.dialogClass = 'dialog-mask';
            this.props = {};
            this.isShow = false;

            if (!this.container) {
                this.createWrap();
            }

            options = _extend2['default'](options, opts);
        }

        BaseDialog.prototype.close = function close() {
            //this.isShow = false;
            this.removeClass(this.container, this.setPrefix('dialog-show'));
        };

        BaseDialog.prototype.open = function open() {
            /*this.isShow = true;*/
            this.addClass(this.container, this.setPrefix('dialog-show'));
        };

        BaseDialog.prototype.pushStack = function pushStack(key, dialog, props) {
            //stack
            stack[key] = props ? [dialog, props] : dialog;
        };

        BaseDialog.prototype.removeStack = function removeStack(key) {
            stack[key] = null;
            delete stack[key];
        };

        //获取dialog

        BaseDialog.prototype.get = function get(key) {
            var modal = stack[key];

            return modal instanceof Array ? modal : modal ? [modal] : [];
        };

        BaseDialog.prototype.setOptions = function setOptions(opts) {
            options = _extend2['default']({}, options, opts || {});
        };

        //创建放置弹窗的容器

        BaseDialog.prototype.createWrap = function createWrap() {
            this.props = {};
            var dom = d.createElement('div'),
                _this = this;
            dom.id = this.wrapName;
            dom.className = this.setPrefix(this.dialogClass, false) + ' ' + this.setPrefix('dialog-hide');

            /*dom.addEventListener("transitionend", ()=>{
                if(!_this.isShow){
                    _this.removeClass(_this.container,'show');
                }
            });*/
            d.body.appendChild(dom);
            this.container = dom;
        };

        BaseDialog.prototype.renderDialog = function renderDialog(Modal, props) {
            var params = _extend2['default'](true, {}, options, props || {});

            this[!params.isMask ? 'removeClass' : 'addClass'](this.container, this.setPrefix(this.dialogClass, false));

            _reactLibReactDOM2['default'].render(_react2['default'].createElement(Modal, params), this.container);
        };

        var _BaseDialog = BaseDialog;
        BaseDialog = _utilsClassNameMixin2['default'](BaseDialog) || BaseDialog;
        return BaseDialog;
    })();

    return BaseDialog;
})(document);

var dialog = null;

exports['default'] = {
    getInstance: function getInstance(opts) {
        return dialog ? dialog : dialog = new BaseDialog(opts);
    },
    ALERT: 'alert',
    CONFRIM: 'confirm',
    MASK: 'mask'
};
module.exports = exports['default'];