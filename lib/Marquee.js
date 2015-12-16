/**
 * Created by panqianjin on 15/11/18.
 */
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

var _RowJs = require('./Row.js');

var _RowJs2 = _interopRequireDefault(_RowJs);

var _ColJs = require('./Col.js');

var _ColJs2 = _interopRequireDefault(_ColJs);

var _GridJs = require('./Grid.js');

var _GridJs2 = _interopRequireDefault(_GridJs);

var Marquee = (function (_Component) {
    _inherits(Marquee, _Component);

    _createClass(Marquee, null, [{
        key: 'defaultProps',
        value: {
            isNew: false,
            isChecked: false,
            src: 'http://img1.imgtn.bdimg.com/it/u=1825165654,1935296637&fm=21&gp=0.jpg',
            title: '吃吧小伙伴',
            content: '安化路492号',
            tips: '吃喝玩乐',
            classPrefix: 'marquee',
            componentTag: 'div'
        },
        enumerable: true
    }]);

    function Marquee(props, context) {
        _classCallCheck(this, _Marquee);

        _Component.call(this, props, context);
        this.state = {
            isChecked: this.props.isChecked
        };
    }

    Marquee.prototype.render = function render() {
        return _react2['default'].createElement(
            _GridJs2['default'],
            { className: _classnames2['default'](this.getClassName('container')) },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClassName('new-tip')) },
                _react2['default'].createElement(
                    'span',
                    { className: _classnames2['default'](this.getClassName('new')) },
                    '新'
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClassName('check')) },
                _react2['default'].createElement(_InputJs2['default'], { type: 'checkboxs', checked: true, label: '' })
            ),
            _react2['default'].createElement('img', { src: this.props.src }),
            _react2['default'].createElement(
                _RowJs2['default'],
                { className: _classnames2['default'](this.getClassName('title')) },
                this.props.title
            ),
            _react2['default'].createElement(
                _RowJs2['default'],
                { className: _classnames2['default'](this.getClassName('content')) },
                this.props.content
            ),
            _react2['default'].createElement(
                _RowJs2['default'],
                { className: _classnames2['default'](this.getClassName('tips')) },
                _react2['default'].createElement('span', { className: _classnames2['default'](this.getClassName('bars', false)) }),
                this.props.tips
            )
        );
    };

    var _Marquee = Marquee;
    Marquee = _utilsClassNameMixin2['default'](Marquee) || Marquee;
    return Marquee;
})(_react.Component);

exports['default'] = Marquee;
module.exports = exports['default'];