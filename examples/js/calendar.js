(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/11/4.
	 */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _lib_includeLess = __webpack_require__(24);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _libCalendarJs = __webpack_require__(37);

	var _libCalendarJs2 = _interopRequireDefault(_libCalendarJs);

	var _libInputJs = __webpack_require__(38);

	var _libInputJs2 = _interopRequireDefault(_libInputJs);

	var _libRowJs = __webpack_require__(34);

	var _libRowJs2 = _interopRequireDefault(_libRowJs);

	var _libColJs = __webpack_require__(35);

	var _libColJs2 = _interopRequireDefault(_libColJs);

	var _libGridJs = __webpack_require__(36);

	var _libGridJs2 = _interopRequireDefault(_libGridJs);

	var _libCalendarPanelJs = __webpack_require__(39);

	var _libCalendarPanelJs2 = _interopRequireDefault(_libCalendarPanelJs);

	var _querystring = __webpack_require__(40);

	var _querystring2 = _interopRequireDefault(_querystring);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);

	        this.state = {
	            show: false
	        };
	    }

	    Demo.prototype.focus = function focus() {
	        this.setState({
	            show: true
	        });
	    };

	    Demo.prototype.blur = function blur() {
	        this.setState({
	            show: false
	        });
	    };

	    Demo.prototype.render = function render() {

	        return _react2['default'].createElement(
	            _libGridJs2['default'],
	            null,
	            _react2['default'].createElement(
	                _libRowJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 12 },
	                    _react2['default'].createElement(
	                        _libCalendarPanelJs2['default'],
	                        { startDate: '2015-11-11' },
	                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请选择日期', style: { width: '150px' } })
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 1, end: true },
	                    '每日邮报报道,英国华威大学划艇队推出了2016年新版裸体日历,小伙子们在镜头前“坦诚相见”,大秀肌肉。这是该校划艇队第六次拍摄这种日历。 长期锻炼的队员们骄傲的'
	                )
	            ),
	            _react2['default'].createElement(
	                _libRowJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 3 },
	                    _react2['default'].createElement(
	                        _libCalendarPanelJs2['default'],
	                        { startDate: '2015-11-11', endDate: '2015-12-1' },
	                        _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请选择日期', style: { width: '150px' } })
	                    )
	                )
	            )
	        );
	    };

	    return Demo;
	})(_react.Component);

	ReactDOM.render(_react2['default'].createElement(Demo, null), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(31);

	var consts = _constantsJs.classConstants;

	exports['default'] = function (obj) {
	    /**
	     * 给className添加前缀后返回className
	     * @method getClassName
	     * @param name {String} 从该字符串中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassName = function (name) {
	        var _this2 = this;

	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        if (name) {
	            var _ret = (function () {
	                name = name.split(' ');
	                var list = [],
	                    _this = _this2;
	                name.forEach(function (item) {
	                    list.push(_this.setPrefix(item, pre));
	                });

	                return {
	                    v: list.join(' ')
	                };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	        }
	        return '';
	    };
	    /**
	     * 验证props中的样式是否符合规则
	     * @method getClassNames
	     * @param props {Object} 从该对象中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassNames = function (props) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var clazz = {};
	        for (var item in props) {
	            if (props[item] && item === consts[item]) {
	                clazz[this.getClassName(item, pre)] = true;
	            }
	        }
	        return clazz;
	    };
	    /**
	     * 给多个className添加前缀后返回
	     * @method getClassNamesForArguments
	     * @param arguments {Arguments String} 多个class参数
	     * @return {String}
	     * */
	    obj.prototype.getClassNamesForArguments = function () {
	        var arg = arguments;
	        var arr = [];
	        var _this = this;

	        if (arg && arg.length > 0) {
	            for (var i = 0, len = arg.length; i < len; i++) {
	                if (arg[i]) {
	                    arr.push(_this.getClassName(arg[i]));
	                }
	            }
	        }

	        return arr.join(' ');
	    };
	    /**
	     * 设置css类名前缀
	     * @method setPrefix
	     * @param name{String} class名字
	     * @param pre{Boolean} 是否添加前缀
	     * @return {String}
	     * */
	    obj.prototype.setPrefix = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var str = consts.classNameNamespace;
	        if (pre && this.props.classPrefix) {
	            str += '-' + this.props.classPrefix;
	        }
	        if (name != this.props.classPrefix) {
	            str += '-' + name;
	        }

	        return str;
	    };

	    /**
	     * 检查元素是否存在样式名
	     * @method hasClass
	     * @param obj {Object} 元素
	     * @param cls {String} 需要检查的样式名
	     * @return {Boolean}
	     * */
	    obj.prototype.hasClass = function () {
	        return arguments[0].className.match(new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)'));
	    };

	    /**
	     * 给元素增加一个样式名
	     * @method addClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) {
	            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
	        }
	    };
	    /**
	     * 给元素删除一个样式名
	     * @method removeClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.removeClass = function () {
	        if (this.hasClass(arguments[0], arguments[1])) {
	            var reg = new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)');
	            arguments[0].className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
	        }
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 15/9/7.
	 */
	//classname前缀

	'use strict';

	exports.__esModule = true;
	function setNamespace(className) {
	  return '' + className;
	}
	var CLASS_NAME_NAMESPACE = 'eg';

	var classConstants = {
	  /**
	   * 状态
	   * */
	  //禁用
	  disabled: setNamespace('disabled'),
	  //启用
	  enable: setNamespace('enable'),
	  block: setNamespace('block'),
	  //垂直
	  tacked: setNamespace('tacked'),
	  //宽度自适应
	  justify: setNamespace('justify'),
	  //选中
	  active: setNamespace('active'),
	  //大小
	  size: setNamespace('size'),
	  //圆形样式
	  radius: setNamespace('radius'),
	  //隨圆
	  round: setNamespace('round'),
	  //向上箭头
	  'arrow-up': setNamespace('arrow-up'),
	  //向下箭头
	  'arrow-down': setNamespace('arrow-down'),

	  /**
	   * 颜色
	   * */
	  //成功样式
	  success: setNamespace('success'),
	  //错误红色
	  error: setNamespace('error'),
	  //警告warning
	  warning: setNamespace('warning'),
	  //危险danger
	  danger: setNamespace('danger'),
	  //展示
	  show: setNamespace('show'),
	  white: setNamespace('white'),
	  classNameNamespace: CLASS_NAME_NAMESPACE
	};
	exports.classConstants = classConstants;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//import RowLess from './row.less';
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 行
	 * @class Row
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Row = (function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _Component.apply(this, arguments);
	    }

	    Row.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default']('eg-row', 'clearfix', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Row, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    return Row;
	})(_react.Component);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 列
	 * @class Col
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.getWidthClass = function getWidthClass() {
	        var className = ['eg-sm-' + (this.props.sm ? this.props.sm : '12')];

	        if (this.props.end) {
	            className.push('eg-end');
	        }

	        return className.join(' ');
	    };

	    Col.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](this.getWidthClass(), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Col, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 占几列，共12列
	             * @property egSize
	             * @type Integer
	             * */
	            sm: _react.PropTypes.number.isRequired,
	            /**
	             * 是否是最后一列
	             * @property end
	             * @type Boolean
	             * @default false
	             * */
	            end: _react.PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_react.Component);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	/**
	 * 布局组件
	 * @class Grid
	 * @module grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Grid = (function (_Component) {
	    _inherits(Grid, _Component);

	    function Grid() {
	        _classCallCheck(this, _Grid);

	        _Component.apply(this, arguments);
	    }

	    Grid.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: _classnames2['default'](this.getClassName('grid'), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    var _Grid = Grid;
	    Grid = _utilsClassNameMixin2['default'](Grid) || Grid;
	    return Grid;
	})(_react.Component);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames4 = __webpack_require__(32);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * 日历组件<br />
	 * 需要和CalendarPanel组合使用
	 * @class Calendar
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/calendar.js {js}
	 * @demo calendar.html {html}
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
	                        this[windowType]()
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames10 = __webpack_require__(32);

	var _classnames11 = _interopRequireDefault(_classnames10);

	/**
	 * input组件
	 * */

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',

	        //onClickCallback:PrgiopTypes.fun
	        value: {
	            type: 'text',
	            autoComplete: 'off',
	            label: '请选择'
	        },
	        enumerable: true
	    }]);

	    function Input(props, context) {
	        _classCallCheck(this, _Input);

	        _Component.call(this, props, context);

	        this.className = 'input-';

	        this.state = {
	            isActive: this.props.checked
	        };
	    }

	    Input.prototype.setCheck = function setCheck() {
	        this.setState({
	            isActive: !this.state.isActive
	        });
	    };

	    Input.prototype.checkbox = function checkbox() {
	        var _classnames, _classnames2, _classnames3;

	        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
	        return _react2['default'].createElement(
	            'div',
	            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames = {}, _classnames['eg-input-' + this.props.type + '-active'] = checked, _classnames), (_classnames2 = {}, _classnames2['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames2)), onClick: this.setCheck.bind(this) },
	            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames11['default']('checkbox', (_classnames3 = {}, _classnames3[this.getClassName('icon-tick', false)] = checked, _classnames3)) },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    //暂时用在图片片选框

	    Input.prototype.checkboxs = function checkboxs() {
	        var _classnames4, _classnames5, _classnames6;

	        var checked = typeof this.props.checked != 'undefined' ? this.props.checked : this.state.isActive;
	        return _react2['default'].createElement(
	            'div',
	            { ref: '', className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames4 = {}, _classnames4['eg-input-' + this.props.type + '-active'] = checked, _classnames4), (_classnames5 = {}, _classnames5['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames5)), onClick: this.setCheck.bind(this) },
	            _react2['default'].createElement('input', _extends({}, this.props, { type: 'checkbox', onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames11['default']('checkbox', (_classnames6 = {}, _classnames6[this.getClassName('icon-tick', false)] = checked, _classnames6)) },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    Input.prototype.onchange = function onchange(e) {
	        if (this.props.onCheck) {
	            this.props.onCheck(e.target);
	        }
	    };

	    Input.prototype.radio = function radio() {
	        var _classnames7, _classnames8;

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames11['default'](this.getClassNamesForArguments('' + this.className + this.props.type), (_classnames7 = {}, _classnames7['eg-input-' + this.props.type + '-active'] = this.props.checked, _classnames7), (_classnames8 = {}, _classnames8['eg-input-' + this.props.type + '-disabled'] = this.props.disabled, _classnames8)) },
	            _react2['default'].createElement('input', _extends({ type: this.props.type }, this.props, { onChange: this.onchange.bind(this) })),
	            _react2['default'].createElement(
	                'div',
	                { className: 'box' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'checkbox' },
	                    _react2['default'].createElement('div', { className: 'round' })
	                )
	            ),
	            _react2['default'].createElement(
	                'label',
	                null,
	                this.props.label
	            )
	        );
	    };

	    Input.prototype.text = function text() {
	        var _classnames9;

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames11['default']((_classnames9 = {}, _classnames9[this.getClassName('icon-container')] = !!this.props.icon, _classnames9)) },
	            _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames11['default'](this.getDefaultClass()) })),
	            _react2['default'].createElement('i', { className: 'icon-input-right icon-' + this.props.icon })
	        );
	    };

	    Input.prototype.getDefaultClass = function getDefaultClass() {
	        //border:1px solid #fff;
	        return this.getClassName(this.className + this.props.type);
	    };

	    Input.prototype.render = function render() {
	        //const {name,id,value,placeholder,autocomplete,disabled,type} = this.props;
	        return this[this.props.type.toLowerCase()]();
	    };

	    var _Input = Input;
	    Input = _utilsClassNameMixin2['default'](Input) || Input;
	    return Input;
	})(_react.Component);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(30);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	var _InputJs = __webpack_require__(38);

	var _InputJs2 = _interopRequireDefault(_InputJs);

	var _CalendarJs = __webpack_require__(37);

	var _CalendarJs2 = _interopRequireDefault(_CalendarJs);

	/**
	 * CalendarPanel组件
	 * @class CalendarPanel
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/calendar.js {js}
	 * @demo calendar.html {html}
	 * @show true
	 * */

	var CalendarPanel = (function (_Component) {
	    _inherits(CalendarPanel, _Component);

	    _createClass(CalendarPanel, null, [{
	        key: 'propTypes',
	        value: {
	            showCallback: _react.PropTypes.func,
	            hideCallback: _react.PropTypes.func,
	            componentTag: _react.PropTypes.string,
	            /**
	             * 通过传入此函数获取日期值
	             * @property getValueCallback
	             * @type Function
	             * */
	            getValueCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'calendar',
	            componentTag: 'Input',
	            getValueCallback: function getValueCallback(date) {
	                console.warn('通过向CalendarPanel传入回调函数"getValueCallback"可以获取到当前选取的日期值，当前选取的日期为：' + date);
	            }
	        },
	        enumerable: true
	    }]);

	    function CalendarPanel(props, context) {
	        _classCallCheck(this, _CalendarPanel);

	        _Component.call(this, props, context);

	        this.state = {
	            isShow: false,
	            value: '',
	            windowType: 0
	        };
	    }

	    CalendarPanel.prototype.doSetCapture = function doSetCapture(input) {
	        if (input.setCapture) {
	            this.doReleaseCapture();
	            input.setCapture();
	            this.ctObj = input;
	        }
	    };

	    CalendarPanel.prototype.doReleaseCapture = function doReleaseCapture() {
	        if (this.ctObj && this.ctObj.releaseCapture) {
	            this.ctObj.releaseCapture();
	            this.ctObj = null;
	        }
	    };

	    CalendarPanel.prototype.componentDidMount = function componentDidMount() {};

	    CalendarPanel.prototype.inputBlurHandler = function inputBlurHandler() {
	        this.doReleaseCapture();
	        this.close();
	    };

	    CalendarPanel.prototype.inputMouseUpHandler = function inputMouseUpHandler() {
	        this.doReleaseCapture();
	    };

	    CalendarPanel.prototype.inputFocusHandler = function inputFocusHandler(e) {

	        var container = _react2['default'].findDOMNode(this),
	            _this = this,
	            calendar = container.querySelector('.' + this.getClassName('container')),
	            input = e.target;

	        calendar.onmousedown = function (e) {
	            _this.doSetCapture(input);
	            return false;
	        };
	        this.input = input;
	        this.setState({
	            isShow: true,
	            windowType: 0
	        });
	    };

	    CalendarPanel.prototype.inputChangeHandler = function inputChangeHandler(e) {
	        var target = e.target;

	        this.setState({
	            value: target.value
	        });
	    };

	    CalendarPanel.prototype.selectCallback = function selectCallback(date) {
	        this.props.getValueCallback(date);
	        this.setState({
	            value: date
	        });
	    };

	    CalendarPanel.prototype.setWindowType = function setWindowType(type) {
	        this.setState({
	            windowType: type
	        });
	    };

	    CalendarPanel.prototype.close = function close() {
	        this.setState({
	            isShow: false
	        });
	        this.input && this.input.blur();
	    };

	    CalendarPanel.prototype.render = function render() {
	        var Component = this.props.componentTag;
	        var _this = this;
	        var options = _react2['default'].Children.map(this.props.children, function (option) {

	            return _react2['default'].createElement(_InputJs2['default'], _extends({}, option.props, {
	                onBlur: _this.inputBlurHandler.bind(_this),
	                onMouseUp: _this.inputMouseUpHandler.bind(_this),
	                onFocus: _this.inputFocusHandler.bind(_this),
	                value: _this.state.value,
	                onChange: _this.inputChangeHandler.bind(_this)
	            }));
	        }, this);

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('panel')) },
	            options,
	            _react2['default'].createElement(_CalendarJs2['default'], _extends({}, this.props, {
	                show: this.state.isShow,
	                selectCallback: this.selectCallback.bind(this),
	                windowType: this.state.windowType,
	                closeCallback: this.close.bind(this),
	                setWindowType: this.setWindowType.bind(this) }))
	        );
	    };

	    var _CalendarPanel = CalendarPanel;
	    CalendarPanel = _utilsClassNameMixinJs2['default'](CalendarPanel) || CalendarPanel;
	    return CalendarPanel;
	})(_react.Component);

	exports['default'] = CalendarPanel;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(41);
	exports.encode = exports.stringify = __webpack_require__(42);


/***/ },
/* 41 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};


/***/ }
/******/ ])
});
;