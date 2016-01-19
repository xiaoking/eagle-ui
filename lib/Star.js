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
 * 星级评价
 * @class Star
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo star.js {js}
 * @show true
 * */

var Star = (function (_Component) {
    _inherits(Star, _Component);

    _createClass(Star, null, [{
        key: 'propTypes',
        value: {
            /**
             * 星级评价分数
             * @property Rate
             * @type number
             * @default 默认未0分
             * */
            rate: _react.PropTypes.number,
            /**
             * 星星大小
             * @property size
             * @type String||number
             * @default undefined  可以取值10-20 默认单位为'px'
             * */
            egSize: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'star',
            rate: 0
        },
        enumerable: true
    }]);

    function Star(props, context) {
        _classCallCheck(this, Star);

        _Component.call(this, props, context);
    }

    Star.prototype.render = function render() {
        var _props = this.props;
        var rate = _props.rate;
        var size = _props.size;

        //兼容用户输入px为单位的数据大小
        size = /px/i.test(size) ? size.replace('px', '') : size;
        var customizeStyle = size ? {
            width: size * 5 + 'px',
            height: size - 1 + 'px',
            backgroundSize: size * 5 + 'px auto'
        } : {};
        var shadowPosition = size ? {
            backgroundPosition: "0  -" + size + "px"
        } : {};
        return _react2['default'].createElement(
            'div',
            { className: this.getProperty(), style: customizeStyle },
            _react2['default'].createElement('div', { className: this.getClassName('grey'), style: _extends({ width: rate + '%' }, shadowPosition) })
        );
    };

    return Star;
})(_utilsComponent2['default']);

exports['default'] = Star;
module.exports = exports['default'];