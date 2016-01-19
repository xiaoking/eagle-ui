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

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _utilsIcon = require('../utils/Icon');

var _utilsIcon2 = _interopRequireDefault(_utilsIcon);

var masks = {};

var Mask = (function (_Component) {
    _inherits(Mask, _Component);

    _createClass(Mask, null, [{
        key: 'defaultProps',
        value: {
            isClose: true, //是否有x图标
            title: '', //标题
            classPrefix: 'dialog',
            componentTag: 'div',
            contentAlign: 'left',
            outside: false,
            buttons: [
                /*{
                    type: 'success',
                    name: '确认',
                    callback:()=>{}
                },
                {
                    type:'cancel',
                    name:'取消',
                    callback:()=>{}
                }*/
            ]
        },
        enumerable: true
    }]);

    function Mask(props, context) {
        _classCallCheck(this, Mask);

        _Component.call(this, props, context);
    }

    Mask.push = function push(key, modal) {
        masks[key] = modal;
    };

    Mask.prototype.renderFooter = function renderFooter() {
        var footer = [];

        var _props = this.props;
        var buttons = _props.buttons;
        var buttonAlign = _props.buttonAlign;

        if (buttons && buttons.length > 0) {
            var btns = [];

            for (var i = 0, item = undefined, len = buttons.length; i < len; i++) {
                item = buttons[i];
                btns.push(_react2['default'].createElement(
                    _Button2['default'],
                    { key: item.name, egSize: 'xs',
                        egStyle: item.egStyle ? item.egStyle : 'default',
                        onClick: item.type == 'success' || item.type == 'cancel' ? this.props[item.type + 'Callback'] : item.callback },
                    item.name
                ));
            }
            footer.push(_react2['default'].createElement(
                'div',
                { key: 'mask-footer', className: 'footer', style: {
                        textAlign: buttonAlign
                    } },
                btns
            ));
        }

        return footer;
    };

    Mask.prototype.renderClose = function renderClose() {
        var _props2 = this.props;
        var cancelCallback = _props2.cancelCallback;
        var isClose = _props2.isClose;

        if (isClose) {
            return _react2['default'].createElement(_utilsIcon2['default'], { onClick: cancelCallback.bind(cancelCallback, 'close'), name: 'close', style: {
                    fill: '#999',
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    cursor: 'pointer'
                } });
        }
        return null;
    };

    Mask.prototype.renderDialog = function renderDialog(className) {
        var _props3 = this.props;
        var message = _props3.message;
        var title = _props3.title;
        var successCallback = _props3.successCallback;
        var cancelCallback = _props3.cancelCallback;
        var isHeaderBackground = _props3.isHeaderBackground;
        var isHeader = _props3.isHeader;
        var contentAlign = _props3.contentAlign;
        var buttonAlign = _props3.buttonAlign;
        var id = _props3.id;
        var outside = _props3.outside;

        this.setProperty('outside', outside);
        return _react2['default'].createElement(
            this.componentTag,
            { className: _classnames2['default'](this.getProperty(), this.getClassName(className)) },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('header', 'h4', {
                        'header-bg': isHeaderBackground,
                        'hide': !isHeader || title == ''
                    }), style: {
                        textAlign: 'left'
                    } },
                title
            ),
            _react2['default'].createElement(
                'div',
                { className: 'content', style: {
                        textAlign: contentAlign
                    } },
                masks[id]
            ),
            this.renderFooter(),
            this.renderClose()
        );
    };

    Mask.prototype.render = function render() {
        return this.renderDialog('masks');
    };

    return Mask;
})(_utilsComponent2['default']);

exports['default'] = Mask;
module.exports = exports['default'];