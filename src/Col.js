import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

/**
 * 列
 * @class Col
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Col extends Component{

    static propTypes = {
        /**
         * 占几列，共12列
         * @property egSize
         * @type Integer
         * */
        sm:PropTypes.number.isRequired,
        /**
         * 是否是最后一列
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool
    };

    getWidthClass(){
        let className= ['eg-sm-'+(this.props.sm?this.props.sm:'12') ];

        if(this.props.end){
            className.push('eg-end');
        }

        return className.join(' ');
    }

    render(){

        return (
            <div {...this.props} className={classnames(
                this.getWidthClass(),
                this.props.className
            )} >
                {this.props.children}
            </div>
        );
    }
}