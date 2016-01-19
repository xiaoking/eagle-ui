import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from '../utils/Component';
import Button from '../Button';
import Icon from '../utils/Icon';


let masks = {};

export default class Mask extends Component{

    static defaultProps = {
        isClose: true,//是否有x图标
        title: '',//标题
        classPrefix: 'dialog',
        componentTag: 'div',
        contentAlign:'left',
        outside:false,
        buttons:[
            /*{
                type: 'success',
                name: '确认',
                callback:()=>{}
            },
            {
                type:'cancel',
                name:'取消',
                callback:()=>{}
            }*/
        ]
    };

    constructor(props, context) {
        super(props, context);

    }

    static push(key,modal){
        masks[key] = modal;
    }

    renderFooter(){
        let footer = [];

        let {buttons,buttonAlign} = this.props;

        if(buttons && buttons.length>0){
            let btns = [];

            for(let i =0 ,item,len = buttons.length;i<len;i++){
                item = buttons[i];
                btns.push(
                    <Button key={item.name} egSize="xs"
                            egStyle={item.egStyle?item.egStyle:'default'}
                            onClick={item.type == 'success' || item.type=='cancel'?this.props[item.type+'Callback']:item.callback}>{item.name}</Button>
                );
            }
            footer.push(
                <div key="mask-footer" className="footer" style={{
                    textAlign:buttonAlign
                }}>
                    {btns}
                </div>
            );
        }

        return footer;
    }

    renderClose(){
        const {cancelCallback,isClose} = this.props;
        if(isClose){
            return (
                <Icon onClick={cancelCallback.bind(cancelCallback,'close')} name="close" style={{
                    fill:'#999',
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    cursor: 'pointer'
                }} />
            );
        }
        return null;
    }

    renderDialog(className){

        const {
            message,
            title,
            successCallback,
            cancelCallback,
            isHeaderBackground,
            isHeader,
            contentAlign,
            buttonAlign,
            id,
            outside
            } = this.props;

        this.setProperty('outside',outside);
        return (
            <this.componentTag className={classnames(
                this.getProperty(),
                this.getClassName(className)
            )}>

                <div className={
                    classnames(
                        'header',
                        'h4',
                        {
                            'header-bg':isHeaderBackground,
                            'hide':!isHeader||title==''
                        }
                    )
                } style={{
                        textAlign:'left'
                    }}>{title}</div>
                <div className="content" style={{
                    textAlign:contentAlign
                }}>{masks[id]}</div>
                {this.renderFooter() }
                {this.renderClose()}
            </this.componentTag>
        );
    }

    render(){
        return this.renderDialog('masks');
    }
}