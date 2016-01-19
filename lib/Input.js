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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utilsIcon = require('./utils/Icon');

var _utilsIcon2 = _interopRequireDefault(_utilsIcon);

/**
 * input表单组件<br />
 * 通过type可以生成radio、checkbox、input等元素标签
 * @class Input
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js{js}
 * @show true
 * */

var Input = (function (_Component) {
    _inherits(Input, _Component);

    _createClass(Input, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',

        //onClickCallback:PrgiopTypes.fun
        value: {
            /**
             * 生成不同的元素标签
             * @property type
             * @type String
             * */
            type: 'text',
            /**
             * 默认输入提示
             * @property autoComplete
             * @type String
             * */
            autoComplete: 'off',
            /**
             * type为radio或checkbox时，需要显示的标签信息
             * @property label
             * @type String
             * */
            label: '请选择',
            /**
             * 需要显示的icon
             * @property icon
             * @type String
             * */
            /**
             * 给icon设置样式
             * @property iconStyle
             * @type Object
             * */
            classPrefix: 'input',
            /**
             * icon,input类型只能是text这种的
             * @property icon
             * @type String
             * */
            icon: '',
            /**
             * icon展示的方向，{left,right}
             * @property iconDirection
             * @type String
             * */
            iconDirection: ''
        },
        enumerable: true
    }]);

    function Input(props, context) {
        _classCallCheck(this, Input);

        _Component.call(this, props, context);

        this.className = 'input-';

        this.state = {
            _active: this.props.checked
        };
    }

    Input.prototype.getIcon = function getIcon(type, checked, icon) {
        var classMap = {
            radio: {
                active: 'adjust_checked',
                'default': 'adjust_unchecked'
            },
            checkbox: {
                active: 'checkbox_checked',
                'default': 'checkbox_unchecked'
            }
        };

        var iconType = classMap[type];

        var html = null,
            iconStyle = this.props.iconStyle || {},
            name = '';

        if (iconType) {
            name = iconType[checked ? 'active' : 'default'];
        } else {
            name = icon;
        }

        if (name) {
            return _react2['default'].createElement(_utilsIcon2['default'], { className: _classnames3['default']("input-icon"), name: name, style: iconStyle });
        }

        return html;
    };

    Input.prototype.changeHander = function changeHander(e) {
        var target = e.target,
            type = target.type.toLowerCase();

        if (this.isRadio(type)) {
            this.execMethod('active', target);
        } else if (this.isCheckbox(type)) {

            this.setState({
                _active: !this.state._active
            });
            this.execMethod('getValue', target.value || '', target);
        }

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    Input.prototype.isCheckbox = function isCheckbox(type) {
        return (/checkbox/.test(type || this.props.type)
        );
    };

    Input.prototype.isRadio = function isRadio(type) {
        return (/radio/.test(type || this.props.type)
        );
    };

    Input.prototype.render = function render() {
        var _classnames;

        var _props = this.props;
        var disabled = _props.disabled;
        var type = _props.type;
        var label = _props.label;
        var icon = _props.icon;
        var iconDirection = this.props.iconDirection;
        var checked = this.props.checked;

        if (this.isCheckbox()) {
            checked = this.state._active;
        }

        if (icon) {
            if (iconDirection == '') {
                iconDirection = 'right';
            }

            iconDirection = this.getClassName('icon-' + iconDirection);
        }

        return _react2['default'].createElement(
            'div',
            { className: _classnames3['default'](this.getProperty(), type, (_classnames = {
                    'active': checked,
                    'disabled': disabled,
                    'show-icon': !!icon
                }, _classnames['' + iconDirection] = !!iconDirection, _classnames)) },
            this.getIcon(type, checked, icon),
            _react2['default'].createElement(
                'label',
                null,
                label
            ),
            _react2['default'].createElement('input', _extends({ type: type }, this.otherProps, { onChange: disabled ? function () {} : this.changeHander.bind(this) }))
        );
    };

    return Input;
})(_utilsComponent2['default']);

exports['default'] = Input;
module.exports = exports['default'];