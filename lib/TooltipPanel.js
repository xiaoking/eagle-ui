/**
 * Created by panqianjin on 15/11/17.
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

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TooltipJs = require('./Tooltip.js');

var _TooltipJs2 = _interopRequireDefault(_TooltipJs);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

/**
 * tipsPanel组件
 * 方向可选：top,down,left,right.默认down
 * 存在边界判断，若指定方向容纳不了提示，会转为默认
 * @class TooltipPanel
 * @moudle ui
 * @constructor
 * @since 0.1.0
 * @demo tooltip.js{js}
 * @show false
 * */

var TooltipPanel = (function (_Component) {
    _inherits(TooltipPanel, _Component);

    _createClass(TooltipPanel, null, [{
        key: 'propType',
        value: {
            /**
             * 提示是否展示
             * @property show
             * @type Boolean
             * @default false
             * */
            show: _react.PropTypes.boolean,
            /**
             * 提示内容
             * @property msg
             * @type String
             * @default 这是个提示
             * */
            msg: _react.PropTypes.string,
            /**
             * 提示方向
             * @property direction
             * @type String
             * @default down
             * */
            direction: _react.PropTypes.string,
            classPrefix: _react.PropTypes.string,
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            show: false,
            msg: "这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示",
            direction: 'down',
            classPrefix: 'tooltip',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function TooltipPanel(props, context) {
        _classCallCheck(this, _TooltipPanel);

        _Component.call(this, props, context);
        this.state = {
            /**
             * 显示与否由父组件控制
             * @type Boolean
             * */
            show: this.props.show
        };
    }

    /**
     * 渲染完成时进行方向和边界判断，调整tips的位置
     * @method componentDidMount
     * @return null
     * */

    TooltipPanel.prototype.componentDidMount = function componentDidMount() {
        this.changeStyle(this.props.direction);
    };

    /**
     * @method render
     * @return ReactElement
     * */

    TooltipPanel.prototype.render = function render() {
        var componentTag = this.props.children.props.componentTag;

        //  <componentTag {...this.props} onMouseEnter={::this.showTips} onMouseOut={::this.hideTips}/>
        return _react2['default'].createElement(
            _GridJs2['default'],
            _extends({}, this.props, { className: _classnames2['default'](this.getClassName('container')), ref: 'container' }),
            _react2['default'].cloneElement(this.props.children, {
                onMouseEnter: this.showTips.bind(this),
                onMouseOut: this.hideTips.bind(this)
            }),
            _react2['default'].createElement(_TooltipJs2['default'], _extends({ ref: 'tips' }, this.props, { show: this.state.show }))
        );
    };

    /**
     * 鼠标over，set show true,tips显示
     * @method showTips
     * @return null
     * */

    TooltipPanel.prototype.showTips = function showTips() {
        this.setState({
            show: true
        });
    };

    /**
     * 鼠标leave，set show false, tips隐藏
     * @method hideTips
     * @return null
     * */

    TooltipPanel.prototype.hideTips = function hideTips() {
        this.setState({
            show: false
        });
    };

    /**
     * tips方向和边界判断，调整tips的位置
     * @method changeStyle
     * @param direction {String}
     * @return null
     * */

    TooltipPanel.prototype.changeStyle = function changeStyle(direction) {
        var dir = direction;
        var dbody = document.body;
        var delement = document.documentElement;

        var tipNode = _reactLibReactDOM2['default'].findDOMNode(this.refs.tips);

        var eleNode = _reactLibReactDOM2['default'].findDOMNode(this.refs.container).children[0];

        var bodys = {
            height: dbody.clientHeight,
            width: dbody.clientWidth
        };
        var doc = {
            height: delement.clientHeight,
            width: delement.clientWidth
        };
        var tips = {
            height: tipNode.offsetHeight,
            width: tipNode.offsetWidth
        };
        var element = {
            height: eleNode.offsetHeight,
            width: eleNode.offsetWidth,
            left: eleNode.parentNode.offsetLeft,
            top: eleNode.parentNode.offsetTop
        };
        var maxBody = this.getMaxBody(bodys, doc);
        var validate = this.isValidate(dir, tips, element, maxBody);
        if (!validate) {
            var arrow = tipNode.children[0];
            this.removeClass(arrow, _classnames2['default'](this.getClassName('arrow-' + dir)));
            this.addClass(arrow, _classnames2['default'](this.getClassName('arrow-down')));
            dir = 'down';
        }
        switch (dir) {
            case 'down':
                tipNode.style.left = '0';
                break;
            case 'top':
                tipNode.style.top = '-' + (tips.height + 10) + 'px';
                tipNode.style.left = '0';
                break;
            case 'left':
                tipNode.style.left = '-' + (tips.width + 5) + 'px';
                tipNode.style.top = (element.height - tips.height) / 2 - 5 + 'px';
                break;
            case 'right':
                tipNode.style.left = 'auto';
                tipNode.style.right = '-' + (tips.width + 5) + 'px';
                tipNode.style.top = (element.height - tips.height) / 2 - 5 + 'px';
                break;
            default:
                break;
        }
    };

    /**
     * 获得浏览器的边界大小
     * @method getMaxBody
     * @param body {Object}
     * @param doc {Object}
     * @return maxBody {Object}
     * */

    TooltipPanel.prototype.getMaxBody = function getMaxBody(body, doc) {
        var maxBody = {
            height: body.height > doc.height ? body.height : doc.height,
            width: body.width > doc.width ? body.width : doc.width

        };
        return maxBody;
    };

    /**
     * 判断是否满足边界条件,是返回true否返回false
     * @method isValidate
     * @param dir {String}
     * @param tips {Object}
     * @param ele {Object}
     * @param maxBody {Object}
     * @return flag {Boolean}
     * */

    TooltipPanel.prototype.isValidate = function isValidate(dir, tips, ele, maxBody) {
        var flag = false;
        switch (dir) {
            case 'down':
                flag = maxBody.height - ele.top > ele.height + tips.height ? true : false;
                return flag;
                break;
            case 'top':
                flag = ele.top > tips.height ? true : false;
                return flag;
                break;
            case 'left':
                flag = ele.left > tips.width ? true : false;
                return flag;
                break;
            case 'right':
                flag = maxBody.width - ele.left > ele.width + tips.width ? true : false;
                return flag;
                break;
            default:
                return flag;
                break;
        }
    };

    var _TooltipPanel = TooltipPanel;
    TooltipPanel = _utilsClassNameMixin2['default'](TooltipPanel) || TooltipPanel;
    return TooltipPanel;
})(_react.Component);

exports['default'] = TooltipPanel;
module.exports = exports['default'];