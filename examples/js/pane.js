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

	var _libInputJs = __webpack_require__(38);

	var _libInputJs2 = _interopRequireDefault(_libInputJs);

	var _libLabelJs = __webpack_require__(49);

	var _libLabelJs2 = _interopRequireDefault(_libLabelJs);

	var _libLabelGroupJs = __webpack_require__(50);

	var _libLabelGroupJs2 = _interopRequireDefault(_libLabelGroupJs);

	var _libGridJs = __webpack_require__(36);

	var _libGridJs2 = _interopRequireDefault(_libGridJs);

	var _libRowJs = __webpack_require__(34);

	var _libRowJs2 = _interopRequireDefault(_libRowJs);

	var _libColJs = __webpack_require__(35);

	var _libColJs2 = _interopRequireDefault(_libColJs);

	var _libPanelPanelJs = __webpack_require__(51);

	var _libPanelPanelJs2 = _interopRequireDefault(_libPanelPanelJs);

	var _libPanelPanelHeaderJs = __webpack_require__(52);

	var _libPanelPanelHeaderJs2 = _interopRequireDefault(_libPanelPanelHeaderJs);

	var _libPanelPanelFooterJs = __webpack_require__(53);

	var _libPanelPanelFooterJs2 = _interopRequireDefault(_libPanelPanelFooterJs);

	var _libPanelPanelContentJs = __webpack_require__(54);

	var _libPanelPanelContentJs2 = _interopRequireDefault(_libPanelPanelContentJs);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);
	    }

	    Demo.prototype.show = function show() {
	        console.debug(1);
	    };

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _libPanelPanelJs2['default'],
	            null,
	            _react2['default'].createElement(
	                _libPanelPanelHeaderJs2['default'],
	                null,
	                'title'
	            ),
	            _react2['default'].createElement(
	                _libPanelPanelContentJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libGridJs2['default'],
	                    null,
	                    _react2['default'].createElement(
	                        _libRowJs2['default'],
	                        null,
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 1 },
	                            _react2['default'].createElement(_libInputJs2['default'], { label: '', type: 'checkbox' })
	                        ),
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 10 },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'shop-card' },
	                                _react2['default'].createElement(
	                                    'h1',
	                                    { className: 'shop-card-title inline-block' },
	                                    '西贝莜面村（中山公园店）'
	                                ),
	                                _react2['default'].createElement(
	                                    _libLabelJs2['default'],
	                                    { error: true, radius: true },
	                                    '运营下线'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '方案ID：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '21355'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '负责人：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '张三丰'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '城市：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '上海'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '售卖时间：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '2014-2015'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '售卖量：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '0'
	                                    )
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '客户：'
	                                    ),
	                                    _react2['default'].createElement('span', { className: 'row-value' }),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '已分配（王卓轩 2015-02-01 14:22）'
	                                    )
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        _libLabelGroupJs2['default'],
	                                        { simple: true, clickCallback: this.show },
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '流程历史'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '编辑'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '删除'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '复制'
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 1 },
	                            '审批通过'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _libRowJs2['default'],
	                        null,
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 1 },
	                            _react2['default'].createElement(_libInputJs2['default'], { label: '', type: 'checkbox', checked: true })
	                        ),
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 10 },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'shop-card' },
	                                _react2['default'].createElement(
	                                    'h1',
	                                    { className: 'shop-card-title inline-block' },
	                                    '西贝莜面村（中山公园店）'
	                                ),
	                                _react2['default'].createElement(
	                                    _libLabelJs2['default'],
	                                    { success: true, radius: true },
	                                    '售卖中'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '方案ID：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '21355'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '负责人：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '张三丰'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '城市：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '上海'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '售卖时间：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '2014-2015'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '售卖量：'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-value' },
	                                        '0'
	                                    )
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '客户：'
	                                    ),
	                                    _react2['default'].createElement('span', { className: 'row-value' }),
	                                    _react2['default'].createElement(
	                                        'span',
	                                        { className: 'row-key' },
	                                        '已分配（王卓轩 2015-02-01 14:22）'
	                                    )
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    null,
	                                    _react2['default'].createElement(
	                                        _libLabelGroupJs2['default'],
	                                        { simple: true, clickCallback: this.show },
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '流程历史'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '编辑'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '删除'
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libLabelJs2['default'],
	                                            null,
	                                            '复制'
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _libColJs2['default'],
	                            { sm: 1 },
	                            '审批通过'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                _libPanelPanelFooterJs2['default'],
	                null,
	                'heiheihei'
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
/* 37 */,
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
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

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 标签
	 * @class Label
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/label.js {js}
	 * @demo label.html {html}
	 * @show true
	 * */

	var Label = (function (_Component) {
	    _inherits(Label, _Component);

	    _createClass(Label, null, [{
	        key: 'propTypes',
	        value: {
	            url: _react.PropTypes.string,
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'label',
	            url: 'javascript:void(0);'
	        },
	        enumerable: true
	    }]);

	    function Label(props, context) {
	        _classCallCheck(this, _Label);

	        _Component.call(this, props, context);

	        //this.state = {
	        //    active:this.props.active || false
	        //};
	    }

	    /**
	     * 点击回调函数
	     * */

	    Label.prototype.clickHandler = function clickHandler(e) {
	        var clickCallback = this.props.clickCallback;
	        var target = e.target;
	        //,
	        //     active = !this.state.active;
	        //this.setState({
	        //    active:active
	        //});
	        clickCallback && clickCallback(target.getAttribute('value'), target.innerHTML, target, !this.props.active);
	    };

	    Label.prototype.render = function render() {
	        var url = this.props.url;

	        return _react2['default'].createElement(
	            'a',
	            _extends({ href: url }, this.props, { className: _classnames2['default'](this.getClassName('item'), this.getClassNames(this.props), this.getClassName(this.props.className)
	                //this.getClassNames(this.state)
	                ), onMouseDown: this.clickHandler.bind(this) }),
	            this.props.children
	        );
	    };

	    var _Label = Label;
	    Label = _utilsClassNameMixin2['default'](Label) || Label;
	    return Label;
	})(_react.Component);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames2 = __webpack_require__(32);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _GridJs = __webpack_require__(36);

	var _GridJs2 = _interopRequireDefault(_GridJs);

	var _RowJs = __webpack_require__(34);

	var _RowJs2 = _interopRequireDefault(_RowJs);

	var _ColJs = __webpack_require__(35);

	var _ColJs2 = _interopRequireDefault(_ColJs);

	var _LabelJs = __webpack_require__(49);

	var _LabelJs2 = _interopRequireDefault(_LabelJs);

	/**
	 * 标签组
	 * @class LabelGroup
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/label.js {js}
	 * @demo label.html {html}
	 * @show true
	 * */

	var LabelGroup = (function (_Component) {
	    _inherits(LabelGroup, _Component);

	    _createClass(LabelGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 左侧总标题
	             * @property title
	             * @type String
	             * */
	            title: _react.PropTypes.string,
	            /**
	             * 普通标签列表
	             * @property simple
	             * @type Boolean
	             * @default false
	             * */
	            simple: _react.PropTypes.bool,
	            /**
	             * 点击事件，所有label会被继承
	             * @property clickCallback
	             * @type Function
	             * */
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'label',
	            simple: false
	        },
	        enumerable: true
	    }]);

	    function LabelGroup(props, context) {
	        _classCallCheck(this, _LabelGroup);

	        _Component.call(this, props, context);

	        this.state = {
	            checked: this.props.defaultChecked
	        };
	    }

	    LabelGroup.prototype.activeHandler = function activeHandler(callback, value, text, target, active) {
	        //debugger;

	        if (this.state.checked != target.innerHTML) {
	            this.setState({
	                checked: text
	            });
	            callback && callback(value, text, target, active);
	        }
	    };

	    LabelGroup.prototype.render = function render() {
	        var _classnames,
	            _this2 = this;

	        var _this = this;
	        var options = _react2['default'].Children.map(this.props.children, function (option) {
	            var _option$props = option.props;
	            var clickCallback = _option$props.clickCallback;
	            var url = _option$props.url;

	            var other = _objectWithoutProperties(_option$props, ['clickCallback', 'url']);

	            return _react2['default'].createElement(
	                _LabelJs2['default'],
	                _extends({}, other, {
	                    url: url ? url : _this.props.url,
	                    value: option.props.value ? option.props.value : option.props.children,
	                    clickCallback: _this.activeHandler.bind(_this, clickCallback ? clickCallback : _this.props.clickCallback),
	                    active: _this2.props.simple ? false : option.props.children === _this.state.checked }),
	                option.props.children
	            );
	        }, this);

	        var labelCroupContent = this.props.simple ? _react2['default'].createElement(
	            'div',
	            { className: _classnames3['default'](this.getClassName('group-simple')) },
	            options
	        ) : _react2['default'].createElement(
	            _GridJs2['default'],
	            { className: _classnames3['default'](this.getClassName('group'), (_classnames = {}, _classnames[this.getClassName('end')] = !!this.props.end, _classnames)) },
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                null,
	                this.props.title ? _react2['default'].createElement(
	                    _ColJs2['default'],
	                    { sm: 1 },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: _classnames3['default'](this.getClassName('title')) },
	                        this.props.title
	                    )
	                ) : null,
	                _react2['default'].createElement(
	                    _ColJs2['default'],
	                    { sm: this.props.title ? 11 : 12, end: true },
	                    options
	                )
	            )
	        );
	        return labelCroupContent;
	    };

	    var _LabelGroup = LabelGroup;
	    LabelGroup = _utilsClassNameMixin2['default'](LabelGroup) || LabelGroup;
	    return LabelGroup;
	})(_react.Component);

	exports['default'] = LabelGroup;
	module.exports = exports['default'];

