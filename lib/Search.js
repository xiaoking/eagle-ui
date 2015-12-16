'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

/**
 * 搜索按钮组件
 * 参数： id/callBack/placeholder 均可不传
 * @class Search
 * @module ui
 * @constructor
 * @since 0.1.0
 * @demo search.js{js}
 * @show true
 * @class Select
 * */
/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip

 * */

var Search = (function (_Component) {
    _inherits(Search, _Component);

    _createClass(Search, null, [{
        key: 'propType',
        value: {
            /**
             *
             * @property id
             * @type String
             * @default ''
             * */
            id: _react.PropTypes.string,
            /**
             * 回调方法
             * @property callback
             * @type Function
             * @default null
             * */
            callback: _react.PropTypes.func,
            classPrefix: _react.PropTypes.string,
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            id: '1',
            callback: null,
            placeholder: '请输入',
            classPrefix: 'search', //类名前前缀
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Search(props, context) {
        _classCallCheck(this, _Search);

        _Component.call(this, props, context);
        this.state = {
            value: this.props.value
        };
    }

    /**
     * 渲染元素
     * @method render
     * @return {ReactElement}
     * */

    Search.prototype.render = function render() {
        return _react2['default'].createElement(
            _GridJs2['default'],
            { style: { minWidth: '240px' } },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClassNamesForArguments('wrapper', 'icon')) },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames2['default'](this.getClassNamesForArguments('content')) },
                    _react2['default'].createElement(
                        'div',
                        { style: { width: '100%' } },
                        _react2['default'].createElement(_InputJs2['default'], { ref: this.props.name, id: this.props.id, placeholder: this.props.placeholder,
                            onChange: this.changeValue.bind(this), onKeyPress: this.keyIn.bind(this) })
                    )
                ),
                _react2['default'].createElement(
                    _ButtonJs2['default'],
                    { radius: true, egSize: 'xs', onClick: this.submitSearch.bind(this) },
                    '搜索'
                )
            )
        );
    };

    /**
     * @method change input value
     * @param none
     * @return setState
     * */

    Search.prototype.changeValue = function changeValue(event) {
        this.setState({
            value: event.target.value
        });
    };

    /**
     * @method submit search
     * @param none
     * @return get value calback if exist
     * */

    Search.prototype.submitSearch = function submitSearch() {
        var val = this.state.value;
        this.props.callback && this.props.callback(val);
    };

    Search.prototype.keyIn = function keyIn(event) {
        if (event.charCode == 13) {
            this.submitSearch();
        }
    };

    var _Search = Search;
    Search = _utilsClassNameMixin2['default'](Search) || Search;
    return Search;
})(_react.Component);

exports['default'] = Search;
module.exports = exports['default'];