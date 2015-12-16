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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _LabelJs = require('./Label.js');

var _LabelJs2 = _interopRequireDefault(_LabelJs);

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
             * 普通标签列表
             * @property simple
             * @type Boolean
             * @default false
             * */
            simple: _react.PropTypes.bool,
            /**
             * 点击事件，所有label会被继承
             * @property clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'label',
            simple: false
        },
        enumerable: true
    }]);

    function LabelGroup(props, context) {
        _classCallCheck(this, _LabelGroup);

        _Component.call(this, props, context);

        this.state = {
            checked: this.props.defaultChecked
        };
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

    LabelGroup.prototype.render = function render() {
        var _classnames,
            _this2 = this;

        var _this = this;
        var options = _react2['default'].Children.map(this.props.children, function (option) {
            var _option$props = option.props;
            var clickCallback = _option$props.clickCallback;
            var url = _option$props.url;

            var other = _objectWithoutProperties(_option$props, ['clickCallback', 'url']);

            return _react2['default'].createElement(
                _LabelJs2['default'],
                _extends({}, other, {
                    url: url ? url : _this.props.url,
                    value: option.props.value ? option.props.value : option.props.children,
                    clickCallback: _this.activeHandler.bind(_this, clickCallback ? clickCallback : _this.props.clickCallback),
                    active: _this2.props.simple ? false : option.props.children === _this.state.checked }),
                option.props.children
            );
        }, this);

        var labelCroupContent = this.props.simple ? _react2['default'].createElement(
            'div',
            { className: _classnames3['default'](this.getClassName('group-simple')) },
            options
        ) : _react2['default'].createElement(
            _GridJs2['default'],
            { className: _classnames3['default'](this.getClassName('group'), (_classnames = {}, _classnames[this.getClassName('end')] = !!this.props.end, _classnames)) },
            _react2['default'].createElement(
                _RowJs2['default'],
                null,
                this.props.title ? _react2['default'].createElement(
                    _ColJs2['default'],
                    { sm: 1 },
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames3['default'](this.getClassName('title')) },
                        this.props.title
                    )
                ) : null,
                _react2['default'].createElement(
                    _ColJs2['default'],
                    { sm: this.props.title ? 11 : 12, end: true },
                    options
                )
            )
        );
        return labelCroupContent;
    };

    var _LabelGroup = LabelGroup;
    LabelGroup = _utilsClassNameMixin2['default'](LabelGroup) || LabelGroup;
    return LabelGroup;
})(_react.Component);

exports['default'] = LabelGroup;
module.exports = exports['default'];