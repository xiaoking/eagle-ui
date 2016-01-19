/**
 * Created by panqianjin on 15/11/3.
 */
import React,{PropTypes} from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 面包屑组件
 * @class Crumb
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo crumb.js{js}
 * @show true
 * */
export default class Crumb extends Component {
    static propTypes = {
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
    }
    static defaultProps = {
        classPrefix: 'crumb',
        componentTag: 'div'
    }
    constructor(props, context) {
        super(props, context);
    }
    /**
     * @method render
     * @return {ReactElement}
     */
    render() {
        let length = this.props.children.length;
        let li = this.props.children.map((item,index)=>{
                const {children} = item.props;
                return <li key={children+index}>{
                    index < length-1?<a href={item.props.url}>{children}</a>:children
                }</li>;
            }
        );
        return (
            <this.componentTag {...this.props} className={
                classnames(
                    this.getProperty(),
                    'clearfix',
                    this.props.className
                )
            }>
                <ul>
                    {li}
                </ul>
            </this.componentTag>
        )
    }
}