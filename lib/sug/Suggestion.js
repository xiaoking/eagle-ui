'use strict';

exports.__esModule = true;

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

var _utilsComponent = require('.././utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

require('babel-polyfill');

var Suggestion = (function (_Component) {
    _inherits(Suggestion, _Component);

    function Suggestion(props, context) {
        _classCallCheck(this, Suggestion);

        _Component.call(this, props, context);

        //获取初始数据
        this.options = this.getOptions();

        //this.setState();
        //缓存
        this._cache = {};

        this.suggestion = this.uniqueId();

        //selectItem 选中项
        this.selectItem = null;
    }

    Suggestion.prototype.setDefaultState = function setDefaultState(obj) {
        _Component.prototype.setDefaultState.call(this, _extend2['default']({}, {
            _reload: false,
            _data: this.options,
            _selectedIndex: -1,
            _selectedValue: '',
            _key: this.props.defaultChecked || this.props.value || '',
            value: this.props.defaultChecked || this.props.value || '',
            _activeValue: '',
            delay: 400
        }, obj));
    };

    Suggestion.prototype.setCache = function setCache(key, value) {
        this._cache[key] = value;
    };

    Suggestion.prototype.getCache = function getCache(key) {
        return this._cache[key];
    };

    Suggestion.prototype.setDefaultData = function setDefaultData() {
        this.setState({
            _selectedIndex: -1,
            _data: this.options
        });
    };

    //搜索 数据查询方式 ajax或者直接查询或者缓存中获取

    Suggestion.prototype.search = function search(key) {
        var data, _this, str, reg;

        return regeneratorRuntime.async(function search$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    data = this.getCache(key), _this = this;
                    context$2$0.prev = 1;

                    if (!((!data || data.length <= 0) && key != '')) {
                        context$2$0.next = 8;
                        break;
                    }

                    context$2$0.next = 5;
                    return regeneratorRuntime.awrap(_this.execMethod('query', key));

                case 5:
                    data = context$2$0.sent;

                    //没拿到数据则从原始数据中查询
                    if (!data) {
                        str = JSON.stringify(this.options);
                        reg = new RegExp('([^[},]*\{+"key":"[^"]*' + key + '[^"]*".+?\})', 'gi');

                        str = str.match(reg);

                        data = str ? str : []; //this._cache[key];
                    }

                    this.setCache(key, data);

                case 8:
                    //重新绑定data渲染数据
                    this.setState({
                        _data: data && data.length > 0 ? data : this.props.noResultTips ? [{
                            key: this.props.noResultTips,
                            value: 'noResult'
                        }] : [],
                        _selectedIndex: -1
                    });

                    if (this.state._data.length > 0) {
                        this.show();
                    }

                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);
                    throw new Error(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this, [[1, 12]]);
    };

    Suggestion.prototype.getOptions = function getOptions() {
        var optionsList = [];
        _react2['default'].Children.map(this.props.children, function (item, i) {
            var _item$props = item.props;
            var value = _item$props.value;
            var children = _item$props.children;
            var subKey = _item$props.subKey;

            var other = _objectWithoutProperties(_item$props, ['value', 'children', 'subKey']);

            optionsList.push({
                key: children,
                value: value,
                subKey: subKey || '',
                index: i
            });
        }, this);

        return optionsList;
    };

    Suggestion.prototype.moveActive = function moveActive(type) {
        var _data = this.state._data;

        var _selectedIndex = this.state._selectedIndex;
        _selectedIndex = type == 'up' ? _selectedIndex - 1 : _selectedIndex + 1;

        if (_selectedIndex >= _data.length) {
            _selectedIndex = 0;
        }

        if (_selectedIndex < 0) {
            _selectedIndex = _data.length - 1;
        }
        var data = this.getData(_selectedIndex);
        this.setState({
            _selectedIndex: _selectedIndex,
            _activeValue: data ? data.key : ''
        });
        //checkedCallback
        this.execMethod('checked', this.refs[this.suggestion], _selectedIndex);
        /*clearTimeout(this.__clearTimeoutForValue);
        this.__clearTimeoutForValue = setTimeout(,this.props.delay*3);*/
    };

    //监听用户输入

    Suggestion.prototype.keyHandler = function keyHandler(event) {
        var _this = this;
        if (event.type != 'keydown') {
            var val = this.trim(event.target.value);
            if (val === '') {
                this.hide();
                this.entryCallback();
                return;
            } else {
                clearTimeout(this.__entryTimeout);
                this.__entryTimeout = setTimeout(function () {
                    _this.entryCallback(val);
                }, this.state.delay);
            }
            switch (event.keyCode) {
                case 27:
                    this.hide();
                    return;
                case 38:
                    //up键
                    this.show();
                    this.moveActive('up');
                    return;
                case 40:
                    //down键
                    this.show();
                    this.moveActive('down');
                    return;
                case 13:
                    //回车
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.state._selectedIndex <= -1) {
                        //当用户没有选择任何sug项而直接按回车时
                        this.execMethod('success', val);
                    } else {
                        //当用户通过上下键选择了某一项sug项后按回车时
                        this._clickHandler(this.getData(this.state._selectedIndex), 'enter');
                    }
                    return;
                default:
                    this.setState({
                        _activeValue: ''
                    });
                    this.valChange(val);
            }
        }
    };

    Suggestion.prototype.entryCallback = function entryCallback() {
        //可重写
        //this.hide();
    };

    Suggestion.prototype.valChange = function valChange(key) {
        clearTimeout(this.timeOutId);
        this.timeOutId = setTimeout((function () {
            this.search(key);
        }).bind(this), this.state.delay);
    };

    Suggestion.prototype._mouseEnterHandler = function _mouseEnterHandler(i, item) {

        if (this.isEmptyItems(item.key)) {
            return this;
        }
        this.setState({
            _selectedIndex: i
        });
    };

    Suggestion.prototype.setValue = function setValue(value) {
        this.setState({
            value: value
        });
    };

    Suggestion.prototype.getData = function getData(index) {
        var data = this.state._data[index];
        return data ? typeof data == 'string' ? JSON.parse(data) : data : null;
    };

    Suggestion.prototype.isEmptyItems = function isEmptyItems(key) {

        return key != '' && key == this.props.noResultTips;
    };

    Suggestion.prototype._clickHandler = function _clickHandler(item) {
        var type = arguments.length <= 1 || arguments[1] === undefined ? "click" : arguments[1];

        if (this.isEmptyItems(item.key)) {
            return this;
        }

        this.selectItem = item;

        this.setValue(item.key);
        this.setState({
            _activeValue: '',
            _selectedIndex: -1
        });

        this.execMethod('getValue', item.value, item.key, type);

        this.hide();
    };

    Suggestion.prototype.renderSubKey = function renderSubKey(subKey) {

        var html = [];

        if (subKey) {
            html.push(_react2['default'].createElement(
                'div',
                { className: 'subkey', key: subKey },
                subKey
            ));
        }
        return html;
    };

    Suggestion.prototype.renderList = function renderList() {
        var data = this.state._data,
            value = this.state.value,
            selectedValue = this.state._selectedValue,
            list = [];

        for (var i = 0, len = data.length, item = undefined; i < len; i++) {
            item = this.getData(i);
            if (value == item.key) {
                this.selectItem = item;
            }

            list.push(_react2['default'].createElement(
                'li',
                {
                    key: item.value,
                    'data-value': item.value,
                    className: _classnames2['default']({
                        'active': i == this.state._selectedIndex,
                        'noresult': this.isEmptyItems(item.key)
                    }),
                    onMouseEnter: this._mouseEnterHandler.bind(this, i, item),
                    onMouseLeave: this._mouseEnterHandler.bind(this, -1, item),
                    onMouseDown: this._clickHandler.bind(this, item, 'click')
                },
                item.key,
                this.renderSubKey(item.subKey)
            ));
        }
        return list;
    };

    Suggestion.prototype.getValue = function getValue() {
        return this.selectItem;
    };

    Suggestion.prototype.getTextValue = function getTextValue() {
        var _state = this.state;
        var value = _state.value;
        var _activeValue = _state._activeValue;

        return _activeValue ? _activeValue : value;
    };

    Suggestion.prototype.removeActiveValue = function removeActiveValue() {
        this.setState({
            _activeValue: ''
        });
    };

    //渲染列表

    Suggestion.prototype.renderSuggestion = function renderSuggestion() {
        return _react2['default'].createElement(
            'ul',
            { ref: this.suggestion, className: _classnames2['default'](this.getClassNamespace() + '-suggestion', {}, this.state._isShow ? '' : 'hide'), style: { zIndex: this.props.zIndex || 1 } },
            this.renderList()
        );
    };

    return Suggestion;
})(_utilsComponent2['default']);

exports['default'] = Suggestion;
module.exports = exports['default'];

//缓存中没有数据

//拿取query异步数据

//options

///([^}]+"key":"[^"]*北京[^"]*".+?\})/gi
//let reg = new RegExp('(\{[^}]+"key":"[^"]*'+key+'[^"]*".+?\})','gi');