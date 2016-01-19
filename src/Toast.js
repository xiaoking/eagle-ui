/**
 * Created by panqianjin on 15/10/30.
 */
import React,{PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
import Dialog from './Dialog';

import Component from './utils/Component';
/**
 * 提示组件
 * 类型：分为success,error,loading 三种。默认success
 * overalay是否显示遮罩，默认false不显示
 * @class Toast
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo toast.js{js}
 * @show true
 * */
export default
class Toast extends Component {
    static propType = {
        /**
         * toast类型：分为success,error,loading 三种。默认success
         * @property type
         * @type String
         * @default success
         * */
        type: PropTypes.string,
        /**
         * 文字信息
         * @property message
         * @type String
         * @default 保存成功
         * */
        message: PropTypes.string,
        /**
         * tips n秒后消失 默认2秒
         * @property seconds
         * @type Integer
         * @default 2
         * */
        seconds: PropTypes.number,
        /**
         * 类名样式前缀
         * @property classPrefix
         * @type sting
         * @default crumb
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default div
         * */
        componentTag: PropTypes.string

    };
    static defaultProps = {
        type:'success',
        message: '保存成功',
        seconds: 2,
        classPrefix: 'dialog',
        componentTag: 'div'
    };

    constructor(props, context) {
        super(props, context);
    }
    /**
     * 改变state.show 隐藏tips,并调用回调方法
     * @method close
     * @return null
     * */
    close() {
        let seconds = this.props.seconds * 1000,_this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
            _this.props.closeCallback && (_this.props.closeCallback() );
            Dialog.close();
        }, seconds);
    }

    renderDialog(className){
        const {message,children,type} = this.props;
        this.close();
        return (
            <div className="clearfix">
                <div style={{padding: '5px 15px',float: 'left'}} className={classnames(this.setPrefix('tips-'+type,false))}>
                </div>
                <div  style={{padding: '5px 15px',float: 'right'}}>{children||message}</div>
            </div>
        );
    }

    render(){
        return this.renderDialog('toast');
    }

}