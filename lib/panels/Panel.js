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

var _PanelHeader = require('./PanelHeader');

var _PanelHeader2 = _interopRequireDefault(_PanelHeader);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

/**
 * Panel组件
 * @class Panel
 * @constructor
 * @module panel
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo panel.js {js}
 * @author bo.an@dianping.com
 * */

var Panel = (function (_Component) {
    _inherits(Panel, _Component);

    function Panel() {
        _classCallCheck(this, Panel);

        _Component.apply(this, arguments);
    }

    Panel.prototype.renderHeading = function renderHeading() {
        var heading = this.props.heading;

        if (heading) {
            return _react2['default'].createElement(
                _PanelHeader2['default'],
                { className: this.getClassName('panel-header-flag', false) },
                _react2['default'].createElement(
                    'h4',
                    null,
                    heading
                )
            );
        }

        return null;
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Panel.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(), this.props.className), style: this.getStyles(this.props.style) }),
            this.renderHeading(),
            this.props.children
        );
    };

    _createClass(Panel, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标题
             * @property heading
             * @type String
             * @default empty
             * */
            heading: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {

            heading: '',
            classPrefix: 'panel'
        },
        enumerable: true
    }]);

    return Panel;
})(_utilsComponent2['default']);

exports['default'] = Panel;
module.exports = exports['default'];