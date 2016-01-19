/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 按钮组件
 * @class Button
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button.js {js}
 * @show true
 * */

export default class Button extends Component{
    //static mixins = [ClassNameMixin];
    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        egSize:PropTypes.string,
        /**
         * 禁用
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled:PropTypes.bool,
        /**
         * 启用
         * @property enable
         * @type Boolean
         * @default true
         * */
        enable:PropTypes.bool,
        //success:PropTypes.bool,
        /**
         * 选中
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
        /**
         * 圆角
         * @property radius
         * @type Boolean
         * @default false
         * */
        radius:PropTypes.bool,
        /**
         * 椭圆角
         * @property round
         * @type Boolean
         * @default false
         * */
        round:PropTypes.bool,
        //error:PropTypes.bool,
        //warning:PropTypes.bool,
        //danger:PropTypes.bool,
        /**
         * 颜色[error、warning、danger、link、gray、white、success、'']
         * @property egStyle
         * @type Boolean
         * @default ''
         * */
        egStyle:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
         * */
        componentTag:PropTypes.string,
        /**
         * 块级显示
         * @property block
         * @type Boolean
         * @default false
         * */
        block:PropTypes.bool,
        egHref:PropTypes.string
    };
    static defaultProps = {
        egSize:'default',
        classPrefix:'btn',
        componentTag:'button'
    };
    //lg
    //sm
    //xs this.getClassName('demo'); eg-demo
    constructor(props, context) {
        super(props, context);
        this.setProperty('hollow','hollow');
    }

    render(){
        //const {} = this.props;
        //什么颜色，大小  类型
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(),
                    this.props.className
                )
                }>{this.props.children}</Component>
        );
    }
}