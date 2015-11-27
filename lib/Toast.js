/**
 * Created by panqianjin on 15/10/30.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * 提示组件
 * @class toast
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo src/toast.js{js}
 * @demo toast.html
 * @show true
 * */
@ClassNameMixin
export default
class Toast extends Component {
    static propType = {
        /**
         * toast类型：分为success,error,loading 三种。默认success
         * @property type
         * @type String
         * @default success
         * */
        type: PropTypes.string,
        /**
         * 文字信息
         * @property msg
         * @type String
         * @default 保存成功
         * */
        msg: PropTypes.string,
        /**
         * tips n秒后消失 默认4秒
         * @property seconds
         * @type Integer
         * @default 4
         * */
        seconds: PropTypes.number,
        /**
         * 是否显示遮罩，默认false
         * @property overlay
         * @type Boolean
         * @default false
         * */
        overlay: PropTypes.boolean,
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
        type: 'sucess-tips',
        msg: '保存成功',
        seconds: 4,
        overlay: false,
        classPrefix: 'tips',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            /**
             * 是否显示tips
             * @type Boolean
             * */
            show: this.props.show
        };
    }
    /**
     * 接收到新props时执行,props改变，改变state.show
     * @method componentWillReceiveProps
     *
     * */
    componentWillReceiveProps(nextProps) {
        this.setState({
            /**
             * state.show随新的props里的值改变
             * @type Boolean
             * */
            show: nextProps.show
        });

    }
    /**
     * @method render
     * @return {ReactElement}
     * */
    render() {
        this.setTimeoutForClose();
        return (
            <Grid className={classnames(
                    this.getClassName('container'),
                    {
                        ['fadein']:this.state.show,
                        ['fadeout']:!this.state.show
                    }
                )}>
                {this.toast()}
                {this.showOverlay(this.props.overlay)}
            </Grid>
        );
    }
    /**
     * 是否展示遮罩层
     * @method showOverlay
     * @param target {Boolean}
     * return {ReactElement}
     * */
    showOverlay(target) {
        if (target) {
            return (
                <Grid className={
                     classnames(
                    this.getClassNamesForArguments('overlay'),
                    'clearfix'
                )
                }>
                </Grid>
            );
        } else {
            return (<Grid></Grid>);
        }
    }

    /**
     * 渲染toast主体
     * @method toast
     * @return {ReactElement}
     * */
    toast() {
        return (
            <Row className={
                 classnames(
                    this.getClassNamesForArguments(this.props.classPrefix)
                )}>
                <Col>
                    <Row className={classnames(
                    this.getClassNamesForArguments('content')
                )}>

                        <div style={{padding: '5px 15px',float: 'left'}} className={classnames(
                            this.getClassNamesForArguments(this.props.type)
                        )}>
                        </div>
                        <div style={{padding: '5px 15px',float:'right'}}>
                            {this.props.msg}
                        </div>
                    </Row>
                </Col>
            </Row>
        )
    }
    /**
     * 延时n秒消失
     * @method  setTimeoutForClose
     * @return null
     * */
    setTimeoutForClose() {
        if (this.state.show) {
            let seconds = this.props.seconds * 1000;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(::this.closeToast, seconds
        )
            ;
        }
    }
    /**
     * 改变state.show 隐藏tips,并调用回调方法
     * @method closeToast
     * @return null
     * */
    closeToast() {
        this.props.closeCallback && (this.props.closeCallback() );
        this.setState({
            show: false
        });
    }



}