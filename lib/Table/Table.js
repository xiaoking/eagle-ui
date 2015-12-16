'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsClassNameMixinJs = require('../utils/ClassNameMixin.js');

var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

var _ThJs = require('./Th.js');

var _ThJs2 = _interopRequireDefault(_ThJs);

var _TdJs = require('./Td.js');

var _TdJs2 = _interopRequireDefault(_TdJs);

var _TrJs = require('./Tr.js');

var _TrJs2 = _interopRequireDefault(_TrJs);

/**
 * 表格组件
 * @class Table
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo table.js {js}
 * @show true
 * @author bo.an@dianping.com
 * */

var Table = (function (_Component) {
    _inherits(Table, _Component);

    _createClass(Table, null, [{
        key: 'propTypes',
        value: {
            /**
             * 用来渲染表格的数组，可选参数，如果传入data，会更具table下的column标签绑定的属性进行渲染
             * @property data
             * @type Array
             * */
            data: _react.PropTypes.array

        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {},
        enumerable: true
    }]);

    function Table(props, context) {
        _classCallCheck(this, _Table);

        _Component.call(this, props, context);
        var tableData = [];
        Object.assign(tableData, props.data);

        this.state = {
            tableData: tableData,
            sortField: {}
        };
    }

    Table.prototype.sort = function sort(field, method) {
        if (method === 'asc') {
            this.state.tableData.sort(function (pre, cur) {
                if (pre[field] > cur[field]) {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            this.state.tableData.sort(function (pre, cur) {
                if (pre[field] < cur[field]) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        var sortFiled = this.state.sortField;
        for (var key in sortFiled) {
            sortFiled[key] = null;
        };
        sortFiled[field] = method;
        this.setState({
            tableData: this.state.tableData,
            sortFiled: sortFiled
        });
    };

    /**
     * @method render
     * @return {ReactElement}
     * */

    Table.prototype.render = function render() {
        var _this = this;

        if (!this.props.data) {
            return _react2['default'].createElement(
                'table',
                { className: _classnames2['default'](this.getClassName('table')) },
                this.props.children
            );
        };
        var self = this;
        var thList = _react2['default'].Children.map(self.props.children, function (Column, thIndex) {
            return _react2['default'].createElement(
                _ThJs2['default'],
                _extends({}, Column.props, {
                    key: 'th-' + thIndex,
                    sort: _this.state.sortField[Column.props.field],
                    clickCallback: _this.sort.bind(_this)
                }),
                Column.props.header
            );
        }, self);
        var trList = this.state.tableData.map(function (rowData, trIndex) {
            return _react2['default'].createElement(
                _TrJs2['default'],
                { key: 'tr-' + trIndex },
                _react2['default'].Children.map(self.props.children, function (Column, tdIndex) {
                    return _react2['default'].createElement(
                        _TdJs2['default'],
                        { key: 'td-' + trIndex + '-' + tdIndex },
                        self.state.tableData[trIndex][Column.props.field]
                    );
                }, self)
            );
        });
        return _react2['default'].createElement(
            'table',
            { className: _classnames2['default'](this.getClassName('table')) },
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    _TrJs2['default'],
                    null,
                    thList
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                trList
            )
        );
    };

    var _Table = Table;
    Table = _utilsClassNameMixinJs2['default'](Table) || Table;
    return Table;
})(_react.Component);

exports['default'] = Table;
module.exports = exports['default'];