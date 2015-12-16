/**
 * Created by panqianjin on 15/11/12.
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

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

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

var Select = (function (_Component) {
    _inherits(Select, _Component);

    _createClass(Select, null, [{
        key: 'defaultProps',
        value: {
            /**
             * 回调方法，主要作用将value传给父级元素。默认为null
             * @property callback
             * @type func
             * @default null
             * */
            callback: null,
            /**
             * 样式类名前缀
             * @property classPrefix
             * @type string
             *
             * */
            classPrefix: 'select',
            componentTag: 'div',
            value: '',
            /**
             * option对应的value
             * @property key
             * &type String
             * */
            key: '',
            show: false,
            target: '0',
            /**
             * 输入值，用来匹配显示对应列表的内容
             * @property autoVal
             * &type String
             * */
            autoVal: ''
        },
        enumerable: true
    }]);

    function Select(props, context) {
        _classCallCheck(this, _Select);

        _Component.call(this, props, context);
        this.heightTag = 0;
        var keys = this.getDefaultKey(this.props.keys);
        this.state = {
            show: this.props.show,
            /**
             * item content文本值
             * @type {String}
             * */
            //value:this.props.keys == ''?this.props.value:this.props.children[this.props.keys].props.children,
            value: keys,
            /**
             * item value值
             * @type {String}
             * */
            keys: this.props.keys,
            /**
             * 是否可以自由输入
             * @type {Boolean}
             * */
            input: this.props.input
        };
    }

    Select.prototype.getDefaultKey = function getDefaultKey(keys) {
        var deKey = this.props.value;
        if (keys != '') {
            this.props.children.forEach(function (item, index) {
                if (item.props.value == keys) {
                    deKey = item.props.children;
                }
            });
        }
        return deKey;
    };

    /**
     * 第一次渲染完成后执行,为document添加点击监听事件，判断是否关闭ul
     * 生命周期方法
     * @method componentDidMount
     * */

    Select.prototype.componentDidMount = function componentDidMount() {
        var _this = this;
        var selectContair = _react2['default'].findDOMNode(this.refs.selectContair);
        var selectUl = _react2['default'].findDOMNode(this.refs.selectUl);
        document.addEventListener('click', function (e) {
            if (_this.isParent(e.target, selectContair)) {
                //console.dir('不要动');
            } else {
                    if (_this.state.show) {
                        _this.hideUl();
                    }
                }
        }, false);
        this.heightTag = selectUl.offsetHeight;
        selectUl.style.height = '0';
        if (!this.state.show) {
            this.removeClass(selectUl, 'height-none');
        }
    };

    Select.prototype.componentDidUpdate = function componentDidUpdate() {
        var selectUl = _react2['default'].findDOMNode(this.refs.selectUl);
        //this.heightTag = selectUl.offsetHeight;
        var length = selectUl.children.length;
        if (this.state.show) {
            if (length < 5) {
                selectUl.style.height = length * 29 + 2 + 'px';
            } else {
                selectUl.style.height = '150px';
            }
        } else {
            selectUl.style.height = '0';
            clearTimeout(this.timer);
            this.timer = setTimeout((function () {
                this.removeClass(selectUl, 'height-none');
            }).bind(this), 400);
        }
    };

    /**
     * 判断obj是否为parentObj的子元素
     * @method isParent
     * @param obj {Object}
     * @param parentObj {Object}
     * @return {Boolean}
     * */

    Select.prototype.isParent = function isParent(obj, parentObj) {
        while (obj != undefined && obj != null) {
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    };

    /**
     * 显示选项列表,当ul关闭时才changestate
     * @method showUl
     * @return null
     * */

    Select.prototype.showUl = function showUl() {
        if (!this.state.show) {
            this.setState({
                show: true
            });
            _react2['default'].findDOMNode(this.refs.selectUl).style.height = this.heightTag + 'px';
        }
    };

    /**
     * 点击icon时，控制ul的显示与否
     * @method toogleUl
     * @return null
     * */

    Select.prototype.toogleUl = function toogleUl() {
        this.setState({
            show: !this.state.show
        });
        if (this.state.show) {
            _react2['default'].findDOMNode(this.refs.selectUl).style.height = '0';
        } else {
            _react2['default'].findDOMNode(this.refs.selectUl).style.height = this.heightTag + 'px';
        }
    };

    /**
     * 关闭ul，当前ul显示时起作用
     * @method hideUl
     * @return null
     * */

    Select.prototype.hideUl = function hideUl() {
        if (this.state.show) {
            this.setState({
                show: false
            });
        }
    };

    /**
     * 失去焦点事件
     * @method finishInput
     * @return null
     * */

    Select.prototype.finishInput = function finishInput(event) {
        //让出线程
        setTimeout(this.callBacks.bind(this));
    };

    /**
     * 取得符合要求的值，父级回调存在的话调用
     * @method callBacks
     * @return null
     * */

    Select.prototype.callBacks = function callBacks() {
        if (!this.props.input) {
            this.getTrueVal();
        }
        var val = this.state.value;
        var key = this.state.keys;
        if (this.state.show) {
            /*this.setState({
                show: false
            })*/
            this.hideUl();
        }
        this.props.callback && this.props.callback(val, key);
    };

    /**
     * 根据当前值是否为select内的值，判断是否改变state的值
     * @method getTrueVal
     * @return null
     * */

    Select.prototype.getTrueVal = function getTrueVal() {
        var target = this.isInSelect();
        if (!target) {
            this.setState({
                value: this.props.children[0].props.children,
                keys: this.props.children[0].props.value,
                autoVal: this.props.children[0].props.children
            });
        }
    };

    /**
     * 验证输入值是否为select内容，return true 否则return false
     * @method isInSelect
     * @return flags {Boolean}
     * */

    Select.prototype.isInSelect = function isInSelect() {
        var val = '^' + this.state.value + '$';
        var reg = new RegExp(val, "g");
        var flags = false;
        _react2['default'].Children.forEach(this.props.children, function (item) {
            if (reg.test(item.props.children)) {
                flags = true;
            }
        }, this);

        return flags;
    };

    /**
     * 改变input的value
     * @method handlerValue
     * @param event {Object}
     * @return null
     * */

    Select.prototype.handlerValue = function handlerValue(event) {
        var val = event.target.value;
        this.setState({
            value: val,
            autoVal: val
        });
        this.showUl();
    };

    /**
     * 点击或者enter键时，选择当前li的值，并关闭ul
     * @method chooseItem
     * @param event {Object}
     * @return null
     * */

    Select.prototype.chooseItem = function chooseItem(event) {
        var ulChildren = _react2['default'].findDOMNode(this.refs.selectUl).children;
        this.removeAllActive(ulChildren);
        event.target.classList.add('active');
        this.hideUl();
        this.setState({
            //show: !this.state.show,
            value: event.target.textContent,
            keys: event.target.value
        });
        //inputObj.focus();
    };

    /**
     * target为flase移除li的active状态，否则将obj子元素的值付给state.value
     * @method removeAllActive
     * @param obj {Object}
     * @param target {Boolean}
     * @return null
     * */

    Select.prototype.removeAllActive = function removeAllActive(obj, target) {
        var _this2 = this;

        Array.prototype.slice.call(obj).map(function (item, index) {
            if (item.className.indexOf('active') > -1) {
                if (target) {
                    _this2.setState({
                        value: item.textContent,
                        keys: item.value,
                        autoVal: item.textContent
                    });
                } else {
                    item.classList.remove('active');
                }
            }
        });
    };

    /**
    * keydown时触发，不通方向键分别对应不同方法
    * @method keyIn
    * @param event {Object}
    * @return null
    * */

    Select.prototype.keyIn = function keyIn(event) {
        var selectUl = _react2['default'].findDOMNode(this.refs.selectUl);
        var ulChildren = _react2['default'].findDOMNode(this.refs.selectUl).children;
        var ulArrey = Array.prototype.slice.call(ulChildren);
        var inputObj = _react2['default'].findDOMNode(this.refs.select).children[0];
        var i = -1;
        var obj = ulChildren[0];
        if (event.keyCode == 40 || event.keyCode == 38) {
            /**
             * 当ul显示时，方向键移动起作用
             * 遍历寻找当前active元素的位置，并移除active
             * */
            ulArrey.map(function (item, index) {
                if (item.className.indexOf('active') > -1) {
                    i = index;
                    item.classList.remove('active');
                }
            });
            if (event.keyCode == 40) {
                /**
                 * 下方向键，判断active元素是否为最后一个，是则不再向下否则i+1
                 * */
                obj = i == ulChildren.length - 1 ? ulChildren[i] : ulChildren[i + 1];
            } else {
                /**
                 * 上方向键，判断active元素是否为第一个，是则不再向上否则i－1
                 * */
                obj = i == 0 ? ulChildren[i] : ulChildren[i - 1];
            }
            obj.classList.add('active');
            /**
             * 如果active为第五个元素之前的元素，则scrollTop不变，否则每向下一个，scrollTop加30
             * */
            selectUl.scrollTop = i < 4 ? 0 : (i - 3) * 30;
        } else if (event.keyCode == 13) {
            /**
             * enter键，取得当前元素值
             * */
            this.hideUl();
            this.removeAllActive(ulChildren, true);
            inputObj.blur();
        }
    };

    /**
     * 为选中li元素增加active class
     * @method addActive
     * @param event {Object}
     * @return null
     * */

    Select.prototype.addActive = function addActive(event) {
        var obj = event.target;
        var ulChildren = _react2['default'].findDOMNode(this.refs.selectUl).children;
        this.removeAllActive(ulChildren, false);
        obj.classList.add('active');
    };

    /**
     * 为li元素移除active class
     * @method removeActive
     * @param event {Object}
     * @return null
     * */

    Select.prototype.removeActive = function removeActive(event) {
        var obj = event.target;
        if (this.state.show) {
            obj.classList.remove('active');
        }
    };

    /**
     * 渲染li元素，并根据autoVal来匹配获得符合元素
     * this.state.autoVal 为input输入值，初始为.*匹配任意
     * @method renderLi
     * @return li {ReactElement}
     * */

    Select.prototype.renderLi = function renderLi() {
        var _this3 = this;

        var autoVal = this.state.autoVal == '' ? '.*' : this.state.autoVal;
        var reg = new RegExp(autoVal, "g");
        var li = _react2['default'].Children.map(this.props.children, function (item, index) {
            if (reg.test(item.props.children)) {
                if (_this3.state.keys == item.props.value) {
                    return _react2['default'].createElement(
                        'li',
                        { className: 'active', value: item.props.value, onMouseOver: _this3.addActive.bind(_this3), onMouseLeave: _this3.removeActive.bind(_this3), onMouseDown: _this3.chooseItem.bind(_this3) },
                        item.props.children
                    );
                } else {
                    return _react2['default'].createElement(
                        'li',
                        { value: item.props.value, onMouseOver: _this3.addActive.bind(_this3), onMouseLeave: _this3.removeActive.bind(_this3), onMouseDown: _this3.chooseItem.bind(_this3) },
                        item.props.children
                    );
                }
            }
            item.props.children;
        }, this);

        return li;
    };

    Select.prototype.renderOption = function renderOption() {
        var option = _react2['default'].Children.map(this.props.children, function (item) {
            return _react2['default'].createElement(
                'option',
                { value: item.props.value },
                item.props.children
            );
        }, this);
        return option;
    };

    /**
     * 渲染select
     * @method renderSelect
     * @return {ReactElement}
     * */

    Select.prototype.renderSelect = function renderSelect() {
        return _react2['default'].createElement(
            _GridJs2['default'],
            { ref: 'selectContair', className: _classnames2['default'](this.getClassNamesForArguments('container')), value: this.state.value },
            _react2['default'].createElement(
                'select',
                _extends({ ref: 'test' }, this.props, { defaultValue: this.state.keys, style: { display: 'none' } }),
                this.renderOption()
            ),
            _react2['default'].createElement(_InputJs2['default'], { ref: 'select', value: this.state.value, onClick: this.showUl.bind(this), onChange: this.handlerValue.bind(this), onKeyDown: this.keyIn.bind(this), onBlur: this.finishInput.bind(this) }),
            _react2['default'].createElement('i', { className: _classnames2['default'](this.getClassName('arrow-down')), onClick: this.toogleUl.bind(this) }),
            _react2['default'].createElement(
                'ul',
                { ref: 'selectUl', className: _classnames2['default'](this.getClassNamesForArguments('ul'), this.state.show ? this.getClassName('show') : 'height-none') },
                this.renderLi()
            )
        );
    };

    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * setValues(key){
     *      this.setState({
     *          [key]:e.target.value
     *      })
     * }
     * <Input value={this.state.inputValue} onChange={::this.setValues(inputValue)}/>
     * getValue(value,key){
     *
     * }
     * <Select onChangeCallback={::this.getValue}>
     *     <option value="1">xxx</option>
     *     <option value="1">xxx</option>
     * </Select>
     * */

    Select.prototype.render = function render() {
        return this.props.auto ? this.renderAuto() : this.renderSelect();
    };

    var _Select = Select;
    Select = _utilsClassNameMixin2['default'](Select) || Select;
    return Select;
})(_react.Component);

exports['default'] = Select;
module.exports = exports['default'];