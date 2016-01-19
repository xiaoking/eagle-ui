'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sugSearch = require('./sug/Search');

var _sugSearch2 = _interopRequireDefault(_sugSearch);

/**
 * 搜索联想组件。
 * @Class Suggestion
 * @Module ui
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo suggestion.js {js}
 * */

var Suggestion = (function (_Search) {
    _inherits(Suggestion, _Search);

    function Suggestion(props, context) {
        _classCallCheck(this, Suggestion);

        _Search.call(this, props, context, {});
    }

    Suggestion.prototype.loadedCallback = function loadedCallback() {};

    Suggestion.prototype.focusHandler = function focusHandler(e) {
        _Search.prototype.focusHandler.call(this, e);
        var value = this.state.value;

        if (value != '') {
            this.show();
            this.search(value);
        } else if (this.state._activeValue == '') {
            this.hide();
        }
    };

    Suggestion.prototype.entryCallback = function entryCallback() {
        if (this.state._activeValue == '') {
            this.setDefaultData();
            this.hide();
        }
    };

    _createClass(Suggestion, null, [{
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
            classPrefix: 'suggestion-warp',
            componentTag: 'div',
            defaultValue: '',
            icon: '',
            iconDirection: '',
            iconStyle: {},
            noResultTips: '没有匹配结果'
        },
        enumerable: true
    }]);

    return Suggestion;
})(_sugSearch2['default']);

exports['default'] = Suggestion;
module.exports = exports['default'];