'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DialogFactory = require('./DialogFactory');

var _DialogFactory2 = _interopRequireDefault(_DialogFactory);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsComponent = require('./../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _BaseDialog = require('./BaseDialog');

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var Dialog = (function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        _Component.call(this, props, context);

        this.state = {
            update: this.uniqueId()
        };
        this.update(props);
    }

    Dialog.prototype.loadedCallback = function loadedCallback() {};

    Dialog.prototype.update = function update() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

        new _DialogFactory2['default'](props.key || props.id || props.name, props.type || 'mask', props.children, props);
    };

    Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.update(props);
    };

    Dialog.prototype.shouldComponentUpdate = function shouldComponentUpdate(props, state) {
        this.update(props);
        return false;
    };

    Dialog.alert = function alert(message) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve, reject) {
            new _DialogFactory2['default']().show(_BaseDialog2['default'].ALERT, _extend2['default']({}, {
                successCallback: function successCallback() {
                    resolve();
                    new _DialogFactory2['default']().hide();
                },
                message: message
            }, opts));
        })['catch'](function (ex) {
            console.dir(ex);
        });
    };

    Dialog.confirm = function confirm(message) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve, reject) {
            new _DialogFactory2['default']().show(_BaseDialog2['default'].CONFRIM, _extend2['default']({}, {
                successCallback: function successCallback() {
                    resolve();
                    new _DialogFactory2['default']().hide();
                },
                cancelCallback: function cancelCallback() {
                    reject();
                    new _DialogFactory2['default']().hide();
                },
                message: message
            }, opts));
        })['catch'](function (ex) {
            console.dir(ex);
        });
    };

    Dialog.mask = function mask(dialogId) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve, reject) {
            new _DialogFactory2['default']().show(dialogId, _extend2['default']({}, {
                successCallback: resolve,
                id: dialogId,
                contentAlign: 'left',
                cancelCallback: function cancelCallback(type) {
                    reject(type);
                    new _DialogFactory2['default']().hide();
                },
                closeCallback: function closeCallback(type) {
                    reject(type);
                    new _DialogFactory2['default']().hide();
                }
            }, opts));
        })['catch'](function (ex) {
            console.dir(ex);
        });
    };

    Dialog.close = function close() {
        new _DialogFactory2['default']().hide();
    };

    Dialog.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { style: { display: 'none' } },
            this.state.update
        );
    };

    return Dialog;
})(_utilsComponent2['default']);

exports['default'] = Dialog;
module.exports = exports['default'];