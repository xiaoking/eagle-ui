import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格组件
 * @class Tr
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/table.js {js}
 * @demo table.html {html}
 * @show true
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Tr extends Component{

    static propTypes = {
        /**
         * 是否在每一行下添加分割线
         * @property split
         * @type bool
         * @default false
         * */
        split:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'tr'
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <tr className={
                classnames(
                    this.props.split ? this.getClassName('split') : null
                )
                }>
                {this.props.children}
            </tr>
        );

    }
}