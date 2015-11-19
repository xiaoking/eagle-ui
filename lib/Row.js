//import RowLess from './row.less';
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';


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