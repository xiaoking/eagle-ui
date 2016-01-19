import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Input from '.././Input.js';

import Suggestion from './Suggestion';

export default class Search extends Suggestion {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @property callback
         * @type func
         * @default null
         * */
        getValueCallback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'search',
        componentTag: 'div',
        defaultValue:''/*,
        icon:'arrow_drop_down',
        iconStyle:{
            width:'30px',
            height:'30px',
            top: '15px',
            right: '0'
        }*/
    };

    constructor(props, context,defaultState={}) {
        super(props, context);

        this.inputId = this.uniqueId();

        super.setDefaultState(defaultState);
    }
    handler(eventType,e){

        this.keyHandler(e);
        this.setState({
            value:e.target.value
        });
        if(this.props[eventType] ){
            this.props[eventType](e);
        }
    }

    renderInput(){
        let {getValueCallback,children,iconStyle,value,classPrefix,componentTag,defaultValue,...other} = this.props;

        return (
            <Input
                ref={this.inputId}
                {...other}
                value={this.getTextValue()}
                iconStyle={iconStyle}
                onKeyUp={this.handler.bind(this,'onKeyUp')}
                onChange={this.handler.bind(this,'onChange')}
                onKeyDown={this.handler.bind(this,'onKeyDown')}
                onFocus={::this.focusHandler}
                onBlur={::this.inputBlurHandler}
                />
        );
    }

    inputBlurHandler(){

        this.removeActiveValue();
        this.hide();
        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    }

    focusHandler(e){
        this.show();
        if(this.props.onFocus){
            this.props.onFocus(e);
        }else{
            let val = this.trim(e.target.value);
            this.setDefaultData();
        }

    }

    checkedCallback(sug,index){
        sug = ReactDom.findDOMNode(sug);

        let subItem = sug.firstChild,
            offestHeight = 0;
        if(subItem){
            offestHeight = subItem.offsetHeight;
            sug.scrollTop = index*offestHeight;
        }
    }

    loadedCallback(){
        //获取高度，然后给ul设置高度
        //let sug = ReactDom.findDOMNode(this.refs.suggestion );
        //this.refs.suggestion
        let item = this.getValue();
        item && (this.execMethod('getValue',item.value,item.key,'init') );
    }

    getValueCallback(value,key,type,_this){

        type!='init' &&(setTimeout(()=>{
            ReactDom.findDOMNode(_this.refs[_this.inputId]).getElementsByTagName('input')[0].blur()
        }) );
        _this.props.getValueCallback &&(_this.props.getValueCallback(value,key,type) );
    }

    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * */
    renderSearch(){
        return (
            <this.componentTag className={this.getProperty() } value={this.state.value}>
                {this.renderInput() }
                {this.renderSuggestion()}
            </this.componentTag>
        );
    }
    render() {
        return this.renderSearch();
    }
}