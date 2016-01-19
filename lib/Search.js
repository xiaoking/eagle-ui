'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Suggestion2 = require('./Suggestion');

var _Suggestion3 = _interopRequireDefault(_Suggestion2);

/**
 * 搜索按钮组件
 * 参数： id/callBack/placeholder 均可不传
 * @class Search
 * @module ui
 * @constructor
 * @since 0.1.0
 * @demo suggestion.js{js}
 * @show true
 * @class Select
 * */
/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip

 * */

var Search = (function (_Suggestion) {
  _inherits(Search, _Suggestion);

  function Search(props, context) {
    _classCallCheck(this, Search);

    _Suggestion.call(this, props, context);
  }

  return Search;
})(_Suggestion3['default']);

exports['default'] = Search;
module.exports = exports['default'];