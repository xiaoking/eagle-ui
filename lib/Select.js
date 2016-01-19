/**
 * Created by panqianjin on 15/11/12.
 */
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var _sugSearch = require('./sug/Search');

var _sugSearch2 = _interopRequireDefault(_sugSearch);

/**
 * 下拉选择框组件。
 * 有input参数可以自由输入，否则不在列表中的输入值将改变为第一个item
 * @Class Select
 * @Module form
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo select.js {js}
 * */

var Select = (function (_Search) {
    _inherits(Select, _Search);

    _createClass(Select, null, [{
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
            classPrefix: 'select',
            componentTag: 'div',
            defaultValue: '',
            icon: 'arrow_drop_down',
            iconStyle: {
                width: '30px',
                height: '30px',
                top: '15px',
                right: '0'
            }
        },
        enumerable: true
    }]);

    function Select(props, context) {
        var defaultState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, Select);

        _Search.call(this, props, context);

        this.inputId = this.uniqueId();

        _Search.prototype.setDefaultState.call(this, defaultState);
    }

    Select.prototype.entryCallback = function entryCallback() {
        if (this.state._activeValue == '' && this.state.value == '') {
            this.setDefaultData();
            this.show();
        }
    };

    return Select;
})(_sugSearch2['default']);

exports['default'] = Select;
module.exports = exports['default'];