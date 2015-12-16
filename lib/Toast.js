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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

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
             * @property msg
             * @type String
             * @default 保存成功
             * */
            msg: _react.PropTypes.string,
            /**
             * tips n秒后消失 默认2秒
             * @property seconds
             * @type Integer
             * @default 2
             * */
            seconds: _react.PropTypes.number,
            /**
             * 是否显示遮罩，默认false
             * @property overlay
             * @type Boolean
             * @default false
             * */
            overlay: _react.PropTypes.boolean,
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
            type: 'sucess-tips',
            msg: '保存成功',
            seconds: 2,
            overlay: false,
            classPrefix: 'tips',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Toast(props, context) {
        _classCallCheck(this, _Toast);

        _Component.call(this, props, context);
        this.flag = true;
        this.state = {
            /**
             * 是否显示tips
             * @type Boolean
             * */
            show: this.props.show
        };
    }

    /**
     * 接收到新props时执行,props改变，改变state.show
     * @method componentWillReceiveProps
     *
     * */

    Toast.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            /**
             * state.show随新的props里的值改变
             * @type Boolean
             * */
            show: nextProps.show
        });
    };

    /**
     * change flag状态，即非第一次
     * */

    Toast.prototype.componentDidMount = function componentDidMount() {
        this.flag = false;
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Toast.prototype.render = function render() {
        var _classnames;

        this.setTimeoutForClose();
        return _react2['default'].createElement(
            _GridJs2['default'],
            { ref: 'container', className: _classnames3['default'](this.getClassName(this.props.overlay ? 'container' : 'wapper'), (_classnames = {}, _classnames['fadein'] = this.state.show, _classnames['fadeout'] = this.flag ? false : !this.state.show, _classnames)) },
            !this.flag && !this.state.show ? this.displayNone() : null,
            this.toast()
        );
    };

    /**
     * 改变display形态
     * */

    Toast.prototype.displayNone = function displayNone() {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout((function () {
            this.removeClass(_react2['default'].findDOMNode(_this.refs.container), 'fadeout');
        }).bind(this), 400);
    };

    /**
     * 渲染toast主体
     * @method toast
     * @return {ReactElement}
     * */

    Toast.prototype.toast = function toast() {
        return _react2['default'].createElement(
            _RowJs2['default'],
            { className: _classnames3['default'](this.getClassNamesForArguments(this.props.classPrefix)) },
            _react2['default'].createElement(
                _ColJs2['default'],
                null,
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
                    _react2['default'].createElement('div', { style: { padding: '5px 15px', float: 'left' }, className: _classnames3['default'](this.getClassNamesForArguments(this.props.type)) }),
                    _react2['default'].createElement(
                        'div',
                        { style: { padding: '5px 15px', float: 'right' } },
                        this.props.msg
                    )
                )
            )
        );
    };

    /**
     * 延时n秒消失
     * @method  setTimeoutForClose
     * @return null
     * */

    Toast.prototype.setTimeoutForClose = function setTimeoutForClose() {
        if (this.state.show) {
            var seconds = this.props.seconds * 1000;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.closeToast.bind(this), seconds);
        }
    };

    /**
     * 改变state.show 隐藏tips,并调用回调方法
     * @method closeToast
     * @return null
     * */

    Toast.prototype.closeToast = function closeToast() {
        this.props.closeCallback && this.props.closeCallback();
        this.setState({
            show: false
        });
    };

    var _Toast = Toast;
    Toast = _utilsClassNameMixin2['default'](Toast) || Toast;
    return Toast;
})(_react.Component);

exports['default'] = Toast;
module.exports = exports['default'];