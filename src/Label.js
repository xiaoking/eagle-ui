/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 标签
 * @class Label
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label.js {js}
 * @show true
 * */
export default class Label extends Component{
    static propTypes = {
        url:PropTypes.string,
        activeCallback:PropTypes.func
    };
    static defaultProps = {
        classPrefix:'label',
        url:'javascript:void(0);',
        componentTag:'a'
    };
    constructor(props, context) {
        super(props, context);
    }

    /**
     * 点击回调函数
     * */
    mouseDownHandler(e){
        let target = e.target;

        this.execMethod('active',target.getAttribute('value'),target.innerHTML,target,!this.props.active);
    }

    render(){
        const {url} = this.props;
        return (
            <this.componentTag href={url} {...this.props} className={
                    classnames(
                        this.getProperty(),
                        this.props.className
                    )
                }
                onMouseDown={::this.mouseDownHandler}
                >
                {this.props.children}
            </this.componentTag>
        );
    }
}