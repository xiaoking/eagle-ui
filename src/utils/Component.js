import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';
import PropertyMixin from './PropertyMixin';
import ClassNameMixin from './ClassNameMixin';
import MethodMixin from './MethodMixin';

import extend from 'extend';
import 'babel-polyfill';

@PropertyMixin
@ClassNameMixin
@MethodMixin
export default class BaseComponent extends Component{

    constructor(props, context,defaultState) {
        super(props, context);

        if(defaultState){
            this.setDefaultState(defaultState);
        }
        this.otherProps = {};
        this._properties = [];
        this._styles=[];
        this.initCallback(this);
        //验证
        this.replaceProperties(this.props);
        //注册
        this.registerMethod(this.otherProps);

        //ref唯一标识生成
    }
    setDefaultState(obj){

        this.state = extend({},{
            _isShow:false,
            _checked:false,
            _active:false
        },obj||{});

    }

    uniqueId(){
        return (this.classPrefix||'unique')+'_'+(new Date().getTime()+(Math.random()*1e10).toFixed(0) );
    }

    initCallback(){
        this.props.initCallback && this.props.initCallback(this);
    }

    componentWillMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
        this.replaceProperties(nextProps );
        return true;
    }

    //renderDom(dom){
    //    this.setProperty(this.props);
    //    return dom;
    //}

    componentDidMount(){
        this.loadedCallback && this.loadedCallback(this);
    }
    setMethod(methodName,method ){

        if(methodName.match('Callback') == null){
            throw new Error(`The callback method name format is wrong, should be ${methodName}Callback`);
        }
        if(!this[methodName]){
            this[methodName] =(function(method){
                let m = method;
                return function(){
                    return m.apply(m,Array.prototype.slice.call(arguments, 0) );
                };
            })(method);
        }
    }

    async execMethod(method){
        let data=null;
        method = method.indexOf('Callback')!=-1?method:method+'Callback';

        if(this[method]){
            data=await this[method].apply(this[method],Array.prototype.slice.call(arguments, 1).concat(this) );
        }
        return data;
    }

    //注册回调
    registerMethod(methods){
        //注册回调
        //otherProps
        let method = null,
            methodName='',
            other = {};
        for(let item in methods){
            method = this.methods[item];
            if(method){
                this.setMethod(item,methods[item] );
            }
        }
        //this.otherProps = other;
    }

    setProperties(props){
        for(let item in props){
            this.setProperty(item,props[item]);
        }
    }

    setProperty(prop,val){
        if(val!== undefined){
            this.properties[prop] = val;
            if(this.props[prop]!==undefined){
                this.updateProperty({key:prop,value:val},this._properties,this._styles,this.otherProps);
            }
        }
    }
    updateProperty(props,propList,styleList,otherProps){
        let propKey=props.key,
            propValue=props.value,
            propConfig = this.properties[propKey];

        const type = 'property';
        if(propConfig ){

            switch (typeof(propConfig)){
                case 'boolean':
                    if(propValue){
                        propList.push(propKey);
                    }
                    break;
                case 'function':
                    let param = propConfig.call(this,propValue);
                    if(typeof(param) == 'string' ){
                        propList.push(param);
                    }else if(param.type && param.type == type){
                        this[propKey] = param.value;
                    }else{
                        //{
                        //    border:val
                        //}
                        styleList.push(param);
                    }
                    break;
                default :
                    propList.push(propConfig);
                    break;
            }

        }else{
            otherProps[propKey] = propValue;
        }
    }
    replaceProperties(props){
        // 整体替换
        let propList = [],
            styleList = [],
            otherProps={};
        props=props?props:this.props;
        for(let key in props){
            this.updateProperty({key,value:props[key]},propList,styleList,otherProps);
        }
        this._properties = propList;
        this._styles = styleList;
        this.otherProps=otherProps;
    }

    getProperty(){
        let p = this.classPrefix ? this.classPrefix+' ':'';
        p +=this._properties.join(' ');
        return this.getClassName(p,false)+' '+this.getClassName(p);//eg-padding eg-btn-padding
    }

    getStyles(style={}){

        let obj = {},
            styles = this._styles;

        for(let i=0,len=styles.length;i<len;i++){
            obj = extend({},obj,styles[i]);
        }

        return extend({},obj,style);
    }

    show(){
        this.setState({
            _isShow:true
        });
    }

    hide(){
        this.setState({
            _isShow:false
        });
    }

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g,"");
    }

    getDisplay(){
        return this.state._isShow;
    }

    render(){
        return (
            <h1>请重写父类render()方法</h1>
        );
    }
}