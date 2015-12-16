/**
 * Created by mac on 15/9/7.
 */
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
 * 多选按钮组组件
 * @class CheckboxGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js {js}
 * @show true
 * */

var CheckboxGroup = (function (_Component) {
    _inherits(CheckboxGroup, _Component);

    _createClass(CheckboxGroup, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }]);

    function CheckboxGroup(props, context) {
        _classCallCheck(this, _CheckboxGroup);

        _Component.call(this, props, context);
    }

    CheckboxGroup.prototype.componentDidMount = function componentDidMount() {};

    CheckboxGroup.prototype.render = function render() {

        return _react2['default'].createElement(
            'div',
            { style: this.props.style,
                className: _classnames2['default'](this.getClassName('input-group'), this.props.className || '') },
            _react2['default'].createElement(
                'div',
                { className: this.getClassName('input-group-container') },
                this.props.children
            )
        );
    };

    var _CheckboxGroup = CheckboxGroup;
    CheckboxGroup = _utilsClassNameMixin2['default'](CheckboxGroup) || CheckboxGroup;
    return CheckboxGroup;
})(_react.Component);

exports['default'] = CheckboxGroup;
module.exports = exports['default'];