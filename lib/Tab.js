/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * @class Tab
 * @description   Tab
 * */
@ClassNameMixin
export default class Tab extends Component{

    static defaultProps = {
        classPrefix:'tab'
    };
    handlerClick(){
        this.props.clickCallback(this.props.index);
    }
    render(){

        return (
            <a className={
                classnames(
                    this.getClassName('item'),
                    this.getClassNames(this.props)
                )
                }
                {...this.props}
                onClick={::this.handlerClick}>
                {this.props.heading}
            </a>
        );
    }
}