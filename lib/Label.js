/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * @class Label
 * @description   标签
 * */
@ClassNameMixin
export default class Label extends Component{
    static propTypes = {
        url:PropTypes.string,
        clickCallback:PropTypes.fun
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
        let {clickCallback} = this.props;
        //,
        //     active = !this.state.active;
        //this.setState({
        //    active:active
        //});
        clickCallback && clickCallback(!this.props.active,e.target);
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