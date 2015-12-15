import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格组件
 * @class Th
 * @constructor
 * @module table
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo table.js {js}
 * @show true
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Th extends Component{

    static propTypes = {

    };

    static defaultProps = {

    };
    constructor(props, context) {
        super(props, context);
    }

    sortHandler(){
        var sortMethod=this.props.sort;
        if(!sortMethod || sortMethod==='asc'){
            sortMethod='des';
        }else{
            sortMethod='asc';
        }
        this.props.clickCallback(this.props.field,sortMethod);
    }
    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <th
                onClick={::this.sortHandler}>
                {this.props.children}
                {this.props.sort==='des'? <span>↓</span>:this.props.sort==='asc'?<span>↑</span>:null}
            </th>
        );

    }
}