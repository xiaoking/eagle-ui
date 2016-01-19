import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from '../utils/Component';
import Button from '../Button';

export default class Confirm extends Component{

    static defaultProps = {
        isClose: false,//是否有x图标
        title: '确认提示',//标题
        classPrefix: 'dialog',
        componentTag: 'div',
        contentAlign:'center'
    };

    constructor(props, context) {
        super(props, context);
    }

    cancelHander(){
        this.execMethod('cancel');
    }

    renderDialog(className){
        const {message,title,successCallback,cancelCallback,isHeaderBackground,isHeader,contentAlign,buttonAlign} = this.props;
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
                            'hide':!isHeader
                        }
                    )
                }>{title}</div>
                <div className="content" style={{
                    textAlign:contentAlign
                }}>{message}</div>
                <div className="footer" style={{
                    textAlign:buttonAlign
                }}>
                    <Button egSize="xs" onClick={successCallback}>确定</Button>
                    <Button egSize="xs" egStyle="white" onClick={::this.cancelHander}>取消</Button>
                </div>
            </this.componentTag>
        );
    }

    render(){
        return this.renderDialog('confirm');
    }
}