(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_27__) {
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
	 * Created by mac on 15/11/4.
	 */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _lib_includeLess = __webpack_require__(23);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _libInputJs = __webpack_require__(37);

	var _libInputJs2 = _interopRequireDefault(_libInputJs);

	var _libButtonJs = __webpack_require__(32);

	var _libButtonJs2 = _interopRequireDefault(_libButtonJs);

	var _libRowJs = __webpack_require__(33);

	var _libRowJs2 = _interopRequireDefault(_libRowJs);

	var _libPanelPanelJs = __webpack_require__(65);

	var _libPanelPanelJs2 = _interopRequireDefault(_libPanelPanelJs);

	var _libPanelPanelContentJs = __webpack_require__(66);

	var _libPanelPanelContentJs2 = _interopRequireDefault(_libPanelPanelContentJs);

	var _libColJs = __webpack_require__(34);

	var _libColJs2 = _interopRequireDefault(_libColJs);

	var _libGridJs = __webpack_require__(35);

	var _libGridJs2 = _interopRequireDefault(_libGridJs);

	var _libValidatorPanelJs = __webpack_require__(67);

	var _libValidatorPanelJs2 = _interopRequireDefault(_libValidatorPanelJs);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);

	        this.rules = {
	            //key对应的是表单元素的name
	            calendar: {
	                //组件默认规则
	                required: true
	            },
	            checkbox: {
	                required: true,
	                //自定义规则
	                isValueToNumber: {
	                    text: 'value值不是字符串',
	                    rule: function rule(value) {
	                        console.dir(value);
	                        return isNaN(value);
	                    }
	                }
	            },
	            date: {
	                date: true
	            },
	            number: {
	                number: true,
	                digits: true
	            },
	            equalTo: {
	                digits: true,
	                equalTo: {
	                    params: '[name="number"]'
	                }

	            },
	            minlength: {
	                minlength: {
	                    params: 10
	                },
	                maxlength: {
	                    params: 15
	                }
	            },
	            email: {
	                email: true
	            }
	        };
	    }

	    Demo.prototype.show = function show(value, text, target, active) {
	        console.dir(value);
	    };

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _libPanelPanelJs2['default'],
	            null,
	            _react2['default'].createElement(
	                _libGridJs2['default'],
	                null,
	                _react2['default'].createElement(
	                    _libRowJs2['default'],
	                    null,
	                    _react2['default'].createElement(
	                        _libColJs2['default'],
	                        { sm: 5, end: true },
	                        _react2['default'].createElement(
	                            _libValidatorPanelJs2['default'],
	                            { rules: this.rules, submitElement: '#submit' },
	                            _react2['default'].createElement(
	                                _libRowJs2['default'],
	                                null,
	                                _react2['default'].createElement(
	                                    _libColJs2['default'],
	                                    null,
	                                    _react2['default'].createElement(
	                                        _libPanelPanelContentJs2['default'],
	                                        null,
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入', icon: 'calendar', name: 'calendar', 'data-validate': true }),
	                                                _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '1', 'data-validate': true }),
	                                                _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '2', 'data-validate': true }),
	                                                _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '3', 'data-validate': true }),
	                                                _react2['default'].createElement(_libInputJs2['default'], { type: 'checkbox', name: 'checkbox', value: '4', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入日期', icon: 'calendar', name: 'date', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'number', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入有效的号码', name: 'equalTo', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '最大最小字符10-15', name: 'minlength', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(_libInputJs2['default'], { placeholder: '请输入您的email', name: 'email', 'data-validate': true })
	                                            )
	                                        ),
	                                        _react2['default'].createElement(
	                                            _libRowJs2['default'],
	                                            null,
	                                            _react2['default'].createElement(
	                                                _libColJs2['default'],
	                                                null,
	                                                _react2['default'].createElement(
	                                                    _libButtonJs2['default'],
	                                                    { radius: true, egSize: 'xs', id: 'submit' },
	                                                    '点我提交表单'
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    };

	    return Demo;
	})(_react.Component);

	ReactDOM.render(_react2['default'].createElement(Demo, null), document.getElementById('root'));

/***/ },