/***/ },
/* 51 */
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

	/**
	 * Panel组件
	 * @class Panel
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var Panel = (function (_Component) {
	    _inherits(Panel, _Component);

	    function Panel() {
	        _classCallCheck(this, _Panel);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    Panel.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](this.getClassName('panel'), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Panel, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {},
	        enumerable: true
	    }]);

	    var _Panel = Panel;
	    Panel = _utilsClassNameMixinJs2['default'](Panel) || Panel;
	    return Panel;
	})(_react.Component);

	exports['default'] = Panel;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

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

	/**
	 * PanelHeader组件
	 * @class PanelHeader
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var PanelHeader = (function (_Component) {
	    _inherits(PanelHeader, _Component);

	    function PanelHeader() {
	        _classCallCheck(this, _PanelHeader);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    PanelHeader.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('header')) },
	            this.props.children
	        );
	    };

	    _createClass(PanelHeader, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'panel'
	        },
	        enumerable: true
	    }]);

	    var _PanelHeader = PanelHeader;
	    PanelHeader = _utilsClassNameMixinJs2['default'](PanelHeader) || PanelHeader;
	    return PanelHeader;
	})(_react.Component);

	exports['default'] = PanelHeader;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

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

	/**
	 * PanelFooter组件
	 * @class PanelFooter
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var PanelFooter = (function (_Component) {
	    _inherits(PanelFooter, _Component);

	    function PanelFooter() {
	        _classCallCheck(this, _PanelFooter);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    PanelFooter.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('footer'), this.props.padding ? this.getClassName('padding') : '') },
	            this.props.children
	        );
	    };

	    _createClass(PanelFooter, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 是否加padding
	             * @property padding
	             * @type bool
	             * @default true
	             * */
	            padding: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'panel',
	            padding: true
	        },
	        enumerable: true
	    }]);

	    var _PanelFooter = PanelFooter;
	    PanelFooter = _utilsClassNameMixinJs2['default'](PanelFooter) || PanelFooter;
	    return PanelFooter;
	})(_react.Component);

	exports['default'] = PanelFooter;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

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

	/**
	 * PanelContent组件
	 * @class PanelContent
	 * @constructor
	 * @module panel
	 * @extends Component
	 * @requires React classnames
	 * @since 0.1.0
	 * @demo src/panel.js {js}
	 * @demo panel.html {html}
	 * @author bo.an@dianping.com
	 * */

	var PanelContent = (function (_Component) {
	    _inherits(PanelContent, _Component);

	    function PanelContent() {
	        _classCallCheck(this, _PanelContent);

	        _Component.apply(this, arguments);
	    }

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    PanelContent.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getClassName('content'), this.props.padding ? this.getClassName('padding') : '') },
	            this.props.children
	        );
	    };

	    _createClass(PanelContent, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 是否加padding
	             * @property padding
	             * @type bool
	             * @default true
	             * */
	            padding: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'panel',
	            padding: true
	        },
	        enumerable: true
	    }]);

	    var _PanelContent = PanelContent;
	    PanelContent = _utilsClassNameMixinJs2['default'](PanelContent) || PanelContent;
	    return PanelContent;
	})(_react.Component);

	exports['default'] = PanelContent;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;