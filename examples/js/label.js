(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("Eagleui"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "Eagleui"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("Eagleui")) : factory(root["React"], root["Eagleui"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_42__) {
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

	var _lib_includeLess = __webpack_require__(22);

	var _lib_includeLess2 = _interopRequireDefault(_lib_includeLess);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _eagleUi = __webpack_require__(42);

	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props, context) {
	        _classCallCheck(this, Demo);

	        _Component.call(this, props, context);
	    }

	    Demo.prototype.show = function show(value, text, target, active) {
	        console.dir(value);
	    };

	    Demo.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _eagleUi.Panel,
	            { style: {
	                    margin: '20px'
	                } },
	            _react2['default'].createElement(
	                PanelContent,
	                null,
	                _react2['default'].createElement(
	                    _eagleUi.Grid,
	                    null,
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                'h3',
	                                null,
	                                '标签组'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                _eagleUi.LabelGroup,
	                                { title: '行政区', defaultChecked: '全部', clickCallback: this.show, end: true },
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '0' },
	                                    '全部'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '1' },
	                                    '卢湾区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '10' },
	                                    '徐汇区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '静安区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '长宁区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '闵行区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '浦东新区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '黄浦区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '普陀区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '闸北区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '虹口区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '杨浦区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '宝山区'
	                                )
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                _eagleUi.LabelGroup,
	                                { defaultChecked: '卢湾区', clickCallback: this.show, end: true },
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '0' },
	                                    '全部'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '1' },
	                                    '卢湾区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '10' },
	                                    '徐汇区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '静安区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '长宁区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '闵行区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '浦东新区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '黄浦区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '普陀区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '闸北区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '虹口区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '杨浦区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '宝山区'
	                                )
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                'h3',
	                                null,
	                                '普通标签组'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                _eagleUi.LabelGroup,
	                                { simple: true, defaultChecked: '全部', clickCallback: this.show, end: true },
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '0' },
	                                    '全部'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '1' },
	                                    '卢湾区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { value: '10' },
	                                    '徐汇区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '静安区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '长宁区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    null,
	                                    '闵行区'
	                                ),
	                                _react2['default'].createElement(
	                                    _eagleUi.Label,
	                                    { url: 'http://baidu.com' },
	                                    '点击跳转至百度'
	                                )
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            null,
	                            _react2['default'].createElement(
	                                'h3',
	                                null,
	                                '单个标签'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        _eagleUi.Row,
	                        null,
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                { active: true },
	                                '选中'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                { success: true },
	                                '成功'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                { error: true },
	                                '错误'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                { disabled: true },
	                                '禁用'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                { error: true, radius: true },
	                                '圆角'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            _eagleUi.Col,
	                            { sm: 2 },
	                            _react2['default'].createElement(
	                                _eagleUi.Label,
	                                null,
	                                '默认'
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

/***/ 22:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }

/******/ })
});
;