/***/ 23:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(30);

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

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(29);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(31);

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

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	//import RowLess from './row.less';
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(31);

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

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(31);

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

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(31);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixin = __webpack_require__(29);

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

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(29);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames10 = __webpack_require__(31);

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
	            _react2['default'].createElement('i', { className: this.getClassName('icon-' + this.props.icon, false) })
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

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(31);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(29);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * Panel组件
	 * @class Panel
	 * @constructor
	 * @module ui
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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(31);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(29);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

	/**
	 * PanelContent组件
	 * @class PanelContent
	 * @constructor
	 * @module ui
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

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(29);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(31);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 表单验证组件<br />
	 * 默认规则有<br/>
	 * <pre>
	 *     required：是否必填
	 *     date：日期格式验证
	 *     number：是否是有效的号码
	 *     url：url规则验证
	 *     dateISO：日期ISO验证
	 *     digits：是否是数字
	 *     equalTo：值对比
	 *     minlength：最少输入
	 *     maxlength：最大输入
	 *     email：邮箱验证
	 *     rangelength：字符大小需在某个区间之内
	 *     min：输入的值需要大于等于此规则定义的值
	 *     max：输入的值需要小于等于此规则定义的值
	 *     range：一个区间取值范围
	 *
	 * </pre>
	 * @class ValidatorPanel
	 * @module form
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo src/validate.js {js}
	 * @demo validate.html {html}
	 * @show true
	 * */

	var ValidatorPanel = (function (_Component) {
	    _inherits(ValidatorPanel, _Component);

	    _createClass(ValidatorPanel, null, [{
	        key: 'propTypes',
	        value: {
	            //触发点，change blur  manual（手动）
	            trigger: _react.PropTypes.string,
	            submitCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            /**
	             * 包装容器
	             * @property componentTag
	             * @type String
	             * @default form
	             * */
	            componentTag: 'form',
	            /**
	             * 触发验证的事件集合
	             * @property trigger
	             * @type String
	             * @default blur keyup focus click
	             * */
	            trigger: 'blur keyup focus click',
	            /**
	             * 默认规则提示文案
	             * @property message
	             * @type String
	             * @default
	             *       required: '不能为空',
	                     date: '请正确填写日期',
	                     number: '请输入一个有效的号码',
	                     url: '请输入一个有效的URL',
	                     email: '请输入一个有效的电子邮件地址',
	                     dateISO: '请输入一个有效的日期(ISO)',
	                     digits: '请输入数字',
	                     equalTo:'请再次输入相同的值。',
	                     minlength: '请输入至少{0}字符',
	                     maxlength: '请输入不超过{0}字符',
	                     rangelength: '请输入一个值{0}和{1}字符之间',
	                     min: '请输入一个值大于或等于{0}',
	                     max: '请输入一个值小于或等于{0}',
	                     range: '请输入一个值{0} - {1}'
	             * */
	            message: {
	                required: '不能为空',
	                date: '请正确填写日期',
	                number: '请输入一个有效的号码',
	                url: '请输入一个有效的URL',
	                email: '请输入一个有效的电子邮件地址',
	                dateISO: '请输入一个有效的日期(ISO)',
	                digits: '请输入数字',
	                equalTo: '请再次输入相同的值。',
	                minlength: '请输入至少{0}字符',
	                maxlength: '请输入不超过{0}字符',
	                rangelength: '请输入一个值{0}和{1}字符之间',
	                min: '请输入一个值大于或等于{0}',
	                max: '请输入一个值小于或等于{0}',
	                range: '请输入一个值{0} - {1}'
	            },
	            initCallback: function initCallback() {},
	            /**
	             * 在提交时除验证规则之外的其他逻辑
	             * @property submitCallback
	             * @type Function
	             * */
	            submitCallback: function submitCallback() {
	                return true;
	            },
	            timeout: 3000,
	            submitElement: '',
	            /**
	             * 是否增强文本框提示
	             * @property shake
	             * @type Boolean
	             * @default true
	             * */
	            shake: true,
	            /**
	             * 规则验证
	             * @property rules
	             * @type Object
	             * */
	            rules: {}
	        },
	        enumerable: true
	    }]);

	    function ValidatorPanel(props, context) {
	        _classCallCheck(this, _ValidatorPanel);

	        _Component.call(this, props, context);

	        this.elements = {};

	        this.formName = 'validate-form';
	        this.errorClass = this.getClassName('validate-error');
	        this.init = true;

	        this.state = {};
	    }

	    ValidatorPanel.prototype.trim = function trim(str) {
	        return str.replace(/(^\s*)|(\s*$)/g, "");
	    };

	    ValidatorPanel.prototype.isArray = function isArray(value) {
	        if (value instanceof Array || !(value instanceof Object) && Object.prototype.toString.call(value) == '[object Array]' || typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')) {

	            return true;
	        }
	        return false;
	    };

	    ValidatorPanel.prototype.optional = function optional(element) {
	        var val = this.getValue(element);
	        return !this.options.defaultRules.required.call(this, val, element);
	    };

	    ValidatorPanel.prototype.required = function required(value, element) {

	        if (element.nodeName.toLowerCase() === "select") {
	            var val = $(element).val();
	            return val && val.length > 0;
	        }
	        if (this.checkable(element)) {
	            return this.getLength(value, element) > 0;
	        }
	        return this.trim(value).length > 0;
	    };

	    ValidatorPanel.prototype.date = function date(value, element) {
	        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
	    };

	    ValidatorPanel.prototype.number = function number(value, element) {
	        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
	    };

	    ValidatorPanel.prototype.url = function url(value, element) {
	        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
	    };

	    ValidatorPanel.prototype.email = function email(value, element) {

	        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
	    };

	    ValidatorPanel.prototype.dateISO = function dateISO(value, element) {
	        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
	    };

	    ValidatorPanel.prototype.digits = function digits(value, element) {
	        return this.optional(element) || /^\d+$/.test(value);
	    };

	    ValidatorPanel.prototype.equalTo = function equalTo(value, element, param) {
	        var target = document.querySelectorAll(param);
	        /*if ( this.onfocus ) {
	            target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
	                this.show();
	            });
	        }*/
	        return this.optional(element) || value === target[0].value;
	    };

	    ValidatorPanel.prototype.minlength = function minlength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length >= param;
	    };

	    ValidatorPanel.prototype.maxlength = function maxlength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length <= param;
	    };

	    ValidatorPanel.prototype.rangelength = function rangelength(value, element, param) {
	        var length = this.isArray(value) ? value.length : this.getLength(value, element);
	        return this.optional(element) || length >= param[0] && length <= param[1];
	    };

	    ValidatorPanel.prototype.min = function min(value, element, param) {
	        return this.optional(element) || value >= param;
	    };

	    ValidatorPanel.prototype.max = function max(value, element, param) {
	        return this.optional(element) || value <= param;
	    };

	    ValidatorPanel.prototype.range = function range(value, element, param) {
	        return this.optional(element) || value >= param[0] && value <= param[1];
	    };

	    //待改进

	    ValidatorPanel.prototype.optional = function optional(element) {
	        var val = this.getValue(element);
	        return !this.required.call(this, val, element);
	    };

	    //高亮

	    ValidatorPanel.prototype.highlight = function highlight(element) {
	        if (!this.checkable(element)) {
	            this.addClass(element, this.errorClass);

	            if (this.props.shake) {

	                this.addClass(element, 'shake animated');
	                setTimeout((function () {
	                    this.removeClass(element, 'shake animated');
	                }).bind(this), 1000);
	            }
	        }
	    };

	    //取消高亮

	    ValidatorPanel.prototype.unhighlight = function unhighlight(element) {
	        this.removeClass(element, this.errorClass);
	    };

	    ValidatorPanel.prototype.checkable = function checkable(element) {
	        return (/radio|checkbox/i.test(element.type)
	        );
	    };

	    ValidatorPanel.prototype.getLength = function getLength(value, element) {
	        switch (element.nodeName.toLowerCase()) {
	            case "select":
	                return document.querySelectorAll("option:selected", element).length;
	            case "input":
	                if (this.checkable(element)) {
	                    return document.querySelectorAll("[name='" + element.name + "']:checked").length;
	                }
	        }
	        return value.length;
	    };

	    ValidatorPanel.prototype.formatString = function formatString(str, options) {

	        if (!options) {
	            return str;
	        }

	        return str.replace(/\{(.+?)\}/ig, function (match, key) {
	            var value = typeof options != 'object' ? options : options[key];
	            return typeof value == 'undefined' ? match : value;
	        });
	    };

	    ValidatorPanel.prototype.getValue = function getValue(element) {
	        var val = undefined,
	            type = element.type.toLowerCase();

	        if (type === "radio" || type === "checkbox") {
	            var el = document.querySelectorAll('input[name="' + element.name + '"]:checked');
	            return el && el.length > 0 ? el[0].value : '';
	        } else if (type === "number" && typeof element.validity !== "undefined") {
	            return element.validity.badInput ? false : element.value;
	        }

	        val = element.value;
	        if (typeof val === "string") {
	            return val.replace(/\r/g, "");
	        }
	        return val;
	    };

	    //循环验证单个input上的规则

	    ValidatorPanel.prototype.check = function check(element) {

	        //从每一项中提取验证规则
	        var message = this.props.message;

	        //let options = extend(true,{},this.options );
	        var val = this.getValue(element),

	        //rule = null,
	        msg = '',
	            text = null,
	            rules = this.props.rules[element.name]; //element.getAttribute('data-rules') ;

	        /*{
	            require:true,
	                isName:function(){
	            return true
	        },
	            number:{
	                text:'不能为空',
	                    params:1,
	                    rule:function(){
	                    return true;
	                }
	            }
	        }*/

	        for (var rule in rules) {

	            text = rules[rule];
	            //text =typeof(text)!=='string' ? text : {text:text};
	            if (typeof text == 'boolean') {
	                text = {};
	            }
	            if (!text.text) {
	                text.text = message[rule];
	            }

	            var validate = text.rule && text.rule instanceof Function ? text.rule : this[rule];

	            if (!validate.call(this, val, element, text.params)) {
	                msg = text.text;
	                break;
	            }
	            /*if(text.url && text.url!='' ){
	                msg = this.ajaxValidate(text.url,val,text.params);
	                if(typeof(msg) !== 'string'){
	                    msg = text.text;
	                }
	                break;
	            }else if(!this[rule].call(this,val,element,text.params)  ){
	                msg = text.text;
	                break;
	            }*/
	        }
	        return this.formatString(msg, text && text.params || '');
	    };

	    //验证

	    ValidatorPanel.prototype.validate = function validate(element) {
	        var message = this.check(element) || '';
	        if (message !== '') {
	            //错误提示
	            //this.elements[element.name].status=1;

	            this.setTipsOffset(element);

	            //设置错误消息
	            this.setState({
	                message: message
	            });
	            //this.highlight(this.parent, this.options.errorClass, this.options.validClass);
	            clearTimeout(this.validateTimeout);
	            this.validateTimeout = setTimeout((function () {
	                this.setState({
	                    message: ''
	                });
	            }).bind(this), this.props.timeout);
	            return false;
	        }
	        this.setState({
	            message: null
	        });
	        this.unhighlight(element);
	        //this.hide();
	        return true;
	    };

	    ValidatorPanel.prototype.validateHandler = function validateHandler(e) {
	        clearTimeout(this.vaTimeout);
	        this.vaTimeout = setTimeout(this.validate.bind(this, e.target), 400);
	    };

	    ValidatorPanel.prototype.submit = function submit() {
	        clearTimeout(this.__blurTimeobj);
	        var elements = this.elements,
	            element = null,
	            isSubmit = true;

	        for (var item in elements) {
	            element = elements[item]; //React.findDOMNode(this.props.refs[item] );
	            if (!this.validate(element)) {
	                setTimeout(function () {
	                    element.focus();
	                });
	                isSubmit = false;
	                break;
	            }
	        }

	        if (isSubmit && this.props.submitCallback()) {
	            //this.options.submitCallback &&(this.options.submitCallback() );
	            return true;
	        }
	        return false;
	    };

	    //隐藏错误提示

	    ValidatorPanel.prototype.hide = function hide() {};

	    ValidatorPanel.prototype.parents = function parents(ele, str) {
	        try {
	            var tempNode = ele.parentNode;
	            while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
	                tempNode = tempNode.parentNode;
	            }
	            return [tempNode];
	        } catch (err) {
	            return [];
	        }
	    };

	    //设置错误提示框的位置

	    ValidatorPanel.prototype.setTipsOffset = function setTipsOffset(element) {
	        var node = null,
	            name = element.name,
	            tip = _react2['default'].findDOMNode(this.refs[this.formName]),
	            w = element.offsetLeft,
	            t = element.offsetTop,
	            h = element.offsetHeight;

	        while (element.nodeType !== 1 || element.nodeName.toLowerCase() != this.props.componentTag) {
	            element = element.parentNode;
	        }

	        element = element.querySelectorAll('[name="' + name + '"]');

	        element = element[element.length - 1];

	        w = element.offsetLeft;
	        t = element.offsetTop;
	        node = element.offsetParent;
	        while (node) {
	            t += node.offsetTop;
	            w += node.offsetLeft;
	            node = node.offsetParent;
	        }
	        //w = tip.offsetWidth;
	        this.highlight(element);
	        tip = tip.querySelector('.' + this.getClassName("validate-tips"));

	        tip.style.cssText = 'position:absolute;left:' + (w + element.offsetWidth) + 'px;top:' + t + 'px;height:' + h + 'px;line-height:' + h + 'px;background-color:transparent;padding:0px 10px 0 22px;z-index:99;margin-left:15px;}';
	    };

	    //废弃

	    ValidatorPanel.prototype.bindValidate = function bindValidate() {
	        var _this2 = this;

	        //let _this = this;
	        var same = null,
	            showOrhide = 'show';
	        var options = _react2['default'].Children.map(this.props.children, function (option) {
	            //将validate保存起来，在适当的时候调用
	            var _option$props = option.props;
	            var rules = _option$props.rules;
	            var name = _option$props.name;

	            if (rules) {

	                _this2.elements[name] = {
	                    rules: rules,
	                    status: 0
	                };

	                var opt = _react2['default'].cloneElement(option, {
	                    onBlur: _this2.validateHandler.bind(_this2),
	                    onFocus: _this2.validateHandler.bind(_this2),
	                    onClick: _this2.validateHandler.bind(_this2),
	                    onKeyUp: _this2.validateHandler.bind(_this2),
	                    ref: 'ref-' + name
	                });

	                showOrhide = _this2.state[name] && same != name ? 'show' : 'hide';
	                same = name;
	                return { opt: opt };
	            }
	            return option;
	        }, this);
	        return options;
	    };

	    ValidatorPanel.prototype.getElements = function getElements() {
	        return _react2['default'].findDOMNode(this.refs[this.formName]).querySelectorAll('[data-validate]');
	    };

	    ValidatorPanel.prototype.componentDidMount = function componentDidMount() {
	        var elements = this.getElements();var _this = this;var _props = this.props;
	        var trigger = _props.trigger;
	        var initCallback = _props.initCallback;
	        var submitElement = _props.submitElement;

	        var _loop = function (i, len) {
	            trigger.split(' ').forEach(function (event) {

	                elements[i].addEventListener(event, _this.validateHandler.bind(_this), false);
	            });
	        };

	        for (var i = 0, len = elements.length; i < len; i++) {
	            _loop(i, len);
	        }

	        initCallback.call(this, this.submit.bind(this));

	        if (submitElement) {
	            document.querySelector(submitElement).addEventListener('mousedown', this.submit.bind(this), false);
	        }
	        this.elements = elements;
	        this.init = false;
	    };

	    ValidatorPanel.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { ref: this.formName, className: this.getClassName('validate') }),
	            this.props.children,
	            _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getClassName('validate-tips'), '' + (this.init ? "" : this.state.message ? "fadein" : "fadeout")) },
	                _react2['default'].createElement('i', null),
	                this.state.message
	            )
	        );
	    };

	    var _ValidatorPanel = ValidatorPanel;
	    ValidatorPanel = _utilsClassNameMixin2['default'](ValidatorPanel) || ValidatorPanel;
	    return ValidatorPanel;
	})(_react.Component);

	exports['default'] = ValidatorPanel;
	module.exports = exports['default'];

/***/ }

/******/ })
});
;