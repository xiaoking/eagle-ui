'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

/**
 * 日历组件<br />
 * 需要和CalendarPanel组合使用
 * @class Calendar
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo calendar.js {js}
 * @show true
 * */

var Calendar = (function (_Component) {
    _inherits(Calendar, _Component);

    _createClass(Calendar, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式类名前缀
             * @property classPrefix
             * @type String
             * @default calendar
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 起始日期
             * @property startDate
             * @type String
             * @default empty
             * */
            startDate: _react.PropTypes.string,
            /**
             * 终止日期
             * @property endDate
             * @type String
             * @default empty
             * */
            endDate: _react.PropTypes.string,
            /**
             * 默认选中日期
             * @property defaultDate
             * @type String
             * @default 当天
             * */
            defaultDate: _react.PropTypes.string,
            /**
             * 日期格式
             * @property format
             * @type string
             * @default 'yyyy-MM-dd'
             * */
            format: _react.PropTypes.string,
            /**
             * 选择某个具体日期后执行的回调函数
             * @property selectCallback
             * @type Function
             * @default empty
             * */
            selectCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            format: 'yyyy-MM-dd',
            classPrefix: 'calendar'
        },
        enumerable: true
    }]);

    function Calendar(props, context) {
        _classCallCheck(this, _Calendar);

        _Component.call(this, props, context);

        this.today = new Date();

        this.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        this.windowType = ['getCalendar', 'getMonths', 'getYears'];

        var defaultDate = this.props.defaultDate || new Date();
        this.state = {
            currentDate: defaultDate,
            selectedDate: defaultDate,
            show: false,
            year: typeof defaultDate != 'string' ? defaultDate.getFullYear() : new Date(defaultDate).getFullYear(),
            windowType: this.windowType[!isNaN(this.props.windowType) ? this.props.windowType : 0]
        };
    }

    Calendar.prototype.getCurrentDate = function getCurrentDate() {
        var currentDate = this.state.currentDate;

        return typeof currentDate != 'string' ? currentDate : new Date(currentDate);
    };

    Calendar.prototype.getSelectedDate = function getSelectedDate() {
        var selectedDate = this.state.selectedDate;

        return typeof selectedDate != 'string' ? selectedDate : new Date(selectedDate);
    };

    Calendar.prototype.dateClick = function dateClick(date) {
        var d = date.split('/');
        var selectCallback = this.props.selectCallback;

        //console.dir(this.getDate(d[0],d[1],d[2]));
        selectCallback && selectCallback(this.getDate(d[0], d[1], d[2]), d);
        this.setState({
            currentDate: new Date(date)
        });
        this.props.closeCallback && this.props.closeCallback();
    };

    Calendar.prototype.getDates = function getDates(arr, selectedDate, defaultDate) {
        var d = undefined,
            dom = [],
            _this = this,
            month = selectedDate.getMonth(),
            year = selectedDate.getFullYear();

        var _props = this.props;
        var startDate = _props.startDate;
        var endDate = _props.endDate;

        //startDate='2015/11/16';
        //endDate='2015/11/20';
        for (var j = 1; j <= 7; j++) {

            if (arr.length > 0) {
                var _classnames;

                d = arr.shift();
                var disabled = startDate && new Date(year, month, d).getTime() <= new Date(startDate).getTime() || endDate && new Date(year, month, d).getTime() >= new Date(endDate).getTime();
                //"eg-active" eg-calendar-selected
                dom.push(_react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'span',
                        { className: _classnames5['default'](this.getClassName('item'), (_classnames = {}, _classnames[this.getClassName('active', false)] = this.isToday(year, month + 1, d), _classnames[this.getClassName('disabled')] = disabled, _classnames['no-hover'] = d == ' ', _classnames[this.getClassName('selected')] = this.isOptionSelect(selectedDate, defaultDate) && defaultDate.getDate() == d && !disabled, _classnames)), onMouseDown: disabled || d == ' ' ? '' : _this.dateClick.bind(_this, year + '/' + (month + 1) + '/' + d) },
                        d
                    )
                ));
            }
        }
        return dom;
    };

    Calendar.prototype.isOptionSelect = function isOptionSelect(current, selectDate) {
        return current.getFullYear() == selectDate.getFullYear() && current.getMonth() == selectDate.getMonth();
    };

    /**废弃*/

    Calendar.prototype.onChange = function onChange(e) {
        var target = e.target;
        this.setState({
            selectedDate: target.value
        });
    };

    /**废弃*/

    Calendar.prototype.drawSelect = function drawSelect() {
        var select = [],
            monthList = this.month,

        //date = this.state.selectedDate,
        selectedDate = this.getSelectedDate(),
            date = selectedDate,
            years = [],
            _this = this,
            year = date.getFullYear();

        years = [new Date(year - 1, 1, 1).getFullYear(), year, new Date(year + 1, 1, 1).getFullYear()];

        var option = function option() {
            return years.map(function (year) {
                return monthList.map(function (month) {
                    return _react2['default'].createElement(
                        'option',
                        { value: year + '/' + month + '/1' },
                        year,
                        '年',
                        _this.getDay(month),
                        '月'
                    );
                });
            });
        };
        select.push(_react2['default'].createElement(
            'select',
            {
                className: 'options',
                onChange: this.onChange.bind(this),
                defaultValue: this.defaultSelectDate = selectedDate.getFullYear() + '/' + (selectedDate.getMonth() + 1) + '/' + '1' },
            option()
        ));
        return select;
    };

    Calendar.prototype.draw = function draw() {
        var selectedDate = this.getSelectedDate(),
            defaultDate = this.getCurrentDate(),
            month = selectedDate.getMonth(),
            year = selectedDate.getFullYear(),
            arr = [];

        for (var i = 1, firstDay = new Date(year, month, 1).getDay(); i <= firstDay; i++) {
            arr.push(' ');
        }
        for (var i = 1, monthDay = new Date(year, month + 1, 0).getDate(); i <= monthDay; i++) {
            arr.push(i);
        }

        var d = undefined,
            dom = [];
        while (arr.length > 0) {
            dom.push(_react2['default'].createElement(
                'tr',
                { className: 'body' },
                this.getDates(arr, selectedDate, defaultDate)
            ));
        }

        return dom;
    };

    Calendar.prototype.isToday = function isToday(year, month, date) {
        var d = this.today;
        return d.getFullYear() == year && d.getMonth() + 1 == month && d.getDate() == date;
    };

    Calendar.prototype.getDate = function getDate(year, month, date) {
        var format = this.props.format;

        return format.replace(/y{4}/, year).replace(/M{1,2}/, month).replace(/d{1,2}/, date);
    };

    Calendar.prototype.getDay = function getDay(day) {
        day *= 1;
        return day <= 9 ? '0' + day : day;
    };

    Calendar.prototype.todayHandler = function todayHandler() {
        this.setState({
            selectedDate: this.today,
            currentDate: this.today
        });
        this.switchWindow(0);
        // this.dateClick(`${this.today.getFullYear()}/${this.getMonth(this.today.getMonth() )}/${this.today.getDate()}`);
    };

    Calendar.prototype.isParent = function isParent(obj, parentObj) {
        while (obj != undefined && obj != null) {
            //&& obj.nodeType==1&& obj.tagName.toUpperCase() != 'BODY'
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    };

    Calendar.prototype.componentDidMount = function componentDidMount() {
        var _this = this;
        //let calendarContainer = ReactDOM.findDOMNode(this);
        /*document.addEventListener('click',function(e){
            if(_this.isParent(e.target,calendarContainer) ){
                console.dir('parent');
            }else{
                console.dir('siquba');
            }
        },false);*/
    };

    Calendar.prototype.getMonth = function getMonth(month) {
        return month + 1;
    };

    Calendar.prototype.getYears = function getYears() {
        var _this2 = this;

        var year = this.switchYearForInterval(this.state.year),
            sYear = this.getSelectedDateSplit().year,
            _this = this;

        var years = function years(year) {
            var y = year - 1,
                list = [];
            for (var i = -1; i < 11; i++) {
                var _classnames2;

                list.push(_react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'i',
                        { className: _classnames5['default']((_classnames2 = {}, _classnames2[_this.getClassName('selected', false)] = sYear == y, _classnames2.old = i == -1 || i == 10, _classnames2)), onMouseDown: _this.switchYear.bind(_this2, y) },
                        y
                    )
                ));
                y += 1;
            }
            return list;
        };

        return _react2['default'].createElement(
            'table',
            { className: 'calendar' },
            _react2['default'].createElement(
                'thead',
                { className: 'eg-calendar-header' },
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYearForInterval.bind(this, year - 1, true) })
                ),
                _react2['default'].createElement(
                    'th',
                    { colSpan: '5' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'title' },
                        year + '年-' + (year + 9) + '年'
                    )
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYearForInterval.bind(this, year + 10, true) })
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'month-list' },
                    _react2['default'].createElement(
                        'td',
                        { colSpan: '7' },
                        years(year)
                    )
                )
            )
        );
    };

    Calendar.prototype.getMonths = function getMonths() {
        var _context;

        var selectDate = this.getSelectedDateSplit(),
            _this = this;

        return _react2['default'].createElement(
            'table',
            { className: 'calendar' },
            _react2['default'].createElement(
                'thead',
                { className: 'eg-calendar-header' },
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchYear.bind(this, '-1') })
                ),
                _react2['default'].createElement(
                    'th',
                    { colSpan: '5' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'title', onMouseDown: (_context = this.switchWindow).bind.call(_context, this, 2) },
                        selectDate.year + '年'
                    )
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchYear.bind(this, '+1') })
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'month-list' },
                    _react2['default'].createElement(
                        'td',
                        { colSpan: '7' },
                        this.month.map(function (item) {
                            var _classnames3;

                            return _react2['default'].createElement(
                                'span',
                                null,
                                _react2['default'].createElement(
                                    'i',
                                    { className: _classnames5['default']((_classnames3 = {}, _classnames3[_this.getClassName('selected', false)] = selectDate.month == item, _classnames3)), onMouseDown: _this.switchMonth.bind(_this, item * 1 - 1) },
                                    item + '月'
                                )
                            );
                        })
                    )
                )
            )
        );
    };

    Calendar.prototype.getCalendar = function getCalendar() {
        var _context2;

        var selectDate = this.getSelectedDateSplit(),
            weeks = ['日', '一', '二', '三', '四', '五', '六'];

        return _react2['default'].createElement(
            'table',
            { className: 'calendar' },
            _react2['default'].createElement(
                'thead',
                { className: 'eg-calendar-header' },
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-prev', false), onMouseDown: this.switchMonth.bind(this, '-1') })
                ),
                _react2['default'].createElement(
                    'th',
                    { colSpan: '5' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'title', onMouseDown: (_context2 = this.switchWindow).bind.call(_context2, this, 1) },
                        selectDate.year + '年' + selectDate.month + '月'
                    )
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement('div', { className: this.getClassName('icon-next', false), onMouseDown: this.switchMonth.bind(this, '+1') })
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'head' },
                    weeks.map(function (week) {
                        return _react2['default'].createElement(
                            'td',
                            null,
                            week
                        );
                    })
                ),
                this.draw()
            )
        );
    };

    Calendar.prototype.switchWindow = function switchWindow(type) {
        //this.setState({
        //    windowType:type
        //});
        this.props.setWindowType(type);
    };

    Calendar.prototype.switchYearForInterval = function switchYearForInterval() {
        var ye = arguments.length <= 0 || arguments[0] === undefined ? this.getSelectedDateSplit().year : arguments[0];
        var t = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        var _this = this;

        //debugger;
        //let year = parseInt(ye / 10, 10) * 10;
        if (t) {
            this.setState({
                year: ye
            });
        } else {
            return parseInt(ye / 10, 10) * 10;
        }

        // return year;
    };

    Calendar.prototype.switchYear = function switchYear(type) {
        var selected = this.getSelectedDate(),
            year = selected.getFullYear();

        this.setState({
            selectedDate: new Date(typeof type == 'string' ? year + eval("(" + type + ")") : type, selected.getMonth(), 1)
        });
        typeof type != 'string' && this.switchWindow(1);
    };

    Calendar.prototype.switchMonth = function switchMonth(type) {
        var selected = this.getSelectedDate(),
            year = selected.getFullYear(),
            month = selected.getMonth();

        this.setState({
            selectedDate: new Date(year, typeof type == 'string' ? month + eval("(" + type + ")") : type, 1)
        });
        typeof type != 'string' && this.switchWindow(0);
    };

    Calendar.prototype.getSelectedDateSplit = function getSelectedDateSplit() {
        var selectedDate = this.getSelectedDate();

        var year = selectedDate.getFullYear(),
            month = this.getMonth(selectedDate.getMonth()),
            date = selectedDate.getDate();

        return { year: year, month: month, date: date };
    };

    Calendar.prototype.render = function render() {
        var windowType = this.props.windowType;

        windowType = this.windowType[windowType];
        //!isNaN(windowType) &&this.state.windowType==this.windowType[0] ?this.windowType[windowType] :this.state.windowType;
        return _react2['default'].createElement(
            'div',
            { className: _classnames5['default'](this.getClassName('container'), this.getClassName(this.props.show ? 'show' : 'hide', false)) },
            _react2['default'].createElement(
                'div',
                { className: 'eg-calendar-box' },
                _react2['default'].createElement(
                    'div',
                    { className: 'box' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-calendar-body' },
                        this[windowType](),
                        _react2['default'].createElement(
                            'div',
                            { style: {
                                    textAlign: 'right'
                                } },
                            _react2['default'].createElement(
                                'span',
                                { style: {
                                        cursor: 'pointer'
                                    }, onClick: this.todayHandler.bind(this) },
                                '今天'
                            )
                        )
                    )
                )
            )
        );
    };

    var _Calendar = Calendar;
    Calendar = _utilsClassNameMixinJs2['default'](Calendar) || Calendar;
    return Calendar;
})(_react.Component);

exports['default'] = Calendar;
module.exports = exports['default'];