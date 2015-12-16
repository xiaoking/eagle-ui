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

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TabJs = require('./Tab.js');

var _TabJs2 = _interopRequireDefault(_TabJs);

/**
 * tab组件
 * @class Tabset
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab.js{js}
 * @show true
 * */

var Tabset = (function (_Component) {
    _inherits(Tabset, _Component);

    _createClass(Tabset, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'tabset',
            activeTab: 0
        },
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            /**
             * 需要在初始的时候打开第几个tab，默认为0（从0计数，即打开第一个tab）
             * @property activeTab
             * @type Number
             * @default 0
             * */
            activeTab: _react.PropTypes.number
        },
        enumerable: true
    }]);

    function Tabset(props, context) {
        _classCallCheck(this, _Tabset);

        _Component.call(this, props, context);
        this.state = {
            active: props.activeTab,
            tabSlider: {
                left: 0,
                width: 0
            }
        };
        if (this.props.tabCallback) {
            this.props.tabCallback(props.activeTab);
        }
    }

    Tabset.prototype.componentDidMount = function componentDidMount() {
        this.tabItemListMouseLeaveHandler();
    };

    Tabset.prototype.activeHandler = function activeHandler(index) {
        if (this.state.active !== index) {
            this.setState({
                active: index
            });
            if (this.props.tabCallback) {
                this.props.tabCallback(index);
            }
        }
    };

    Tabset.prototype.tabItemListMouseLeaveHandler = function tabItemListMouseLeaveHandler() {
        var activeTab = _react2['default'].findDOMNode(this.refs['tabItem' + this.state.active]);
        this.timeoutObj = setTimeout((function () {
            this.tabItemMouseEnterHandler(activeTab.offsetLeft, activeTab.offsetWidth);
        }).bind(this), 400);
    };

    Tabset.prototype.tabItemMouseEnterHandler = function tabItemMouseEnterHandler(left, width) {
        clearTimeout(this.timeoutObj);
        this.setState({
            tabSlider: {
                left: left,
                width: width
            }
        });
    };

    Tabset.prototype.render = function render() {
        var _this = this;

        var headings = _react2['default'].Children.map(this.props.children, function (option, index) {
            var _option$props = option.props;
            var tabCallback = _option$props.tabCallback;

            var other = _objectWithoutProperties(_option$props, ['tabCallback']);

            return _react2['default'].createElement(_TabJs2['default'], _extends({
                ref: 'tabItem' + index,
                index: index,
                active: _this.state.active === index,
                clickCallback: _this.activeHandler.bind(_this),
                mouseEnterCallback: _this.tabItemMouseEnterHandler.bind(_this)
            }, other));
        }, this);
        var panes = _react2['default'].Children.map(this.props.children, function (option, index) {
            return _react2['default'].createElement(
                'div',
                {
                    className: _classnames2['default'](_this.getClassName('panes')),
                    style: { display: _this.state.active === index ? null : 'none' }
                },
                option.props.children
            );
        }, this);
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'ul',
                { className: _classnames2['default'](this.getClassName('tab-list')),
                    onMouseLeave: this.tabItemListMouseLeaveHandler.bind(this) },
                headings,
                _react2['default'].createElement(
                    'li',
                    { className: _classnames2['default'](this.getClassName('slider-container')) },
                    _react2['default'].createElement('div', { className: _classnames2['default'](this.getClassName('slider')),
                        style: { width: this.state.tabSlider.width, left: this.state.tabSlider.left } })
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClassName('tab-content')) },
                panes
            )
        );
    };

    var _Tabset = Tabset;
    Tabset = _utilsClassNameMixin2['default'](Tabset) || Tabset;
    return Tabset;
})(_react.Component);

exports['default'] = Tabset;
module.exports = exports['default'];