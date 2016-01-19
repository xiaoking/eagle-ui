'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputJs = require('.././Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _Suggestion2 = require('./Suggestion');

var _Suggestion3 = _interopRequireDefault(_Suggestion2);

var Search = (function (_Suggestion) {
    _inherits(Search, _Suggestion);

    _createClass(Search, null, [{
        key: 'defaultProps',
        value: {
            /**
             * 回调方法，主要作用将value传给父级元素。默认为null
             * @property callback
             * @type func
             * @default null
             * */
            getValueCallback: null,
            /**
             * 样式类名前缀
             * @property classPrefix
             * @type string
             *
             * */
            classPrefix: 'search',
            componentTag: 'div',
            defaultValue: '' /*,
                             icon:'arrow_drop_down',
                             iconStyle:{
                             width:'30px',
                             height:'30px',
                             top: '15px',
                             right: '0'
                             }*/
        },
        enumerable: true
    }]);

    function Search(props, context) {
        var defaultState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, Search);

        _Suggestion.call(this, props, context);

        this.inputId = this.uniqueId();

        _Suggestion.prototype.setDefaultState.call(this, defaultState);
    }

    Search.prototype.handler = function handler(eventType, e) {

        this.keyHandler(e);
        this.setState({
            value: e.target.value
        });
        if (this.props[eventType]) {
            this.props[eventType](e);
        }
    };

    Search.prototype.renderInput = function renderInput() {
        var _props = this.props;
        var getValueCallback = _props.getValueCallback;
        var children = _props.children;
        var iconStyle = _props.iconStyle;
        var value = _props.value;
        var classPrefix = _props.classPrefix;
        var componentTag = _props.componentTag;
        var defaultValue = _props.defaultValue;

        var other = _objectWithoutProperties(_props, ['getValueCallback', 'children', 'iconStyle', 'value', 'classPrefix', 'componentTag', 'defaultValue']);

        return _react2['default'].createElement(_InputJs2['default'], _extends({
            ref: this.inputId
        }, other, {
            value: this.getTextValue(),
            iconStyle: iconStyle,
            onKeyUp: this.handler.bind(this, 'onKeyUp'),
            onChange: this.handler.bind(this, 'onChange'),
            onKeyDown: this.handler.bind(this, 'onKeyDown'),
            onFocus: this.focusHandler.bind(this),
            onBlur: this.inputBlurHandler.bind(this)
        }));
    };

    Search.prototype.inputBlurHandler = function inputBlurHandler() {

        this.removeActiveValue();
        this.hide();
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    Search.prototype.focusHandler = function focusHandler(e) {
        this.show();
        if (this.props.onFocus) {
            this.props.onFocus(e);
        } else {
            var val = this.trim(e.target.value);
            this.setDefaultData();
        }
    };

    Search.prototype.checkedCallback = function checkedCallback(sug, index) {
        sug = _reactLibReactDOM2['default'].findDOMNode(sug);

        var subItem = sug.firstChild,
            offestHeight = 0;
        if (subItem) {
            offestHeight = subItem.offsetHeight;
            sug.scrollTop = index * offestHeight;
        }
    };

    Search.prototype.loadedCallback = function loadedCallback() {
        //获取高度，然后给ul设置高度
        //let sug = ReactDom.findDOMNode(this.refs.suggestion );
        //this.refs.suggestion
        var item = this.getValue();
        item && this.execMethod('getValue', item.value, item.key, 'init');
    };

    Search.prototype.getValueCallback = function getValueCallback(value, key, type, _this) {

        type != 'init' && setTimeout(function () {
            _reactLibReactDOM2['default'].findDOMNode(_this.refs[_this.inputId]).getElementsByTagName('input')[0].blur();
        });
        _this.props.getValueCallback && _this.props.getValueCallback(value, key, type);
    };

    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * */

    Search.prototype.renderSearch = function renderSearch() {
        return _react2['default'].createElement(
            this.componentTag,
            { className: this.getProperty(), value: this.state.value },
            this.renderInput(),
            this.renderSuggestion()
        );
    };

    Search.prototype.render = function render() {
        return this.renderSearch();
    };

    return Search;
})(_Suggestion3['default']);

exports['default'] = Search;
module.exports = exports['default'];