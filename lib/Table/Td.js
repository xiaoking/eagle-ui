import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格组件
 * @class Paging
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/table.js {js}
 * @demo table.html {html}
 * @show true
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Td extends Component{

    static propTypes = {

    };

    static defaultProps = {

    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        console.debug('td');
        return (
            <td {...this.props}>
                {this.props.children}
                {classnames(
                    this.getClassNames(this.props))===''
                    ? null:
                    <span className={
                        classnames(
                            this.getClassNames(this.props)
                        )}>
                    </span>
                }
            </td>
        );

    }
}