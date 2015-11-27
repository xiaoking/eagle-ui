/**
 * Created by panqianjin on 15/11/3.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Grid from './Grid.js';
import Row from './Row.js';
/**
 * 面包屑组件
 * @class crumb
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo src/crumb.js{js}
 * @demo crumb.html
 * @show true
 * */
@ClassNameMixin
export default class Crumb extends Component {
    static propTypes = {
        /**
         * 类名样式前缀
         * @property classPrefix
         * @type sting
         * @default crumb
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default div
         * */
        componentTag: PropTypes.string
    }
    static defaultProps = {
        classPrefix: 'crumb',
        componentTag: 'div'
    }
    constructor(props, context) {
        super(props, context);
    }
    /**
     * @method render
     * @return {ReactElement}
     */
    render() {
        let length = this.props.children.length;
        let li = this.props.children.map((item,index)=>{
                return <li>{index < length-1?<a href={item.props.url}>{item.props.children}</a>:item.props.children}</li>
            })
        return (
            <Grid className={
                classnames(
                    this.getClassNamesForArguments(this.props.classPrefix)
                )
            }>
                <ul>
                    {li}
                </ul>
                <Row className='clearfix'></Row>
            </Grid>
        )
    }
}