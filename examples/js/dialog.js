(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
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
	 * Created by panqianjin on 15/11/4.
	 */
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _lib_includeLess = __webpack_require__(21);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _libDialogJs = __webpack_require__(41);

	var _libDialogJs2 = _interopRequireDefault(_libDialogJs);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo() {
	        _classCallCheck(this, Demo);

	        _Component.apply(this, arguments);
	    }

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(_libDialogJs2['default'], { type: 'confirm', show: true });
	    };

	    _createClass(Demo, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

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
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(28);

	var consts = _constantsJs.classConstants;

	exports['default'] = function (obj) {
	    /**
	     * 给className添加前缀后返回className
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

	    obj.prototype.hasClass = function (obj, cls) {
	        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    };

	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	    };
	    obj.prototype.removeClass = function (obj, cls) {
	        if (this.hasClass(obj, cls)) {
	            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	            obj.className = obj.className.replace(reg, ' ');
	        }
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(27);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(29);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 按钮组件
	 * @class Button
	 * @module form
	 * @extends Component
	 * @since 0.1.0
	 * @demo src/button.js {js}
	 * @demo button.html {html}
	 * @show true
	 * */

	var Button = (function (_Component) {
	    _inherits(Button, _Component);

	    _createClass(Button, null, [{
	        key: 'propTypes',

	        //static mixins = [ClassNameMixin];
	        value: {
	            egSize: _react.PropTypes.string,
	            disabled: _react.PropTypes.bool,
	            enable: _react.PropTypes.bool,
	            //success:PropTypes.bool,
	            active: _react.PropTypes.bool,
	            radius: _react.PropTypes.bool,
	            round: _react.PropTypes.bool,
	            //error:PropTypes.bool,
	            //warning:PropTypes.bool,
	            //danger:PropTypes.bool,
	            egStyle: _react.PropTypes.string,
	            classPrefix: _react.PropTypes.string,
	            componentTag: _react.PropTypes.string,
	            block: _react.PropTypes.bool,
	            egHref: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: 'default',
	            classPrefix: 'btn',
	            componentTag: 'a'
	        },

	        //lg
	        //sm
	        //xs this.getClassName('demo'); eg-demo
	        enumerable: true
	    }]);

	    function Button(props, context) {
	        _classCallCheck(this, _Button);

	        _Component.call(this, props, context);
	        //this.classNameMixin = new ClassNameMixin(this.props);
	    }

	    Button.prototype.render = function render() {
	        //const {} = this.props;
	        //什么颜色，大小  类型
	        var _props = this.props;
	        var egSize = _props.egSize;
	        var Component = _props.componentTag;
	        var egStyle = _props.egStyle;

	        //let  size= this.classNameMixin.getClassName(egSize);

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getClassNamesForArguments('btn', egSize, egStyle), this.getClassNames(this.props)) }),
	            this.props.children
	        );
	    };

	    var _Button = Button;
	    Button = _utilsClassNameMixin2['default'](Button) || Button;
	    return Button;
	})(_react.Component);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	//import RowLess from './row.less';
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(29);

	var _classnames2 = _interopRequireDefault(_classnames);

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
/* 32 */
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

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(29);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.getWidthClass = function getWidthClass() {
	        var className = ['eg-sm-' + this.props.sm];

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
	            sm: _react.PropTypes.number.isRequired,
	            end: _react.PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_react.Component);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var Grid = (function (_Component) {
	    _inherits(Grid, _Component);

	    function Grid() {
	        _classCallCheck(this, Grid);

	        _Component.apply(this, arguments);
	    }

	    Grid.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            this.props,
	            this.props.children
	        );
	    };

	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    return Grid;
	})(_react.Component);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 15/10/30.
	 */
	/**
	 弹框组件
	 Features :
	 1.根据不同的type渲染不同的弹框样式
	 2.根据需要提供callback


	 Update Note:
	 +2015.10.30 ： Created
	 +2015.11.8 : Restructure
	 @moudle Dialog
	 */

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(25);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(27);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames2 = __webpack_require__(29);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _ButtonJs = __webpack_require__(30);

	var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

	var _RowJs = __webpack_require__(31);

	var _RowJs2 = _interopRequireDefault(_RowJs);

	var _ColJs = __webpack_require__(32);

	var _ColJs2 = _interopRequireDefault(_ColJs);

	var _GridJs = __webpack_require__(33);

	var _GridJs2 = _interopRequireDefault(_GridJs);

	/**
	 * dialog 弹窗组件
	 *
	 * @class dialog
	 */

	var Dialog = (function (_Component) {
	    _inherits(Dialog, _Component);

	    _createClass(Dialog, null, [{
	        key: 'defaultProps',
	        value: {
	            successCallback: null, //success回掉函数
	            cancelCallback: null, //cancel回调函数
	            close: false, //是否有x图标
	            title: '爱生活爱点评', //标题
	            show: false,
	            type: 'alert',
	            tips: null,
	            classPrefix: 'dialog', //类名前前缀
	            componentTag: 'div'
	        },
	        enumerable: true
	    }]);

	    function Dialog(props, context) {
	        _classCallCheck(this, _Dialog);

	        _Component.call(this, props, context);
	        this.state = {
	            show: this.props.show
	        };
	    }

	    /**
	     * @method close dialog
	     * @return change state
	     * */

	    Dialog.prototype.closeDialog = function closeDialog() {
	        this.props.cancelCallback && this.props.cancelCallback();
	        if (!this.props.cancelCallback) {
	            this.setState({
	                show: false
	            });
	        }
	    };

	    /**
	     * @method submit dialog
	     * @return callBack;
	     *         change state
	     * */

	    Dialog.prototype.submitForm = function submitForm() {

	        this.props.successCallback && this.props.successCallback();
	        if (!this.props.successCallback) {
	            this.setState({
	                show: false
	            });
	        }
	    };

	    Dialog.prototype.cancleDialog = function cancleDialog() {
	        this.props.cancelCallback && this.props.cancelCallback();
	        if (!this.props.cancelCallback) {
	            this.setState({
	                show: false
	            });
	        }
	    };

	    /**
	     * @method show dialog overly
	     * @return dom
	     * */

	    Dialog.prototype.showOverlay = function showOverlay() {
	        return _react2['default'].createElement(_GridJs2['default'], { className: _classnames3['default'](this.getClassNamesForArguments('overlay')) });
	    };

	    /**
	     * @method render different dom
	     * @name    face to this.props.type
	     * @return  alert/confirm/dialog/mask
	     * */

	    Dialog.prototype.alert = function alert() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')), style: { width: '300px' } },
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('title')) },
	                this.props.title
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
	                this.props.children
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('button')) },
	                _react2['default'].createElement(
	                    _ColJs2['default'],
	                    { sm: 12 },
	                    _react2['default'].createElement(
	                        _ButtonJs2['default'],
	                        { radius: true, egSize: 'xs', onClick: this.submitForm.bind(this) },
	                        '确定'
	                    )
	                )
	            )
	        );
	    };

	    Dialog.prototype.confirm = function confirm() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')), style: { width: '300px' } },
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('title')) },
	                this.props.title,
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames3['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                    'x'
	                )
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
	                this.props.children ? this.props.children : '请快乐的修bug'
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('button')) },
	                _react2['default'].createElement(
	                    _ColJs2['default'],
	                    { sm: 12 },
	                    _react2['default'].createElement(
	                        _ButtonJs2['default'],
	                        { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
	                        '确定'
	                    ),
	                    _react2['default'].createElement(
	                        _ButtonJs2['default'],
	                        { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
	                        '取消'
	                    )
	                )
	            )
	        );
	    };

	    Dialog.prototype.dialog = function dialog() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('title')) },
	                this.props.title,
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames3['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                    'x'
	                )
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
	                this.props.children
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('button')) },
	                _react2['default'].createElement(
	                    _ColJs2['default'],
	                    { sm: 12 },
	                    _react2['default'].createElement(
	                        _ButtonJs2['default'],
	                        { radius: true, egSize: 'xs', style: { marginRight: '20px' }, onClick: this.submitForm.bind(this) },
	                        '确定'
	                    ),
	                    _react2['default'].createElement(
	                        _ButtonJs2['default'],
	                        { radius: true, white: true, egSize: 'xs', onClick: this.cancleDialog.bind(this) },
	                        '取消'
	                    )
	                )
	            )
	        );
	    };

	    Dialog.prototype.mask = function mask() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('title')) },
	                this.props.title,
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames3['default'](this.getClassNamesForArguments('close')), onClick: this.closeDialog.bind(this) },
	                    'x'
	                )
	            ),
	            _react2['default'].createElement(
	                _RowJs2['default'],
	                { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
	                this.props.children
	            )
	        );
	    };

	    Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setState({
	            show: nextProps.show ? nextProps.show : this.state.show
	        });
	    };

	    Dialog.prototype.render = function render() {
	        var _classnames;

	        return _react2['default'].createElement(
	            _GridJs2['default'],
	            { className: _classnames3['default'](this.getClassName('container'), (_classnames = {}, _classnames[this.getClassName('show')] = this.props.cancelCallback ? this.props.show : this.state.show, _classnames)) },
	            this[this.props.type.toLowerCase()](),
	            this.showOverlay(this.props.tips)
	        );
	    };

	    var _Dialog = Dialog;
	    Dialog = _utilsClassNameMixin2['default'](Dialog) || Dialog;
	    return Dialog;
	})(_react.Component);

	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;