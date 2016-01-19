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

var _utilsClassNameMixinJs = require('../utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

/**
 * 表格组件
 * @class Th
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo table.js {js}
 * @show true
 * @author bo.an@dianping.com
 * */

var Th = (function (_Component) {
    _inherits(Th, _Component);

    _createClass(Th, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {},
        enumerable: true
    }]);

    function Th(props, context) {
        _classCallCheck(this, _Th);

        _Component.call(this, props, context);
    }

    Th.prototype.sortHandler = function sortHandler() {
        var sortMethod = this.props.sort;
        if (!sortMethod || sortMethod === 'asc') {
            sortMethod = 'des';
        } else {
            sortMethod = 'asc';
        }
        this.props.clickCallback(this.props.field, sortMethod);
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Th.prototype.render = function render() {
        return _react2['default'].createElement(
            'th',
            {
                onClick: this.sortHandler.bind(this) },
            this.props.children,
            this.props.sort === 'des' ? _react2['default'].createElement(
                'span',
                null,
                '↓'
            ) : this.props.sort === 'asc' ? _react2['default'].createElement(
                'span',
                null,
                '↑'
            ) : null
        );
    };

    var _Th = Th;
    Th = _utilsClassNameMixinJs2['default'](Th) || Th;
    return Th;
})(_react.Component);

exports['default'] = Th;
module.exports = exports['default'];