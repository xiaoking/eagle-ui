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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * 标签
 * @class Label
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label.js {js}
 * @show true
 * */

var Label = (function (_Component) {
    _inherits(Label, _Component);

    _createClass(Label, null, [{
        key: 'propTypes',
        value: {
            url: _react.PropTypes.string,
            activeCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'label',
            url: 'javascript:void(0);',
            componentTag: 'a'
        },
        enumerable: true
    }]);

    function Label(props, context) {
        _classCallCheck(this, Label);

        _Component.call(this, props, context);
    }

    /**
     * 点击回调函数
     * */

    Label.prototype.mouseDownHandler = function mouseDownHandler(e) {
        var target = e.target;

        this.execMethod('active', target.getAttribute('value'), target.innerHTML, target, !this.props.active);
    };

    Label.prototype.render = function render() {
        var url = this.props.url;

        return _react2['default'].createElement(
            this.componentTag,
            _extends({ href: url }, this.props, { className: _classnames2['default'](this.getProperty(), this.props.className),
                onMouseDown: this.mouseDownHandler.bind(this)
            }),
            this.props.children
        );
    };

    return Label;
})(_utilsComponent2['default']);

exports['default'] = Label;
module.exports = exports['default'];