import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格组件
 * @class Table
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
export default class Table extends Component{

    static propTypes = {
    };

    static defaultProps = {

    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        console.debug('table');
        return (
            <table className={
                classnames(
                    this.getClassName('table')
                )}>
                {this.props.children}
            </table>
        );

    }
}