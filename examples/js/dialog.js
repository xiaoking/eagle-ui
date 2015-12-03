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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 15/11/4.
	 */
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _lib_includeLess = __webpack_require__(24);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _libDialogJs = __webpack_require__(45);

	var _libDialogJs2 = _interopRequireDefault(_libDialogJs);

	var _libButtonJs = __webpack_require__(33);

	var _libButtonJs2 = _interopRequireDefault(_libButtonJs);

	var _libGridJs = __webpack_require__(36);

	var _libGridJs2 = _interopRequireDefault(_libGridJs);

	var _libRowJs = __webpack_require__(34);

	var _libRowJs2 = _interopRequireDefault(_libRowJs);

	var _libColJs = __webpack_require__(35);

	var _libColJs2 = _interopRequireDefault(_libColJs);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    _createClass(Demo, null, [{
	        key: 'defaultProps',
	        value: {
	            show: false,
	            type: "alert"
	        },
	        enumerable: true
	    }]);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);
	        this.state = {
	            show: this.props.show,
	            type: this.props.type
	        };
	    }

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _libGridJs2['default'],
	            null,
	            _react2['default'].createElement(
	                _libRowJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 3 },
	                    _react2['default'].createElement(
	                        _libButtonJs2['default'],
	                        { block: true, radius: true, egSize: 'sm', onClick: this.showDialog.bind(this) },
	                        'dialog'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 3 },
	                    _react2['default'].createElement(
	                        _libButtonJs2['default'],
	                        { block: true, radius: true, egSize: 'sm', onClick: this.showAlert.bind(this) },
	                        'alert'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 3 },
	                    _react2['default'].createElement(
	                        _libButtonJs2['default'],
	                        { block: true, radius: true, egSize: 'sm', onClick: this.showConfirm.bind(this) },
	                        'confirm'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 3 },
	                    _react2['default'].createElement(
	                        _libButtonJs2['default'],
	                        { block: true, radius: true, egSize: 'sm', onClick: this.showMsak.bind(this) },
	                        'mask'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                _libDialogJs2['default'],
	                { type: this.state.type, show: this.state.show },
	                'ahflaskdjflajsflajsdlf;jkasdfk adfkjasd;fkjas;dlf asdfkn;askdfnas'
	            )
	        );
	    };

	    Demo.prototype.showDialog = function showDialog() {
	        this.setState({
	            show: true,
	            type: 'dialog'
	        });
	    };

	    Demo.prototype.showAlert = function showAlert() {
	        this.setState({
	            show: true,
	            type: 'alert'
	        });
	    };

	    Demo.prototype.showConfirm = function showConfirm() {
	        this.setState({
	            show: true,
	            type: 'confirm'
	        });
	    };

	    Demo.prototype.showMsak = function showMsak() {
	        this.setState({
	            show: true,
	            type: 'mask'
	        });
	    };

	    return Demo;
	})(_react.Component);

	ReactDOM.render(_react2['default'].createElement(Demo, null), document.getElementById('root'));

/***/ },

