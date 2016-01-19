'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dialogDialog = require('./dialog/Dialog');

var _dialogDialog2 = _interopRequireDefault(_dialogDialog);

/**
 * 弹出层组件
 * @class Dialog
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo dialog.js{js}
 * @show true
 * */

/**
 * 点击确认按钮后会执行此回调，默认调用Dialog.confirm会返回promise
 * @property successCallback
 * @type Function
 * @default
 * */

/**
 * 点击取消按钮或关闭后会执行此回调，默认调用Dialog.confirm会返回promise
 * @property cancelCallback
 * @type Function
 * @default
 * */

/**
 * 是否显示标题栏背景色
 * @property isHeaderBackground
 * @type Boolean
 * @default true
 * */

/**
 * 底部按钮对齐方式 center、right or left
 * @property buttonAlign
 * @type String
 * @default center
 * */

/**
 * 是否显示标题栏
 * @property isHeader
 * @type Boolean
 * @default true
 * */

/**
 * 内容区域对齐方式
 * @property contentAlign
 * @type String
 * @default center
 * */

/**
 * 是否显示遮罩层
 * @property isMask
 * @type Boolean
 * @default true
 * */

/**
 * 内容不在content之内 mask属性
 * @property outside
 * @type Boolean
 * @default false
 * */

/**
 * 是否显示关闭 mask常用属性
 * @property isClose
 * @type Boolean
 * @default false
 * */

/**
 * 标题
 * @property title
 * @type String
 * @default empty
 * */

/**
 * 底部按钮组
 * 例如：
         [
             {
                 type: 'success',
                 name: '确认',
                 callback:()=>{}
             },
             {
                 type:'cancel',
                 egStyle:'white',
                 name:'取消',
                 callback:()=>{}
             },
             {
                 egStyle:'warning',
                 name:'自定义按钮',
                 callback:()=>{alert('自定义按钮');}
             }
         ]
 * @property buttons
 * @type Array
 * @default empty
 * */

exports['default'] = _dialogDialog2['default'];
module.exports = exports['default'];