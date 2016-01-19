/**
 * Created by mac on 15/9/7.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _LabelJs = require('./Label.js');

var _LabelJs2 = _interopRequireDefault(_LabelJs);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * 标签组
 * @class LabelGroup
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label.js {js}
 * @show true
 * */

var LabelGroup = (function (_Component) {
    _inherits(LabelGroup, _Component);

    _createClass(LabelGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 左侧总标题
             * @property title
             * @type String
             * */
            title: _react.PropTypes.string,
            /**
             * 标签展现形式{form|simple|default}
             * @property egType
             * @type String
             * @default default
             * */
            egType: _react.PropTypes.oneOf(['simple', 'form', 'default']),
            /**
             * 点击后触发的回调，所有label会被继承
             * @property activeCallback
             * @type Function
             * */
            activeCallback: _react.PropTypes.func,
            /**
             * 默认选中的项
             * @property defaultChecked
             * @type String Integer
             * */
            defaultChecked: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
            /**
             * 间距，label集合与左边title的间距
             * @property spacing
             * @type Integer
             * */
            spacing: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'label-group',
            simple: false
        },
        enumerable: true
    }]);

    function LabelGroup(props, context) {
        _classCallCheck(this, LabelGroup);

        _Component.call(this, props, context);

        this.setDefaultState({
            checked: this.props.defaultChecked,
            itemStyle: {
                marginLeft: this.props.spacing + 'px'
            }
        });

        this.isInit = true;

        this.titleObj = this.uniqueId();
        this.itemObj = this.uniqueId();
    }

    LabelGroup.prototype.activeHandler = function activeHandler(callback, value, text, target, active) {
        //debugger;

        if (this.state.checked != target.innerHTML) {
            this.setState({
                checked: text
            });
            callback && callback(value, text, target, active);
        }
    };

    LabelGroup.prototype.renderTitle = function renderTitle() {
        var title = this.props.title;
        var html = [];

        if (title) {
            html.push(_react2['default'].createElement(
                'div',
                { className: 'title', key: title, ref: this.titleObj },
                title
            ));
        }

        return html;
    };

    LabelGroup.prototype.loadedCallback = function loadedCallback() {

        var offsetV = _reactLibReactDOM2['default'].findDOMNode(this.refs[this.titleObj]),
            itemStyle = {};

        if (offsetV && !this.props.spacing) {
            var cssStr = 'margin-left:' + (offsetV.offsetWidth + 30) + 'px;';
            _reactLibReactDOM2['default'].findDOMNode(this.refs[this.itemObj]).style.cssText = cssStr;
        }
    };

    LabelGroup.prototype.render = function render() {
        var _this2 = this;

        var _this = this;
        var options = _react2['default'].Children.map(this.props.children, function (option) {
            var _option$props = option.props;
            var activeCallback = _option$props.activeCallback;
            var url = _option$props.url;
            var children = _option$props.children;
            var value = _option$props.value;

            var other = _objectWithoutProperties(_option$props, ['activeCallback', 'url', 'children', 'value']);

            return _react2['default'].createElement(
                _LabelJs2['default'],
                _extends({}, other, {
                    key: children,
                    url: url ? url : _this.props.url,
                    value: value ? value : children,
                    activeCallback: _this.activeHandler.bind(_this, activeCallback ? activeCallback : _this.props.activeCallback),
                    active: _this2.props.egType ? false : children === _this.state.checked }),
                children
            );
        }, this);

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(), 'clearfix') },
            this.renderTitle(),
            _react2['default'].createElement(
                'div',
                { className: 'item-box clearfix', ref: this.itemObj, style: this.state.itemStyle },
                _react2['default'].createElement(
                    'div',
                    { className: 'item-list' },
                    options
                )
            )
        );
    };

    return LabelGroup;
})(_utilsComponent2['default']);

exports['default'] = LabelGroup;
module.exports = exports['default'];