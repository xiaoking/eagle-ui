/**
 * Created by mac on 15/9/7.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

/**
 * tab组件
 * @class Tab
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab.js{js}
 * @show true
 * */

var Tab = (function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        _classCallCheck(this, _Tab);

        _Component.apply(this, arguments);
    }

    Tab.prototype.handlerClick = function handlerClick() {
        this.props.clickCallback(this.props.index);
    };

    Tab.prototype.handleMouseEnter = function handleMouseEnter(e) {
        this.props.mouseEnterCallback(e.target.offsetLeft, e.target.offsetWidth);
    };

    Tab.prototype.render = function render() {

        return _react2['default'].createElement(
            'a',
            _extends({ className: _classnames2['default'](this.getClassName('item'), this.getClassNames(this.props))
            }, this.props, {
                onClick: this.handlerClick.bind(this),
                onMouseEnter: this.handleMouseEnter.bind(this) }),
            this.props.heading
        );
    };

    _createClass(Tab, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'tab'
        },
        enumerable: true
    }]);

    var _Tab = Tab;
    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
    return Tab;
})(_react.Component);

exports['default'] = Tab;
module.exports = exports['default'];