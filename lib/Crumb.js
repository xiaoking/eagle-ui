/**
 * Created by panqianjin on 15/11/3.
 */
/**
 面包屑组件
 Features :
 实现面包屑导航样式

 Update Note:
 +2015.11.03 ： Created

 @moudle Crumb
 */

import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Grid from './Grid.js';
import Row from './Row.js';
/**
 * 主体类:crumd
 * 只需在Crumb下面应包含子节点
 * 如 <<item url="dddd.html">>菜单<</item>>形式，最后一个应无url值.
 * 即，this.props.children 不为空
 * @class crumb
 * */
@ClassNameMixin
export default class Crumb extends Component {
    static defaultProps = {
        classPrefix: 'crumb',
        componentTag: 'div'
    }
    /**
      构造函数
      @method constructor
      @param {object} props 父组件属性
      @param {object} cotext 上下文环境
     */
    constructor(props, context) {
        super(props, context);
    }
    /**
      渲染方法
      @method render
      @param none
      @return {object} 对应dom结构
     */
    render() {
        return (
            <Grid className={
                classnames(
                    this.getClassNamesForArguments(this.props.classPrefix)
                )
            }>
                <ul>
                    {this.props.children.map((item)=>
                    <li>{item.props.url?<a href={item.props.url}>{item.props.children}</a>:item.props.children}</li>
                        )}
                </ul>
                <Row className='clearfix'></Row>
            </Grid>
        )
    }
}