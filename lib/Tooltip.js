/**
 * Created by panqianjin on 15/11/17.
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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip
 * @moudle ui
 * @constructor
 * @since 0.1.0
 * @demo tooltip.js{js}
 * @show false
 * */

var Tooltip = (function (_Component) {
    _inherits(Tooltip, _Component);

    _createClass(Tooltip, null, [{
        key: 'propType',
        value: {
            /**
             * 提示是否展示
             * @property show
             * @type Boolean
             * @default null
             * */
            show: _react.PropTypes.boolean,
            /**
             * 提示内容
             * @property msg
             * @type String
             * @default null
             * */
            msg: _react.PropTypes.string,
            /**
             * 提示方向
             * @property direction
             * @type String
             * @default null
             * */
            direction: _react.PropTypes.string,
            classPrefix: _react.PropTypes.string,
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }]);

    function Tooltip(props, context) {
        _classCallCheck(this, _Tooltip);

        _Component.call(this, props, context);
        this.state = {
            show: this.props.show,
            direction: this.props.direction
        };
    }

    /**
     * 接收到新props时执行,state.show变为nextProps.show
     * 接收到新props时执行,state.show变为nextProps.show
     * 实现隐藏与显示
     * @method componentWillReceiveProps
     * @return null
     * */

    Tooltip.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        });
    };

    Tooltip.prototype.render = function render() {
        var _classnames;

        return _react2['default'].createElement(
            _GridJs2['default'],
            { ref: this.props.ref, className: _classnames3['default'](this.getClassName('wraper'), (_classnames = {}, _classnames[this.getClassName('show')] = this.state.show, _classnames)) },
            _react2['default'].createElement('div', { className: _classnames3['default'](this.getClassName('arrow-' + this.props.direction)) }),
            _react2['default'].createElement(
                'div',
                { className: _classnames3['default'](this.getClassName('content')) },
                this.props.msg
            )
        );
    };

    var _Tooltip = Tooltip;
    Tooltip = _utilsClassNameMixin2['default'](Tooltip) || Tooltip;
    return Tooltip;
})(_react.Component);

exports['default'] = Tooltip;
module.exports = exports['default'];

//[this.getClassName('show')]: true