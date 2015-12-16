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
export default class Column extends Component{

    static propTypes = {
        /**
         * 表头（不加th字段，组件会进行包装）
         * @property header
         * @type React节点或者 String
         * */
        header:PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
        ]),
        /**
         * 用来声明需要绑定数组对象中的哪一个属性
         * @property field
         * @type String
         * */
        field:PropTypes.string
    };

    static defaultProps = {

    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return null;

    }
}