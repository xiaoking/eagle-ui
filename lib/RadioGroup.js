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

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

/**
 * 单选按钮组组件
 * @class RadioGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js {js}
 * @show true
 * */

var RadioGroup = (function (_Component) {
    _inherits(RadioGroup, _Component);

    _createClass(RadioGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * radio name
             * @property name
             * @type String
             * */
            name: _react.PropTypes.string,
            /**
             * 默认选中项
             * @property defaultChecked
             * @type String
             * */
            defaultChecked: _react.PropTypes.string,
            /**
             * 获取选中的值
             * @property getValueCallback
             * @type String
             * */
            getValueCallback: _react.PropTypes.func
        },
        enumerable: true
    }]);

    function RadioGroup(props, context) {
        _classCallCheck(this, _RadioGroup);

        _Component.call(this, props, context);

        this.state = {
            checked: this.props.defaultChecked
        };
    }

    RadioGroup.prototype._onChange = function _onChange(target) {

        if (this.state.checked != target.value) {

            this.setState({
                checked: target.value
            });
            this.props.getValueCallback && this.props.getValueCallback(target.value, target);
        }
    };

    RadioGroup.prototype.componentDidMount = function componentDidMount() {};

    RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.defaultChecked
        });
    };

    RadioGroup.prototype.render = function render() {
        var _this = this;

        var options = _react2['default'].Children.map(this.props.children, function (option) {
            var _option$props = option.props;
            var name = _option$props.name;
            var value = _option$props.value;
            var label = _option$props.label;
            var onCheck = _option$props.onCheck;

            var other = _objectWithoutProperties(_option$props, ['name', 'value', 'label', 'onCheck']);

            return _react2['default'].createElement(_InputJs2['default'], _extends({}, other, {
                ref: option.props.value,
                name: _this.props.name,
                key: option.props.value,
                value: option.props.value,
                label: option.props.label,
                onCheck: _this._onChange.bind(_this),
                checked: option.props.value === _this.state.checked }));
        }, this);

        return _react2['default'].createElement(
            'div',
            { style: this.props.style,
                className: _classnames2['default'](this.getClassName('input-group'), this.props.className || '') },
            _react2['default'].createElement(
                'div',
                { className: this.getClassName('input-group-container') },
                options
            )
        );
    };

    var _RadioGroup = RadioGroup;
    RadioGroup = _utilsClassNameMixin2['default'](RadioGroup) || RadioGroup;
    return RadioGroup;
})(_react.Component);

exports['default'] = RadioGroup;
module.exports = exports['default'];