/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * tab组件
 * @class Tab
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab.js{js}
 * @show true
 * */
@ClassNameMixin
export default class Tab extends Component{

    static defaultProps = {
        classPrefix:'tab'
    };
    handlerClick(){
        this.props.clickCallback(this.props.index);
    };
    handleMouseEnter(e){
        this.props.mouseEnterCallback(e.target.offsetLeft,e.target.offsetWidth);
    };
    render(){

        return (
            <a className={
                classnames(
                    this.getClassName('item'),
                    this.getClassNames(this.props)
                )
                }
                {...this.props}
                onClick={::this.handlerClick}
                onMouseEnter={::this.handleMouseEnter}>
                {this.props.heading}
            </a>
        );
    }
}