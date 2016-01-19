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
 * PanelContent组件
 * @class PanelContent
 * @constructor
 * @module panel
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo panel.js {js}
 * @author bo.an@dianping.com
 * */

var PanelContent = (function (_Component) {
    _inherits(PanelContent, _Component);

    function PanelContent() {
        _classCallCheck(this, _PanelContent);

        _Component.apply(this, arguments);
    }

    /**
     * @method render
     * @return {ReactElement}
     * */

    PanelContent.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getClassName('content'), this.props.padding ? this.getClassName('padding') : '', this.props.className) },
            this.props.children
        );
    };

    _createClass(PanelContent, null, [{
        key: 'propTypes',
        value: {
            /**
             * 是否加padding
             * @property padding
             * @type bool
             * @default true
             * */
            padding: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'panel',
            padding: true
        },
        enumerable: true
    }]);

    var _PanelContent = PanelContent;
    PanelContent = _utilsClassNameMixinJs2['default'](PanelContent) || PanelContent;
    return PanelContent;
})(_react.Component);

exports['default'] = PanelContent;
module.exports = exports['default'];