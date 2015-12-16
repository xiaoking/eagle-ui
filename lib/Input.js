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

var _classnames10 = require('classnames');

var _classnames11 = _interopRequireDefault(_classnames10);

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
            label: '请选择'
        },
        enumerable: true
    }]);

    function Input(props, context) {
        _classCallCheck(this, _Input);

        _Component.call(this, props, context);

        this.className = 'input-';

        this.state = {
            isActive: this.props.checked
        };
    }

    Input.prototype.setCheck = function setCheck() {
        this.setState({
            isActive: !this.state.isActive
        });
    };

    Input.prototype.checkbox = function checkbox() {
        var _classnames, _classnames2, _classnames3;

        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
        return _react2['default'].createElement(
            'div',
            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames = {}, _classnames['eg-input-' + this.props.type + '-active'] = checked, _classnames), (_classnames2 = {}, _classnames2['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames2)), onClick: this.setCheck.bind(this) },
            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
            _react2['default'].createElement(
                'div',
                { className: 'box' },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames11['default']('checkbox', (_classnames3 = {}, _classnames3[this.getClassName('icon-tick', false)] = checked, _classnames3)) },
                    _react2['default'].createElement('div', { className: 'round' })
                )
            ),
            _react2['default'].createElement(
                'label',
                null,
                this.props.label
            )
        );
    };

    //暂时用在图片片选框

    Input.prototype.checkboxs = function checkboxs() {
        var _classnames4, _classnames5, _classnames6;

        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
        return _react2['default'].createElement(
            'div',
            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames4 = {}, _classnames4['eg-input-' + this.props.type + '-active'] = checked, _classnames4), (_classnames5 = {}, _classnames5['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames5)), onClick: this.setCheck.bind(this) },
            _react2['default'].createElement('input', _extends({}, this.props, { type: 'checkbox', onChange: this.onchange.bind(this) })),
            _react2['default'].createElement(
                'div',
                { className: 'box' },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames11['default']('checkbox', (_classnames6 = {}, _classnames6[this.getClassName('icon-tick', false)] = checked, _classnames6)) },
                    _react2['default'].createElement('div', { className: 'round' })
                )
            ),
            _react2['default'].createElement(
                'label',
                null,
                this.props.label
            )
        );
    };

    Input.prototype.onchange = function onchange(e) {
        if (this.props.onCheck) {
            this.props.onCheck(e.target);
        }
    };

    Input.prototype.radio = function radio() {
        var _classnames7, _classnames8;

        return _react2['default'].createElement(
            'div',
            { className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames7 = {}, _classnames7['eg-input-' + this.props.type + '-active'] = this.props.checked, _classnames7), (_classnames8 = {}, _classnames8['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames8)) },
            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
            _react2['default'].createElement(
                'div',
                { className: 'box' },
                _react2['default'].createElement(
                    'div',
                    { className: 'checkbox' },
                    _react2['default'].createElement('div', { className: 'round' })
                )
            ),
            _react2['default'].createElement(
                'label',
                null,
                this.props.label
            )
        );
    };

    Input.prototype.text = function text() {
        var _classnames9;

        return _react2['default'].createElement(
            'div',
            { className: _classnames11['default']((_classnames9 = {}, _classnames9[this.getClassName('icon-container')] = !!this.props.icon, _classnames9)) },
            _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames11['default'](this.getDefaultClass()) })),
            _react2['default'].createElement('i', { className: 'icon-input-right icon-' + this.props.icon })
        );
    };

    Input.prototype.getDefaultClass = function getDefaultClass() {
        //border:1px solid #fff;
        return this.getClassName(this.className + this.props.type);
    };

    Input.prototype.render = function render() {
        var type = this.props.type;

        type = type.toLowerCase();

        if (type != 'radio' && type != 'checkbox') {
            type = 'text';
        }
        //const {name,id,value,placeholder,autocomplete,disabled,type} = this.props;
        return this[type]();
    };

    var _Input = Input;
    Input = _utilsClassNameMixin2['default'](Input) || Input;
    return Input;
})(_react.Component);

exports['default'] = Input;
module.exports = exports['default'];