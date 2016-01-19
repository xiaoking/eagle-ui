/**
 * Created by slashhuang on 15/12/28.
 */


import React, { Component ,PropTypes,findDOMNode} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classNames from 'classnames';

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
@ClassNameMixin
export default class ImgSlider extends Component{
    constructor(props,context) {
        super(props, context);
        this.renderDisplay=this.renderDisplay.bind(this);
        this.state = {
            imgList: props.imgList,
            thumbnailKey: props.thumbnailKey||props.urlKey||'url',
            pageNum:props.pageNum,
            show:props.show,
            showThumbnail:props.showThumbnail,
            targetIndex:0,
            thumbNailIndex:0
        };
    }
    static defaultProps={
        pageNum:5,
        show:false,
        showThumbnail:true,
        classPrefix:'slider',
        profileKey:'profile',
        urlKey:'url',
        titleKey:'description'
    };
    static propTypes = {
        /**
         * 图片信息(对应图片信息数组对象中图片描述信息的key)
         * @property profileKey
         * @type string
         * @default
         * */
        profileKey:PropTypes.string,
        /**
         * 图片信息(对应图片信息数组对象中图片uri信息的key)
         * @property urlKey
         * @type string
         * @default
         * */
        urlKey:PropTypes.string,
        /**
         * 图片信息(对应图片信息数组对象中图片大标题信息的key)
         * @property titleKey
         * @type string
         * @default
         * */
        titleKey:PropTypes.string,
        /**
         * 缩略图的key
         * @property thumbnailKey
         * @type array
         * @default 默认会拿urlKey
         * */
        thumbnailKey:PropTypes.string,
        /**
         * 图片数组
         * @property imgList
         * @type Array
         * @default 图片数组[{key:value}]
         * */
        imgList:PropTypes.array,
        /**
         * 图片栏展示数目
         * @property pageNum
         * @type number
         * @default 5
         * */
        pageNum:PropTypes.number,
        /**
         * 是否显示图片展示slider
         * @property show
         * @type boolean
         * @default false
         * */
        show:PropTypes.bool,
        /**
         * 是否显示slider中的图片缩略图部分
         * @property showThumbnail
         * @type boolean
         * @default true
         * */
        showThumbnail:PropTypes.bool,
        classPrefix:PropTypes.string
    };
    componentWillReceiveProps(props){
      this.setState({
          show:props.show,
          showThumbnail:props.showThumbnail,
          thumbnailKey: props.thumbnailKey||props.urlKey,
          targetIndex:0,
          thumbNailIndex:0,
          imgList:props.imgList||this.state.imgList
      });
      let _this = this;
    }
    renderDisplay(e){
        //点击下方缩略图的情况
        let index = /img||li/i.test(e.target['nodeName'])?e.target.getAttribute('data-index'):eval('return');
        this.handleIndex.call(this,index*1);
    };
    handleIndex(index){
        let length = this.state.imgList.length;
        let pageNum = this.props.pageNum;
        if(index>=0){
            //1图片总长度小于缩略图预制的长度 2未到最后的情况，展示逻辑放在一起
            if(length<=pageNum){
                this.setState({
                    targetIndex:index,
                    thumbNailIndex: 0
                })
            }
            else if(index<=length-pageNum) {
                this.setState({
                    targetIndex: index==length?length-1:index,
                    thumbNailIndex: index
                })
            }else if(index<length){
                //缩略图已到尾部
                this.setState({
                    targetIndex: index,
                    thumbNailIndex:length-pageNum
                })
            }else{
                //回到最后的状态
                this.setState({
                    targetIndex: length-1,
                    thumbNailIndex:length-pageNum
                })
            }
        }else{
            //回到最初状态
            this.setState({
                targetIndex: 0,
                thumbNailIndex: 0
            })
        }
    }
    addIndex(num=1){
        let length = this.state.imgList.length;
        let index = this.state.targetIndex + num-length>=0?length-1:this.state.targetIndex + num;
        this.handleIndex.call(this,index);
    };
    lowerIndex(num=1){
        let index = this.state.targetIndex - num<0?0:this.state.targetIndex - num;
        this.handleIndex.call(this,index);
    }
    fadeOut(e){
        if(e.target.className.match('slider-mask')||e.target.nodeName.toLowerCase()=='em'){
            this.setState({
                show:false
            });
        }
    }
    render(){
        let {imgList,thumbnailKey,targetIndex,thumbNailIndex,show,showThumbnail} = this.state;
        let {profileKey,urlKey,titleKey,pageNum}=this.props;
        let length=imgList.length;
        let containerStyle={ display:show?'block':'none'};
        //设置行内样式
        let customizeStyle=this.props.style||{};
        //阻止背景滚动
        //show?document.body.style.cssText='position:fixed':document.body.style.cssText='';
        let thumbnailContainerStyle= { display:showThumbnail?'block':'none'};
        return (
            <div onClick={this.fadeOut.bind(this)} >
                <div ref='slider-container' className={ classNames('eg-slider-container', 'fadein',this.props.className)
                } style={{...customizeStyle,...containerStyle}} >
                    <em onClick={this.fadeOut.bind(this)}></em>
                    <div className='eg-slider-img-container'>
                        <div className={'eg-slider-field-common eg-slider-field-left'}  onClick={()=>this.lowerIndex.call(this)}>
                            <b className='eg-slider-arrow-left'></b>
                        </div>
                        <div className='eg-slider-window'  style={{width:'380px'}}>
                            <ul style={{width:length*380+'px',left:-targetIndex*380+'px'}}>
                                {imgList.map((img,index)=>{
                                    return (
                                        <li style={{width:'380px'}}  key={'img-'+index}>
                                            <img src={img[[urlKey]]} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={'eg-slider-field-common eg-slider-field-right'}  onClick={()=>this.addIndex.call(this)}>
                            <b className='eg-slider-arrow-right'></b>
                        </div>
                        <div className='eg-slider-img-hint'>
                            <i>{imgList[targetIndex][titleKey]}</i>
                            {imgList[targetIndex][profileKey]}
                            <i>{targetIndex+1}/{imgList.length}</i>
                        </div>
                    </div>
                    <div className='eg-slider-img-container-thumbnail' style={{...thumbnailContainerStyle}}>
                        <div className={'eg-slider-field-common eg-slider-field-left'} onClick={()=>{this.lowerIndex.call(this,pageNum)}}>
                            <b className='eg-slider-arrow-left' ></b>
                        </div>
                        <div className='eg-slider-window'  style={{width:'380px'}}>
                            <ul onClick={this.renderDisplay}
                                style={{width:100*length/pageNum+'%',
                                        left:-(thumbNailIndex)*100/pageNum+'%'
                                }}>
                                {imgList.map((img,index)=>{
                                    let inlineStyle = null;
                                    if(index == targetIndex){
                                        inlineStyle = {
                                            borderColor:'#158acf'
                                        }
                                    }
                                    return (
                                        <li data-index={index} style={{width:100/length-1.1+'%',...inlineStyle}} key={'thumb-'+index}>
                                            <img src={img[thumbnailKey]} data-index={index} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={'eg-slider-field-common eg-slider-field-right'} onClick={()=>{this.addIndex.call(this,pageNum)}}>
                            <b className='eg-slider-arrow-right' ></b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}