/**
 * Created by panqianjin on 15/11/17.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip
 * @moudle ui
 * @constructor
 * @since 0.1.0
 * @demo tooltip.js{js}
 * @show false
 * */
@ClassNameMixin
export default class Tooltip extends Component {
    static propType={
        /**
         * 提示是否展示
         * @property show
         * @type Boolean
         * @default null
         * */
        show: PropTypes.boolean,
        /**
         * 提示内容
         * @property msg
         * @type String
         * @default null
         * */
        msg: PropTypes.string,
        /**
         * 提示方向
         * @property direction
         * @type String
         * @default null
         * */
        direction: PropTypes.string,
        classPrefix: PropTypes.string,
        componentTag:PropTypes.string
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            direction: this.props.direction
        }
    }
    /**
     * 接收到新props时执行,state.show变为nextProps.show
     * 接收到新props时执行,state.show变为nextProps.show
     * 实现隐藏与显示
     * @method componentWillReceiveProps
     * @return null
     * */
    componentWillReceiveProps(nextProps){
        this.setState({
            show : nextProps.show
        });
    }
    render() {
        return (
            <Grid ref= {this.props.ref} className={classnames(
                this.getClassName('wraper'),
                {

                      [this.getClassName('show')]: this.state.show
                      //[this.getClassName('show')]: true
                }
            )} >
                    <div className={classnames(
                    this.getClassName('arrow-'+this.props.direction)
                )}></div>
                    <div className={classnames(
                    this.getClassName('content')
                )}>
                        {this.props.msg}
                    </div>

            </Grid>
        );
    }
}