/**
 * Created by slashhuang on 15/12/28.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

/**
 * 照片浏览组件
 * @class Slider
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Slider.js {js}
 * @show true
 * */

var ImgSlider = (function (_Component) {
    _inherits(ImgSlider, _Component);

    function ImgSlider(props, context) {
        _classCallCheck(this, _ImgSlider);

        _Component.call(this, props, context);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.state = {
            imgList: props.imgList,
            thumbnailKey: props.thumbnailKey || props.urlKey || 'url',
            pageNum: props.pageNum,
            show: props.show,
            showThumbnail: props.showThumbnail,
            targetIndex: 0,
            thumbNailIndex: 0
        };
    }

    ImgSlider.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({
            show: props.show,
            showThumbnail: props.showThumbnail,
            thumbnailKey: props.thumbnailKey || props.urlKey,
            targetIndex: 0,
            thumbNailIndex: 0,
            imgList: props.imgList || this.state.imgList
        });
        var _this = this;
    };

    ImgSlider.prototype.renderDisplay = function renderDisplay(e) {
        //点击下方缩略图的情况
        var index = /img||li/i.test(e.target['nodeName']) ? e.target.getAttribute('data-index') : eval('return');
        this.handleIndex.call(this, index * 1);
    };

    ImgSlider.prototype.handleIndex = function handleIndex(index) {
        var length = this.state.imgList.length;
        var pageNum = this.props.pageNum;
        if (index >= 0) {
            //1图片总长度小于缩略图预制的长度 2未到最后的情况，展示逻辑放在一起
            if (length <= pageNum) {
                this.setState({
                    targetIndex: index,
                    thumbNailIndex: 0
                });
            } else if (index <= length - pageNum) {
                this.setState({
                    targetIndex: index == length ? length - 1 : index,
                    thumbNailIndex: index
                });
            } else if (index < length) {
                //缩略图已到尾部
                this.setState({
                    targetIndex: index,
                    thumbNailIndex: length - pageNum
                });
            } else {
                //回到最后的状态
                this.setState({
                    targetIndex: length - 1,
                    thumbNailIndex: length - pageNum
                });
            }
        } else {
            //回到最初状态
            this.setState({
                targetIndex: 0,
                thumbNailIndex: 0
            });
        }
    };

    ImgSlider.prototype.addIndex = function addIndex() {
        var num = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

        var length = this.state.imgList.length;
        var index = this.state.targetIndex + num - length >= 0 ? length - 1 : this.state.targetIndex + num;
        this.handleIndex.call(this, index);
    };

    ImgSlider.prototype.lowerIndex = function lowerIndex() {
        var num = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

        var index = this.state.targetIndex - num < 0 ? 0 : this.state.targetIndex - num;
        this.handleIndex.call(this, index);
    };

    ImgSlider.prototype.fadeOut = function fadeOut(e) {
        if (e.target.className.match('slider-mask') || e.target.nodeName.toLowerCase() == 'em') {
            this.setState({
                show: false
            });
        }
    };

    ImgSlider.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state;
        var imgList = _state.imgList;
        var thumbnailKey = _state.thumbnailKey;
        var targetIndex = _state.targetIndex;
        var thumbNailIndex = _state.thumbNailIndex;
        var show = _state.show;
        var showThumbnail = _state.showThumbnail;
        var _props = this.props;
        var profileKey = _props.profileKey;
        var urlKey = _props.urlKey;
        var titleKey = _props.titleKey;
        var pageNum = _props.pageNum;

        var length = imgList.length;
        var containerStyle = { display: show ? 'block' : 'none' };
        //设置行内样式
        var customizeStyle = this.props.style || {};
        //阻止背景滚动
        //show?document.body.style.cssText='position:fixed':document.body.style.cssText='';
        var thumbnailContainerStyle = { display: showThumbnail ? 'block' : 'none' };
        return _react2['default'].createElement(
            'div',
            { onClick: this.fadeOut.bind(this) },
            _react2['default'].createElement(
                'div',
                { ref: 'slider-container', className: _classnames2['default']('eg-slider-container', 'fadein', this.props.className), style: _extends({}, customizeStyle, containerStyle) },
                _react2['default'].createElement('em', { onClick: this.fadeOut.bind(this) }),
                _react2['default'].createElement(
                    'div',
                    { className: 'eg-slider-img-container' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-field-common eg-slider-field-left', onClick: function () {
                                return _this2.lowerIndex.call(_this2);
                            } },
                        _react2['default'].createElement('b', { className: 'eg-slider-arrow-left' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-window', style: { width: '380px' } },
                        _react2['default'].createElement(
                            'ul',
                            { style: { width: length * 380 + 'px', left: -targetIndex * 380 + 'px' } },
                            imgList.map(function (img, index) {
                                return _react2['default'].createElement(
                                    'li',
                                    { style: { width: '380px' }, key: 'img-' + index },
                                    _react2['default'].createElement('img', { src: img[[urlKey]] })
                                );
                            })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-field-common eg-slider-field-right', onClick: function () {
                                return _this2.addIndex.call(_this2);
                            } },
                        _react2['default'].createElement('b', { className: 'eg-slider-arrow-right' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-img-hint' },
                        _react2['default'].createElement(
                            'i',
                            null,
                            imgList[targetIndex][titleKey]
                        ),
                        imgList[targetIndex][profileKey],
                        _react2['default'].createElement(
                            'i',
                            null,
                            targetIndex + 1,
                            '/',
                            imgList.length
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'eg-slider-img-container-thumbnail', style: _extends({}, thumbnailContainerStyle) },
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-field-common eg-slider-field-left', onClick: function () {
                                _this2.lowerIndex.call(_this2, pageNum);
                            } },
                        _react2['default'].createElement('b', { className: 'eg-slider-arrow-left' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-window', style: { width: '380px' } },
                        _react2['default'].createElement(
                            'ul',
                            { onClick: this.renderDisplay,
                                style: { width: 100 * length / pageNum + '%',
                                    left: -thumbNailIndex * 100 / pageNum + '%'
                                } },
                            imgList.map(function (img, index) {
                                var inlineStyle = null;
                                if (index == targetIndex) {
                                    inlineStyle = {
                                        borderColor: '#158acf'
                                    };
                                }
                                return _react2['default'].createElement(
                                    'li',
                                    { 'data-index': index, style: _extends({ width: 100 / length - 1.1 + '%' }, inlineStyle), key: 'thumb-' + index },
                                    _react2['default'].createElement('img', { src: img[thumbnailKey], 'data-index': index })
                                );
                            })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'eg-slider-field-common eg-slider-field-right', onClick: function () {
                                _this2.addIndex.call(_this2, pageNum);
                            } },
                        _react2['default'].createElement('b', { className: 'eg-slider-arrow-right' })
                    )
                )
            )
        );
    };

    _createClass(ImgSlider, null, [{
        key: 'defaultProps',
        value: {
            pageNum: 5,
            show: false,
            showThumbnail: true,
            classPrefix: 'slider',
            profileKey: 'profile',
            urlKey: 'url',
            titleKey: 'description'
        },
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            /**
             * 图片信息(对应图片信息数组对象中图片描述信息的key)
             * @property profileKey
             * @type string
             * @default
             * */
            profileKey: _react.PropTypes.string,
            /**
             * 图片信息(对应图片信息数组对象中图片uri信息的key)
             * @property urlKey
             * @type string
             * @default
             * */
            urlKey: _react.PropTypes.string,
            /**
             * 图片信息(对应图片信息数组对象中图片大标题信息的key)
             * @property titleKey
             * @type string
             * @default
             * */
            titleKey: _react.PropTypes.string,
            /**
             * 缩略图的key
             * @property thumbnailKey
             * @type array
             * @default 默认会拿urlKey
             * */
            thumbnailKey: _react.PropTypes.string,
            /**
             * 图片数组
             * @property imgList
             * @type Array
             * @default 图片数组[{key:value}]
             * */
            imgList: _react.PropTypes.array,
            /**
             * 图片栏展示数目
             * @property pageNum
             * @type number
             * @default 5
             * */
            pageNum: _react.PropTypes.number,
            /**
             * 是否显示图片展示slider
             * @property show
             * @type boolean
             * @default false
             * */
            show: _react.PropTypes.bool,
            /**
             * 是否显示slider中的图片缩略图部分
             * @property showThumbnail
             * @type boolean
             * @default true
             * */
            showThumbnail: _react.PropTypes.bool,
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }]);

    var _ImgSlider = ImgSlider;
    ImgSlider = _utilsClassNameMixin2['default'](ImgSlider) || ImgSlider;
    return ImgSlider;
})(_react.Component);

exports['default'] = ImgSlider;
module.exports = exports['default'];