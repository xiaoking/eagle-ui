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

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

/**
 * 布局组件
 * @class Grid
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */

var Grid = (function (_Component) {
    _inherits(Grid, _Component);

    function Grid() {
        _classCallCheck(this, _Grid);

        _Component.apply(this, arguments);
    }

    Grid.prototype.render = function render() {

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
                className: _classnames2['default'](this.getClassName('grid'), this.props.className) }),
            this.props.children
        );
    };

    _createClass(Grid, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }]);

    var _Grid = Grid;
    Grid = _utilsClassNameMixin2['default'](Grid) || Grid;
    return Grid;
})(_react.Component);

exports['default'] = Grid;
module.exports = exports['default'];