/***/ 24:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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
	 * 按钮组件
	 * @class Button
	 * @module form
	 * @extends Component
	 * @constructor
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
	      /**
	       * 按钮尺寸,分别为xs、sm、lg
	       * @property egSize
	       * @type String
	       * @default sm
	       * */
	      egSize: _react.PropTypes.string,
	      /**
	       * 禁用
	       * @property disabled
	       * @type Boolean
	       * @default false
	       * */
	      disabled: _react.PropTypes.bool,
	      /**
	       * 启用
	       * @property enable
	       * @type Boolean
	       * @default true
	       * */
	      enable: _react.PropTypes.bool,
	      //success:PropTypes.bool,
	      /**
	       * 选中
	       * @property active
	       * @type Boolean
	       * @default false
	       * */
	      active: _react.PropTypes.bool,
	      /**
	       * 圆角
	       * @property radius
	       * @type Boolean
	       * @default false
	       * */
	      radius: _react.PropTypes.bool,
	      /**
	       * 椭圆角
	       * @property round
	       * @type Boolean
	       * @default false
	       * */
	      round: _react.PropTypes.bool,
	      //error:PropTypes.bool,
	      //warning:PropTypes.bool,
	      //danger:PropTypes.bool,
	      /**
	       * 颜色[error、warning、danger、link、gray、white、success、'']
	       * @property egStyle
	       * @type Boolean
	       * @default ''
	       * */
	      egStyle: _react.PropTypes.string,
	      /**
	       * 样式前缀
	       * @property classPrefix
	       * @type String
	       * @default btn
	       * */
	      classPrefix: _react.PropTypes.string,
	      /**
	       * 标签tagName
	       * @property componentTag
	       * @type String
	       * @default a
	       * */
	      componentTag: _react.PropTypes.string,
	      /**
	       * 块级显示
	       * @property block
	       * @type Boolean
	       * @default false
	       * */
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
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

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 15/10/30.
	 */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(30);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames2 = __webpack_require__(32);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _ButtonJs = __webpack_require__(33);

	var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

	var _RowJs = __webpack_require__(34);

	var _RowJs2 = _interopRequireDefault(_RowJs);

	var _ColJs = __webpack_require__(35);

	var _ColJs2 = _interopRequireDefault(_ColJs);

	var _GridJs = __webpack_require__(36);

	var _GridJs2 = _interopRequireDefault(_GridJs);

	/**
	 * 弹框组件
	 * @class dialog
	 * @module ui
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/dialog.js{js}
	 * @demo dialog.html
	 * @show true
	 * */

	var Dialog = (function (_Component) {
	    _inherits(Dialog, _Component);

	    _createClass(Dialog, null, [{
	        key: 'propType',
	        value: {
	            /**
	             * dialog类型：分为alert,confirm,dialog,mask 四种。默认alert
	             * @property type
	             * @type String
	             * @default alert
	             * */
	            type: _react.PropTypes.string,
	            /**
	             * 标题
	             * @property title
	             * @type String
	             * @default 温馨提示
	             * */
	            title: _react.PropTypes.string,
	            /**
	             * 点击确定时，回调方法
	             * @property successCallback
	             * @type Function
	             * @default null
	             * */
	            successCallback: _react.PropTypes.func,
	            /**
	             * 点击取消时，回调方法
	             * @property cancelCallback
	             * @type Function
	             * @default null
	             * */
	            cancelCallback: _react.PropTypes.func,
	            /**
	             * 类名样式前缀
	             * @property classPrefix
	             * @type sting
	             * @default crumb
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default div
	             * */
	            componentTag: _react.PropTypes.string

	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            successCallback: null, //success回掉函数
	            cancelCallback: null, //cancel回调函数
	            close: false, //是否有x图标
	            title: '温馨提示', //标题
	            type: 'alert',
	            classPrefix: 'dialog',
	            componentTag: 'div'
	        },
	        enumerable: true
	    }]);

	    function Dialog(props, context) {
	        _classCallCheck(this, _Dialog);

	        _Component.call(this, props, context);
	        this.flag = true;
	        this.state = {
	            show: this.props.show,
	            init: true
	        };
	    }

	    /**
	     * 接收到新props时执行,props是否存在show，是改变state.show，否则不变
	     * 生命周期方法
	     * @method componentWillReceiveProps
	     * */

	    Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setState({
	            show: nextProps.show ? nextProps.show : this.state.show
	        });
	    };

	    /**
	     * change flag状态，即非第一次
	     * */

	    Dialog.prototype.componentDidMount = function componentDidMount() {
	        this.flag = false;
	    };

	    /**
	     * @method render
	     * @return {ReactElement}
	     * */

	    Dialog.prototype.render = function render() {
	        var _classnames;

	        return _react2['default'].createElement(
	            _GridJs2['default'],
	            { ref: 'container', className: _classnames3['default'](this.getClassName('container'), (_classnames = {}, _classnames['fadein'] = this.props.cancelCallback ? this.props.show : this.state.show, _classnames['fadeout'] = this.flag ? false : !(this.props.cancelCallback ? this.props.show : this.state.show), _classnames)) },
	            !this.flag && !(this.props.cancelCallback ? this.props.show : this.state.show) ? this.displayNone() : null,
	            this[this.props.type.toLowerCase()](),
	            this.showOverlay(this.props.tips)
	        );
	    };

	    /**
	     * 改变display形态
	     * */

	    Dialog.prototype.displayNone = function displayNone() {
	        var _this = this;
	        clearTimeout(this.timer);
	        this.timer = setTimeout((function () {
	            this.removeClass(ReactDOM.findDOMNode(_this.refs.container), 'fadeout');
	        }).bind(this), 400);
	    };

	    /**
	     * 点击X，调用cancelCallback（如果存在），否则通过改变自身state来关闭
	     * @method closeDialog
	     * @return null
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
	     * 点击确定按钮，调用successCallback（如果存在），否则通过改变自身state来关闭
	     * @method submitForm
	     * @return null;
	     * */

	    Dialog.prototype.submitForm = function submitForm() {

	        this.props.successCallback && this.props.successCallback();
	        if (!this.props.successCallback) {
	            this.setState({
	                show: false
	            });
	        }
	    };

	    /**
	     * 点击取消按钮，调用cancelCallback（如果存在），否则通过改变自身state来关闭
	     * @method cancleDialog
	     * @return null;
	     * */

	    Dialog.prototype.cancleDialog = function cancleDialog() {
	        this.props.cancelCallback && this.props.cancelCallback();
	        if (!this.props.cancelCallback) {
	            this.setState({
	                show: false
	            });
	        }
	    };

	    /**
	     * 显示遮罩
	     * @method showOverlay
	     * @return {ReactElement}
	     * */

	    Dialog.prototype.showOverlay = function showOverlay() {
	        return _react2['default'].createElement(_GridJs2['default'], { className: _classnames3['default'](this.getClassNamesForArguments('overlay')) });
	    };

	    /**
	     * 渲染alert
	     * @method alert
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.alert = function alert() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')), style: { width: '300px' } },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames3['default'](this.getClassNamesForArguments('title')) },
	                    this.props.title
	                ),
	                _react2['default'].createElement(
	                    _RowJs2['default'],
	                    { className: _classnames3['default'](this.getClassNamesForArguments('content')) },
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
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
	            )
	        );
	    };

	    /**
	     * 渲染confirm
	     * @method confirm
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.confirm = function confirm() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')), style: { width: '300px' } },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
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
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children ? this.props.children : '请快乐的修bug'
	                    )
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
	            )
	        );
	    };

	    /**
	     * 渲染dialog
	     * @method dialog
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.dialog = function dialog() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
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
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
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
	            )
	        );
	    };

	    /**
	     * 渲染mask
	     * @method mask
	     * @return  {ReactElement}
	     * */

	    Dialog.prototype.mask = function mask() {
	        return _react2['default'].createElement(
	            _RowJs2['default'],
	            { className: _classnames3['default'](this.getClassNamesForArguments('dialog')) },
	            _react2['default'].createElement(
	                _ColJs2['default'],
	                null,
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
	                    _react2['default'].createElement(
	                        _ColJs2['default'],
	                        null,
	                        this.props.children
	                    )
	                )
	            )
	        );
	    };

	    var _Dialog = Dialog;
	    Dialog = _utilsClassNameMixin2['default'](Dialog) || Dialog;
	    return Dialog;
	})(_react.Component);

	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ }

/******/ })
});
;