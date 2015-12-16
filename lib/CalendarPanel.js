'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _CalendarJs = require('./Calendar.js');

var _CalendarJs2 = _interopRequireDefault(_CalendarJs);

/**
 * CalendarPanel组件
 * @class CalendarPanel
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo calendar.js {js}
 * @show true
 * */

var CalendarPanel = (function (_Component) {
    _inherits(CalendarPanel, _Component);

    _createClass(CalendarPanel, null, [{
        key: 'propTypes',
        value: {
            showCallback: _react.PropTypes.func,
            hideCallback: _react.PropTypes.func,
            componentTag: _react.PropTypes.string,
            /**
             * 通过传入此函数获取日期值
             * @property getValueCallback
             * @type Function
             * */
            getValueCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'calendar',
            componentTag: 'Input',
            getValueCallback: function getValueCallback(date) {
                console.warn('通过向CalendarPanel传入回调函数"getValueCallback"可以获取到当前选取的日期值，当前选取的日期为：' + date);
            }
        },
        enumerable: true
    }]);

    function CalendarPanel(props, context) {
        _classCallCheck(this, _CalendarPanel);

        _Component.call(this, props, context);

        this.state = {
            isShow: false,
            value: '',
            windowType: 0
        };
    }

    CalendarPanel.prototype.doSetCapture = function doSetCapture(input) {
        if (input.setCapture) {
            this.doReleaseCapture();
            input.setCapture();
            this.ctObj = input;
        }
    };

    CalendarPanel.prototype.doReleaseCapture = function doReleaseCapture() {
        if (this.ctObj && this.ctObj.releaseCapture) {
            this.ctObj.releaseCapture();
            this.ctObj = null;
        }
    };

    CalendarPanel.prototype.componentDidMount = function componentDidMount() {};

    CalendarPanel.prototype.inputBlurHandler = function inputBlurHandler() {
        this.doReleaseCapture();
        this.close();
    };

    CalendarPanel.prototype.inputMouseUpHandler = function inputMouseUpHandler() {
        this.doReleaseCapture();
    };

    CalendarPanel.prototype.inputFocusHandler = function inputFocusHandler(e) {

        var container = _react2['default'].findDOMNode(this),
            _this = this,
            calendar = container.querySelector('.' + this.getClassName('container')),
            input = e.target;

        calendar.onmousedown = function (e) {
            _this.doSetCapture(input);
            return false;
        };
        this.input = input;
        this.setState({
            isShow: true,
            windowType: 0
        });
    };

    CalendarPanel.prototype.inputChangeHandler = function inputChangeHandler(e) {
        var target = e.target;

        this.setState({
            value: target.value
        });
    };

    CalendarPanel.prototype.selectCallback = function selectCallback(date) {
        this.props.getValueCallback(date);
        this.setState({
            value: date
        });
    };

    CalendarPanel.prototype.setWindowType = function setWindowType(type) {
        this.setState({
            windowType: type
        });
    };

    CalendarPanel.prototype.close = function close() {
        this.setState({
            isShow: false
        });
        this.input && this.input.blur();
    };

    CalendarPanel.prototype.render = function render() {
        var Component = this.props.componentTag;
        var _this = this;
        var options = _react2['default'].Children.map(this.props.children, function (option) {

            return _react2['default'].createElement(_InputJs2['default'], _extends({}, option.props, {
                onBlur: _this.inputBlurHandler.bind(_this),
                onMouseUp: _this.inputMouseUpHandler.bind(_this),
                onFocus: _this.inputFocusHandler.bind(_this),
                value: _this.state.value,
                onChange: _this.inputChangeHandler.bind(_this)
            }));
        }, this);

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getClassName('panel')) },
            options,
            _react2['default'].createElement(_CalendarJs2['default'], _extends({}, this.props, {
                show: this.state.isShow,
                selectCallback: this.selectCallback.bind(this),
                windowType: this.state.windowType,
                closeCallback: this.close.bind(this),
                setWindowType: this.setWindowType.bind(this) }))
        );
    };

    var _CalendarPanel = CalendarPanel;
    CalendarPanel = _utilsClassNameMixinJs2['default'](CalendarPanel) || CalendarPanel;
    return CalendarPanel;
})(_react.Component);

exports['default'] = CalendarPanel;
module.exports = exports['default'];