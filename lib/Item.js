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

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

/**
 * 表组件
 * @class Item
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @author bo.an@dianping.com
 * */

var Item = (function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, _Item);

        _Component.apply(this, arguments);
    }

    /**
     * @method render
     * @return {ReactElement}
     * */

    Item.prototype.render = function render() {
        var renderStyle = this.props.style || {};
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getClassNamesForArguments('item'), this.props.className, this.getClassNames(this.props)), style: renderStyle },
            this.props.children
        );
    };

    _createClass(Item, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'item'
        },
        enumerable: true
    }]);

    var _Item = Item;
    Item = _utilsClassNameMixinJs2['default'](Item) || Item;
    return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];