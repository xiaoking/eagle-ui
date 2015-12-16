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

/**
 * 弹框组件，dialog类型：分为alert,confirm,dialog,mask 四种。默认alert。
 * 根据show的存在与否决定弹框展示与否
 * @class dialog
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo dialog.js{js}
 * @show true
 * */

var Dialog = (function (_Component) {
    _inherits(Dialog, _Component);

    _createClass(Dialog, null, [{
        key: 'propType',
        value: {
            /**
             * dialog类型：分为alert,confirm,dialog,mask 四种。默认alert
             * @property type
             * @type String
             * @default alert
             * */
            type: _react.PropTypes.string,
            /**
             * 标题
             * @property title
             * @type String
             * @default ""
             * */
            title: _react.PropTypes.string,
            /**
             * 点击确定时，回调方法
             * @property successCallback
             * @type Function
             * @default null
             * */
            successCallback: _react.PropTypes.func,
            /**
             * 点击取消时，回调方法
             * @property cancelCallback
             * @type Function
             * @default null
             * */
            cancelCallback: _react.PropTypes.func,
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
            successCallback: null, //success回掉函数
            cancelCallback: null, //cancel回调函数
            close: false, //是否有x图标
            title: '', //标题
            type: 'alert',
            classPrefix: 'dialog',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Dialog(props, context) {
        _classCallCheck(this, _Dialog);

        _Component.call(this, props, context);
        this.flag = true;
        this.state = {
            show: this.props.show,
            init: true
        };
    }

    /**
     * 接收到新props时执行,props是否存在show，是改变state.show，否则不变
     * 生命周期方法
     * @method componentWillReceiveProps
     * */

    Dialog.prototype.componentDidMount = function componentDidMount() {
        //this.flag = false;
    };

    Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.flag = false;
            this.setState({
                show: nextProps.show
            });
        }
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Dialog.prototype.render = function render() {
        var showOrHide = this.props.cancelCallback ? this.props.show : this.state.show;
        return _react2['default'].createElement(
            _GridJs2['default'],
            { ref: 'container', className: _classnames2['default'](this.getClassName('container'), this.flag ? '' : showOrHide ? 'fadein' : 'fadeout') },
            !this.flag && !(this.props.cancelCallback ? this.props.show : this.state.show) ? this.displayNone() : null,
            this[this.props.type.toLowerCase()](),
            this.showOverlay(this.props.tips)
        );
    };

    /**
     * 改变display形态
     * */

    Dialog.prototype.displayNone = function displayNone() {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout((function () {
            this.removeClass(_react2['default'].findDOMNode(_this.refs.container), 'fadeout');
        }).bind(this), 400);
    };

    Dialog.prototype.close = function close(callbackId) {
        callbackId = this.props[callbackId + 'Callback'];
        if (callbackId) {
            callbackId();
            return this;
        }

        this.flag = false;
        this.setState({
            show: false
        });
    };

    /**
     * 点击X，调用cancelCallback（如果存在），否则通过改变自身state来关闭
     * @method closeDialog
     * @return null
     * */

    Dialog.prototype.closeDialog = function closeDialog() {
        this.close('cancel');
    };

    /**
     * 点击确定按钮，调用successCallback（如果存在），否则通过改变自身state来关闭
     * @method submitForm
     * @return null;
     * */

    Dialog.prototype.submitForm = function submitForm() {
        this.close('success');
    };

    /**
     * 点击取消按钮，调用cancelCallback（如果存在），否则通过改变自身state来关闭
     * @method cancleDialog
     * @return null;
     * */

    Dialog.prototype.cancleDialog = function cancleDialog() {
        this.close('cancel');
    };

    /**
     * 显示遮罩
     * @method showOverlay
     * @return {ReactElement}
     * */

    Dialog.prototype.showOverlay = function showOverlay() {
        return _react2['default'].createElement(_GridJs2['default'], { className: _classnames2['default'](this.getClassNamesForArguments('overlay')) });
    };

    /**
     * 渲染alert
     * @method alert
     * @return  {ReactElement}
     * */

    Dialog.prototype.alert = function alert() {
        return _react2['default'].createElement(
            _RowJs2['default'],
            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')), style: { width: '500px' } },
            _react2['default'].createElement(
                _ColJs2['default'],
                null,
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('title')), style: { textAlign: 'center' } },
                    this.props.title
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('content')), style: { textAlign: 'center' } },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        null,
                        this.props.children
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        { sm: 12 },
                        _react2['default'].createElement(
                            _ButtonJs2['default'],
                            { radius: true, egSize: 'xs', onClick: this.submitForm.bind(this) },
                            '确定'
                        )
                    )
                )
            )
        );
    };

    /**
     * 渲染confirm
     * @method confirm
     * @return  {ReactElement}
     * */

    Dialog.prototype.confirm = function confirm() {
        return _react2['default'].createElement(
            _RowJs2['default'],
            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')), style: { width: '500px' } },
            _react2['default'].createElement(
                _ColJs2['default'],
                null,
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('title')), style: { textAlign: 'center' } },
                    this.props.title,
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
                        'x'
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('content')), style: { textAlign: 'center' } },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        null,
                        this.props.children ? this.props.children : '请快乐的修bug'
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        { sm: 12 },
                        _react2['default'].createElement(
                            _ButtonJs2['default'],
                            { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
                            '确定'
                        ),
                        _react2['default'].createElement(
                            _ButtonJs2['default'],
                            { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
                            '取消'
                        )
                    )
                )
            )
        );
    };

    /**
     * 渲染dialog
     * @method dialog
     * @return  {ReactElement}
     * */

    Dialog.prototype.dialog = function dialog() {
        return _react2['default'].createElement(
            _RowJs2['default'],
            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')) },
            _react2['default'].createElement(
                _ColJs2['default'],
                null,
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('title')) },
                    this.props.title,
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
                        'x'
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        null,
                        this.props.children
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('button')) },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        { sm: 12 },
                        _react2['default'].createElement(
                            _ButtonJs2['default'],
                            { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
                            '确定'
                        ),
                        _react2['default'].createElement(
                            _ButtonJs2['default'],
                            { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
                            '取消'
                        )
                    )
                )
            )
        );
    };

    /**
     * 渲染mask
     * @method mask
     * @return  {ReactElement}
     * */

    Dialog.prototype.mask = function mask() {
        return _react2['default'].createElement(
            _RowJs2['default'],
            { className: _classnames2['default'](this.getClassNamesForArguments('dialog')) },
            _react2['default'].createElement(
                _ColJs2['default'],
                null,
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('title', 'mask-title')) },
                    this.props.title,
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
                        'x'
                    )
                ),
                _react2['default'].createElement(
                    _RowJs2['default'],
                    { className: _classnames2['default'](this.getClassNamesForArguments('content')), style: { marginTop: '10px' } },
                    _react2['default'].createElement(
                        _ColJs2['default'],
                        null,
                        this.props.children
                    )
                )
            )
        );
    };

    var _Dialog = Dialog;
    Dialog = _utilsClassNameMixin2['default'](Dialog) || Dialog;
    return Dialog;
})(_react.Component);

exports['default'] = Dialog;
module.exports = exports['default'];