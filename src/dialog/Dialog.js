import DialogFactory from './DialogFactory';

import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './../utils/Component';
import BaseDialog from './BaseDialog';

import extend from 'extend';

export default class Dialog extends Component{

    constructor(props, context) {
        super(props, context);

        this.state={
            update:this.uniqueId()
        };
        this.update(props);
    }

    loadedCallback(){

    }
    update(props=this.props){
        new DialogFactory(props.key||props.id || props.name,props.type || 'mask',props.children,props);
    }

    componentWillReceiveProps(props){
        this.update(props);
    }

    shouldComponentUpdate(props,state){
        this.update(props);
        return false;
    }

    static alert(message,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(BaseDialog.ALERT,extend({},{
                successCallback:()=>{
                    resolve();
                    new DialogFactory().hide();

                },
                message:message
            },opts) );
        }).catch((ex)=>{
                console.dir(ex);
            });
    }

    static confirm(message,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(BaseDialog.CONFRIM,extend({},{
                successCallback:()=>{
                    resolve();
                    new DialogFactory().hide();

                },
                cancelCallback:()=>{
                    reject();
                    new DialogFactory().hide();

                },
                message:message
            },opts));
        }).catch((ex)=>{
                console.dir(ex);
            });
    }

    static mask(dialogId,opts={}){
        return new Promise((resolve, reject)=>{
            new DialogFactory().show(dialogId,extend({},{
                successCallback:resolve,
                id:dialogId,
                contentAlign:'left',
                cancelCallback:(type)=>{
                    reject(type);
                    new DialogFactory().hide();

                },
                closeCallback:(type)=>{
                    reject(type);
                    new DialogFactory().hide();
                }
            },opts) );
        }).catch((ex)=>{
                console.dir(ex);
            });
    }

    static close(){
        new DialogFactory().hide();
    }

    render(){
        return <div style={{display:'none'}}>{this.state.update}</div>;
    }

}