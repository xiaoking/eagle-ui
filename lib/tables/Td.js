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
 * @class Td
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo table.js {js}
 * @show true
 * @author bo.an@dianping.com
 * */

var Td = (function (_Component) {
    _inherits(Td, _Component);

    function Td() {
        _classCallCheck(this, _Td);

        _Component.apply(this, arguments);
    }

    /**
     * @method render
     * @return {ReactElement}
     * */

    Td.prototype.render = function render() {
        return _react2['default'].createElement(
            'td',
            this.props,
            this.props.children,
            _classnames2['default'](this.getClassNames(this.props)) === '' ? null : _react2['default'].createElement('span', { className: _classnames2['default'](this.getClassNames(this.props)) })
        );
    };

    _createClass(Td, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {},
        enumerable: true
    }]);

    var _Td = Td;
    Td = _utilsClassNameMixinJs2['default'](Td) || Td;
    return Td;
})(_react.Component);

exports['default'] = Td;
module.exports = exports['default'];