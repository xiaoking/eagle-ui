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

	var _libSelectJs = __webpack_require__(56);

	var _libSelectJs2 = _interopRequireDefault(_libSelectJs);

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
	            input: true
	        },
	        enumerable: true
	    }]);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);
	        this.state = {
	            input: this.props.input
	        };
	    }

	    Demo.prototype.render = function render() {
	        console.log(this.state.input);
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
	                        { block: true, radius: true, egSize: 'sm', onClick: this.changeIn.bind(this) },
	                        '切换至不可输入模式'
	                    )
	                ),
	                _react2['default'].createElement(
	                    _libColJs2['default'],
	                    { sm: 8 },
	                    _react2['default'].createElement(
	                        _libSelectJs2['default'],
	                        { callback: function (val, key) {
	                                console.log(val + ':' + key);
	                            }, input: this.state.input },
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '0' },
	                            '北京'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '1' },
	                            '上海'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '2' },
	                            '南京'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '3' },
	                            'ssdd'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '4' },
	                            'sd饭否否'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '5' },
	                            '南京'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '6' },
	                            'ssdd'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '7' },
	                            'sd饭否否'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '8' },
	                            '北京'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '9' },
	                            '上海'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '10' },
	                            '南京'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '11' },
	                            'ssdd'
	                        ),
	                        _react2['default'].createElement(
	                            'item',
	                            { value: '12' },
	                            'sd饭否否'
	                        )
	                    )
	                )
	            )
	        );
	    };

	    Demo.prototype.changeIn = function changeIn() {
	        this.setState({
	            input: false
	        });
	        alert('不可输入');
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

/***/ 38:
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

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 15/11/12.
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

	var _InputJs = __webpack_require__(38);

	var _InputJs2 = _interopRequireDefault(_InputJs);

	var _RowJs = __webpack_require__(34);

	var _RowJs2 = _interopRequireDefault(_RowJs);

	var _ColJs = __webpack_require__(35);

	var _ColJs2 = _interopRequireDefault(_ColJs);

	var _GridJs = __webpack_require__(36);

	var _GridJs2 = _interopRequireDefault(_GridJs);

	/**
	 * 下拉选择框组件。
	 * 有input参数可以自由输入，否则不在列表中的输入改变为第一个item
	 * @Class Select
	 * @Module form
	 * @extends Coponent
	 * @since 0.1.0
	 * @demo src/select.js{js}
	 * @demo select.html{html}
	 * @show true
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
	        this.state = {
	            show: this.props.show,
	            /**
	             * item content文本值
	             * @type {String}
	             * */
	            value: this.props.value,
	            /**
	             * item value值
	             * @type {String}
	             * */
	            key: this.props.key,
	            /**
	             * 是否可以自由输入
	             * @type {Boolean}
	             * */
	            input: this.props.input
	        };
	    }

	    /**
	     * 第一次渲染完成后执行,为document添加点击监听事件，判断是否关闭ul
	     * 生命周期方法
	     * @method componentDidMount
	     * */

	    Select.prototype.componentDidMount = function componentDidMount() {
	        var _this = this;
	        var selectContair = ReactDOM.findDOMNode(this.refs.selectContair);
	        document.addEventListener('click', function (e) {
	            if (_this.isParent(e.target, selectContair)) {
	                //console.dir('不要动');
	            } else {
	                    if (_this.state.show) {
	                        _this.hideUl();
	                    }
	                }
	        }, false);
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
	        var key = this.state.key;
	        if (this.state.show) {
	            this.setState({
	                show: false
	            });
	        }
	        console.log(ReactDOM.findDOMNode(this.refs.test).value);
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
	                key: this.props.children[0].props.value,
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
	        //console.log(event.target.value);
	        var val = event.target.value;
	        this.setState({
	            value: val,
	            autoVal: val
	        });
	    };

	    /**
	     * 点击或者enter键时，选择当前li的值，并关闭ul
	     * @method chooseItem
	     * @param event {Object}
	     * @return null
	     * */

	    Select.prototype.chooseItem = function chooseItem(event) {
	        var ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
	        //let inputObj = ReactDOM.findDOMNode(this.refs.select);
	        this.removeAllActive(ulChildren);
	        event.target.classList.add('active');
	        this.setState({
	            show: !this.state.show,
	            value: event.target.textContent,
	            key: event.target.value
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
	                        key: item.value
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
	        var selectUl = ReactDOM.findDOMNode(this.refs.selectUl);
	        var ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
	        var ulArrey = Array.prototype.slice.call(ulChildren);
	        var i = -1;
	        var obj = ulChildren[0];
	        if (event.keyCode == 40 || event.keyCode == 38) {
	            /**
	             * 当ul显示时，方向键移动起作用
	             * 遍历寻找当前active元素的位置，并移除active
	             * */
	            if (this.state.show) {
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
	            }
	        } else if (event.keyCode == 13) {
	            /**
	             * enter键，取得当前元素值
	             * */
	            this.setState({
	                show: false
	            });
	            this.removeAllActive(ulChildren, true);
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
	        var ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
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
	        var li = _react2['default'].Children.map(this.props.children, function (item) {
	            if (reg.test(item.props.children)) {
	                return _react2['default'].createElement(
	                    'li',
	                    { value: item.props.value, onMouseOver: _this3.addActive.bind(_this3), onClick: _this3.removeActive.bind(_this3), onMouseDown: _this3.chooseItem.bind(_this3) },
	                    item.props.children
	                );
	            }
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
	        var _classnames;

	        return _react2['default'].createElement(
	            _GridJs2['default'],
	            { ref: 'selectContair', className: _classnames3['default'](this.getClassNamesForArguments('container')), value: this.state.value },
	            _react2['default'].createElement(
	                'select',
	                { ref: 'test', value: this.state.key, style: { display: 'none' } },
	                this.renderOption()
	            ),
	            _react2['default'].createElement(_InputJs2['default'], { ref: 'select', value: this.state.value, onClick: this.showUl.bind(this), onChange: this.handlerValue.bind(this), onKeyDown: this.keyIn.bind(this), onBlur: this.finishInput.bind(this) }),
	            _react2['default'].createElement('i', { className: _classnames3['default'](this.getClassName('arrow-down')), onClick: this.toogleUl.bind(this) }),
	            _react2['default'].createElement(
	                'ul',
	                { ref: 'selectUl', className: _classnames3['default'](this.getClassNamesForArguments('ul'), (_classnames = {}, _classnames[this.getClassName('show')] = this.state.show, _classnames)) },
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

/***/ }

/******/ })
});
;