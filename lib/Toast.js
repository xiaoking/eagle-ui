/**
 * Created by panqianjin on 15/10/30.
 */
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * 提示组件
 * 类型：分为success,error,loading 三种。默认success
 * overalay是否显示遮罩，默认false不显示
 * @class Toast
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo toast.js{js}
 * @show true
 * */

var Toast = (function (_Component) {
    _inherits(Toast, _Component);

    _createClass(Toast, null, [{
        key: 'propType',
        value: {
            /**
             * toast类型：分为success,error,loading 三种。默认success
             * @property type
             * @type String
             * @default success
             * */
            type: _react.PropTypes.string,
            /**
             * 文字信息
             * @property message
             * @type String
             * @default 保存成功
             * */
            message: _react.PropTypes.string,
            /**
             * tips n秒后消失 默认2秒
             * @property seconds
             * @type Integer
             * @default 2
             * */
            seconds: _react.PropTypes.number,
            /**
             * 类名样式前缀
             * @property classPrefix
             * @type sting
             * @default crumb
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * @default div
             * */
            componentTag: _react.PropTypes.string

        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'success',
            message: '保存成功',
            seconds: 2,
            classPrefix: 'dialog',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Toast(props, context) {
        _classCallCheck(this, Toast);

        _Component.call(this, props, context);
    }

    /**
     * 改变state.show 隐藏tips,并调用回调方法
     * @method close
     * @return null
     * */

    Toast.prototype.close = function close() {
        var seconds = this.props.seconds * 1000,
            _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.props.closeCallback && _this.props.closeCallback();
            _Dialog2['default'].close();
        }, seconds);
    };

    Toast.prototype.renderDialog = function renderDialog(className) {
        var _props = this.props;
        var message = _props.message;
        var children = _props.children;
        var type = _props.type;

        this.close();
        return _react2['default'].createElement(
            'div',
            { className: 'clearfix' },
            _react2['default'].createElement('div', { style: { padding: '5px 15px', float: 'left' }, className: _classnames2['default'](this.setPrefix('tips-' + type, false)) }),
            _react2['default'].createElement(
                'div',
                { style: { padding: '5px 15px', float: 'right' } },
                children || message
            )
        );
    };

    Toast.prototype.render = function render() {
        return this.renderDialog('toast');
    };

    return Toast;
})(_utilsComponent2['default']);

exports['default'] = Toast;
module.exports = exports['default'];