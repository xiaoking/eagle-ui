//import RowLess from './row.less';
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

/**
 * 行
 * @class Row
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Row extends Component{

    static propTypes={

    };

    render(){

        return (
            <div {...this.props} className={classnames(
                'eg-row',
                'clearfix',
                this.props.className
            )} >
                {this.props.children}
            </div>
        );
    }
}