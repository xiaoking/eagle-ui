/**
 * Created by panqianjin on 15/11/3.
 */
'use strict';

exports.__esModule = true;

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

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

/**
 * 面包屑组件
 * @class crumb
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
        _classCallCheck(this, _Crumb);

        _Component.call(this, props, context);
    }

    /**
     * @method render
     * @return {ReactElement}
     */

    Crumb.prototype.render = function render() {
        var length = this.props.children.length;
        var li = this.props.children.map(function (item, index) {
            return _react2['default'].createElement(
                'li',
                null,
                index < length - 1 ? _react2['default'].createElement(
                    'a',
                    { href: item.props.url },
                    item.props.children
                ) : item.props.children
            );
        });
        return _react2['default'].createElement(
            _GridJs2['default'],
            { className: _classnames2['default'](this.getClassNamesForArguments(this.props.classPrefix)) },
            _react2['default'].createElement(
                'ul',
                null,
                li
            ),
            _react2['default'].createElement(_RowJs2['default'], { className: 'clearfix' })
        );
    };

    var _Crumb = Crumb;
    Crumb = _utilsClassNameMixin2['default'](Crumb) || Crumb;
    return Crumb;
})(_react.Component);

exports['default'] = Crumb;
module.exports = exports['default'];