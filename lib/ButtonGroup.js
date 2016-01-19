/**
 * Created by mac on 15/9/8.
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

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * 按钮组组件<br/>
 * @class ButtonGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button.js {js}
 * @show true
 * */

var ButtonGroup = (function (_Component) {
    _inherits(ButtonGroup, _Component);

    _createClass(ButtonGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 是否自适应宽度
             * @property justify
             * @type Boolean
             * @default false
             * */
            justify: _react.PropTypes.bool,
            /**
             * 是否垂直排列
             * @property tacked
             * @type Boolean
             * @default false
             * */
            tacked: _react.PropTypes.bool,
            egType: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'btn-group',
            componentTag: 'div'
        },

        /**
         * tacked: bool 是否垂直排列
         * justify: justify 是否自适应宽度
         * */
        enumerable: true
    }]);

    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        _Component.call(this, props, context);
        //this.classNameMixin = new ClassNameMixin(this.props);

        this.state = {
            active: this.props.active
        };
    }

    ButtonGroup.prototype.mouseDownHandler = function mouseDownHandler(e) {
        var target = e.target;
        this.execMethod('active', target, target.innerHTML);
        this.setState({
            active: target.innerHTML
        });
    };

    ButtonGroup.prototype.render = function render() {
        var _this = this;

        var Component = this.props.componentTag;

        var options = _react2['default'].Children.map(this.props.children, function (option) {

            var opt = _react2['default'].cloneElement(option, {
                onMouseDown: _this.mouseDownHandler.bind(_this),
                active: _this.state.active == option.props.children
            });
            return opt;
        }, this);

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(), 'clearfix') }),
            options
        );
    };

    return ButtonGroup;
})(_utilsComponent2['default']);

exports['default'] = ButtonGroup;
module.exports = exports['default'];