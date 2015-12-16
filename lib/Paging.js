'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utilsClassNameMixinJs = require('./utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

/**
 * 分页组件
 * @class Paging
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo paging.js {js}
 * @show true
 * @author min.xiao@dianping.com
 * */

var Paging = (function (_Component) {
    _inherits(Paging, _Component);

    _createClass(Paging, null, [{
        key: 'propTypes',
        value: {
            /**
             * 总页数
             * @property currentPage
             * @type Integer
             * @default 1
             * */
            currentPage: _react.PropTypes.number.isRequired,
            /**
             * 每页显示多少条数据
             * @property pageSize
             * @type Integer
             * @default 20
             * */
            pageSize: _react.PropTypes.number.isRequired,
            /**
             * 数据总数
             * @property total
             * @type Integer
             * */
            total: _react.PropTypes.number.isRequired,
            /**
             * 点击分页回调
             * @property pageCallback
             * @type Function
             * */
            pageCallback: _react.PropTypes.func,
            /**
             *
             * @property activeClass
             * @type String
             * @default active
             * */
            activeClass: _react.PropTypes.string,
            classPrefix: _react.PropTypes.string,
            componentTag: _react.PropTypes.string,
            /**
             * 开启选择每页显示数量选项
             * @property showItemsNumber
             * @type Boolean
             * */
            showItemsNumber: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            activeClass: 'active',
            currentPage: 1,
            pageSize: 20,
            classPrefix: 'paging',
            componentTag: 'div',
            /**
             * 跟showItemsNumber一起使用 arguments{pageSize}
             * @property loadPageCallback
             * */
            loadPageCallback: function loadPageCallback() {
                console.warn('Is not defined loadPageCallback');
            }
        },

        /**
         * @constructor
         * @param props {Object}
         * @param context {Object}
         * */
        enumerable: true
    }]);

    function Paging(props, context) {
        _classCallCheck(this, _Paging);

        _Component.call(this, props, context);

        /**
         * @type Integer
         * @default
         * */
        this.pages = this.getPages();

        this.index = 0;

        this.number = 5;

        /**
         * @type Boolean
         * @default false
         * */
        this.init = false;
        //总数：this.total

        this.state = {
            /**
             * 当前页
             * @type Integer
             * */
            currentPage: this.props.currentPage,
            defaultNumber: this.props.pageSize
        };
    }

    /**
     * 上一页
     * @method prev
     * */

    Paging.prototype.prev = function prev() {
        this.gotoPage(this.props.currentPage - 1);
    };

    /**
     * 下一页
     * @method prev
     * */

    Paging.prototype.next = function next() {
        this.gotoPage(this.props.currentPage + 1);
    };

    /**
     * 获取页大小
     * @method getPages
     * @return {Integer}
     * */

    Paging.prototype.getPages = function getPages() {
        return Math.ceil(this.props.total / this.props.pageSize);
    };

    /**
     * 跳转至N页
     * @method goto
     * @param page {Integer} 页码，从1开始
     * @private
     * @return {Array}
     * */

    Paging.prototype.goto = function goto() {
        var page = arguments.length <= 0 || arguments[0] === undefined ? this.state.currentPage : arguments[0];

        this.pages = this.getPages();
        if (page <= 1) {
            page = 1;
        }
        if (page >= this.pages) {
            page = this.pages;
        }

        /*if(this.init){
            this.setState({
                currentPage:page
            });
            this.init = false;
        }*/

        return this.generate();
    };

    /**
     * 跳转至N页
     * @method gotoPage
     * @param index {Integer} 页码，从1开始
     * @return {Array}
     * */

    Paging.prototype.gotoPage = function gotoPage(index) {
        this.init = true;
        this.props.pageCallback && this.props.pageCallback(index);
        return this.goto(index);
    };

    /**
     * 生成页码
     * @method generate
     * @return {Array}
     * */

    Paging.prototype.generate = function generate() {
        var _props = this.props;
        var currentPage = _props.currentPage;
        var activeClass = _props.activeClass;

        var i = 1,
            htmlList = [],
            distance = 4,
            len = currentPage + distance;

        i = currentPage <= 6 ? i : currentPage - distance;
        i = i <= 1 ? 1 : i;

        len = len > this.pages ? this.pages : len;

        if (currentPage > 1) {
            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);', className: '', onClick: this.prev.bind(this) },
                '上一页'
            ));
        }

        //9     ....4....|.
        if (currentPage >= 7) {
            var _context;

            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);', onClick: (_context = this.gotoPage).bind.call(_context, this, 1) },
                1
            ));
            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);' },
                '...'
            ));
            //i+=1;
        }

        for (; i <= len; i++) {
            var _classnames;

            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);', onClick: this.gotoPage.bind(this, i), className: _classnames3['default']((_classnames = {}, _classnames[this.getClassName(activeClass)] = i == currentPage, _classnames)) },
                i
            ));
        }
        //pages-currentPage =
        var bt = this.pages - currentPage;
        if (bt >= 7) {
            var _context2;

            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);' },
                '...'
            ));
            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);', onClick: (_context2 = this.gotoPage).bind.call(_context2, this, this.pages) },
                this.pages
            ));
        }

        if (this.pages > 1 && currentPage != this.pages) {
            htmlList.push(_react2['default'].createElement(
                'a',
                { href: 'javascript:void(0);', onClick: this.next.bind(this) },
                '下一页'
            ));
        }

        return htmlList;
    };

    Paging.prototype.changePageSizeHandler = function changePageSizeHandler(e) {
        var val = e.target.value;
        //this.setState({
        //    defaultNumber:val*1
        //});
        var loadPageCallback = this.props.loadPageCallback;

        loadPageCallback && loadPageCallback(val);
    };

    Paging.prototype.accordingNumber = function accordingNumber() {
        var opts = [],
            num = 10;

        for (var i = 1; i < 11; i++) {
            opts.push(_react2['default'].createElement(
                'option',
                { value: num * i },
                num * i
            ));
        }

        return _react2['default'].createElement(
            'span',
            { style: {
                    marginRight: '20px'
                } },
            '每页显示  ',
            _react2['default'].createElement(
                'select',
                { defaultValue: this.state.defaultNumber, onChange: this.changePageSizeHandler.bind(this) },
                opts
            ),
            '  页'
        );
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Paging.prototype.render = function render() {
        var _props2 = this.props;
        var Component = _props2.componentTag;
        var activeClass = _props2.activeClass;
        var showItemsNumber = _props2.showItemsNumber;

        return _react2['default'].createElement(
            Component,
            { className: _classnames3['default'](this.getClassName('container')) },
            showItemsNumber ? this.accordingNumber() : null,
            this.goto(),
            _react2['default'].createElement(
                'span',
                { className: 'info' },
                _react2['default'].createElement(
                    'span',
                    { className: _classnames3['default'](this.getClassName(activeClass)) },
                    this.props.currentPage
                ),
                '/',
                this.getPages(),
                '，共',
                this.props.total,
                '条'
            )
        );
    };

    var _Paging = Paging;
    Paging = _utilsClassNameMixinJs2['default'](Paging) || Paging;
    return Paging;
})(_react.Component);

exports['default'] = Paging;
module.exports = exports['default'];