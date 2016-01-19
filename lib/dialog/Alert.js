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

var Alert = (function (_Component) {
    _inherits(Alert, _Component);

    _createClass(Alert, null, [{
        key: 'defaultProps',
        value: {
            isClose: false, //是否有x图标
            title: '警告框', //标题
            classPrefix: 'dialog',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Alert(props, context) {
        _classCallCheck(this, Alert);

        _Component.call(this, props, context);
    }

    Alert.prototype.renderDialog = function renderDialog(className) {
        var _props = this.props;
        var message = _props.message;
        var title = _props.title;
        var successCallback = _props.successCallback;
        var cancelCallback = _props.cancelCallback;
        var isHeaderBackground = _props.isHeaderBackground;
        var isHeader = _props.isHeader;
        var contentAlign = _props.contentAlign;
        var buttonAlign = _props.buttonAlign;

        return _react2['default'].createElement(
            this.componentTag,
            { className: _classnames2['default'](this.getProperty(), this.getClassName(className)) },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('header', 'h4', {
                        'header-bg': isHeaderBackground,
                        'hide': !isHeader
                    }) },
                title
            ),
            _react2['default'].createElement(
                'div',
                { className: 'content', style: {
                        textAlign: contentAlign
                    } },
                message
            ),
            _react2['default'].createElement(
                'div',
                { className: 'footer', style: {
                        textAlign: buttonAlign
                    } },
                _react2['default'].createElement(
                    _Button2['default'],
                    { egSize: 'xs', onClick: successCallback },
                    '确定'
                )
            )
        );
    };

    Alert.prototype.render = function render() {
        return this.renderDialog('alert');
    };

    return Alert;
})(_utilsComponent2['default']);

exports['default'] = Alert;
module.exports = exports['default'];