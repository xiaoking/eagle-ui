/**
 * Created by panqianjin on 15/11/3.
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
 * 面包屑组件
 * @class Crumb
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo crumb.js{js}
 * @show true
 * */

var Crumb = (function (_Component) {
    _inherits(Crumb, _Component);

    _createClass(Crumb, null, [{
        key: 'propTypes',
        value: {
            /**
             * 类名样式前缀
             * @property classPrefix
             * @type sting
             * @default crumb
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * @default div
             * */
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'crumb',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Crumb(props, context) {
        _classCallCheck(this, Crumb);

        _Component.call(this, props, context);
    }

    /**
     * @method render
     * @return {ReactElement}
     */

    Crumb.prototype.render = function render() {
        var length = this.props.children.length;
        var li = this.props.children.map(function (item, index) {
            var children = item.props.children;

            return _react2['default'].createElement(
                'li',
                { key: children + index },
                index < length - 1 ? _react2['default'].createElement(
                    'a',
                    { href: item.props.url },
                    children
                ) : children
            );
        });
        return _react2['default'].createElement(
            this.componentTag,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(), 'clearfix', this.props.className) }),
            _react2['default'].createElement(
                'ul',
                null,
                li
            )
        );
    };

    return Crumb;
})(_utilsComponent2['default']);

exports['default'] = Crumb;
module.exports = exports['default'];