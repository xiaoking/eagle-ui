/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * 标签
 * @class Label
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo src/label.js {js}
 * @demo label.html {html}
 * @show true
 * */
@ClassNameMixin
export default class Label extends Component{
    static propTypes = {
        url:PropTypes.string,
        clickCallback:PropTypes.func
    };
    static defaultProps = {
        classPrefix:'label',
        url:'javascript:void(0);'
    };
    constructor(props, context) {
        super(props, context);

        //this.state = {
        //    active:this.props.active || false
        //};
    }

    /**
     * 点击回调函数
     * */
    clickHandler(e){
        let {clickCallback} = this.props,
            target = e.target;
        //,
        //     active = !this.state.active;
        //this.setState({
        //    active:active
        //});
        clickCallback && clickCallback(target.getAttribute('value'),target.innerHTML,target,!this.props.active,);
    }

    render(){
        const {url} = this.props;
        return (
            <a href={url} {...this.props} className={
                classnames(
                    this.getClassName('item'),
                    this.getClassNames(this.props),
                    this.getClassName(this.props.className)
                    //this.getClassNames(this.state)
                )
            } onMouseDown={::this.clickHandler}>
                {this.props.children}
            </a>
        );
    }
}