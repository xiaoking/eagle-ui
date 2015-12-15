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
 * 弹框组件，dialog类型：分为alert,confirm,dialog,mask 四种。默认alert。
 * 根据show的存在与否决定弹框展示与否
 * @class dialog
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo dialog.js{js}
 * @show true
 * */
@ClassNameMixin
export default
class Dialog extends Component {
    static propType = {
        /**
         * dialog类型：分为alert,confirm,dialog,mask 四种。默认alert
         * @property type
         * @type String
         * @default alert
         * */
        type: PropTypes.string,
        /**
         * 标题
         * @property title
         * @type String
         * @default ""
         * */
        title: PropTypes.string,
        /**
         * 点击确定时，回调方法
         * @property successCallback
         * @type Function
         * @default null
         * */
        successCallback: PropTypes.func,
        /**
         * 点击取消时，回调方法
         * @property cancelCallback
         * @type Function
         * @default null
         * */
        cancelCallback: PropTypes.func,
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
        successCallback: null,//success回掉函数
        cancelCallback: null,//cancel回调函数
        close: false,//是否有x图标
        title: '',//标题
        type: 'alert',
        classPrefix: 'dialog',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.flag = true;
        this.state = {
            show: this.props.show,
            init: true
        };
    }
    /**
     * 接收到新props时执行,props是否存在show，是改变state.show，否则不变
     * 生命周期方法
     * @method componentWillReceiveProps
     * */
    componentDidMount(){
        //this.flag = false;
    }
    componentWillReceiveProps (nextProps) {
        if(nextProps.show ){
            this.flag = false;
            this.setState({
                show:nextProps.show
            });
        }

    }
    /**
     * @method render
     * @return {ReactElement}
     * */
    render() {
        let showOrHide = this.props.cancelCallback?this.props.show:this.state.show;
        return (
            <Grid ref = 'container' className={classnames(
                this.getClassName('container'),
                this.flag ? '':showOrHide?'fadein':'fadeout'
                )}>
                {!this.flag && !(this.props.cancelCallback?this.props.show:this.state.show)?this.displayNone():null}
                {this[this.props.type.toLowerCase()]()}
                {this.showOverlay(this.props.tips)}
            </Grid>
        );
    }
    /**
     * 改变display形态
     * */
    displayNone(){
        let _this =this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function(){this.removeClass( React.findDOMNode(_this.refs.container),'fadeout')}.bind(this),400);
    }

    close(callbackId){
        callbackId = this.props[`${callbackId}Callback`];
        if(callbackId){
           callbackId();
           return this;
        }

        this.flag = false;
        this.setState({
            show: false
        });
    }
    /**
     * 点击X，调用cancelCallback（如果存在），否则通过改变自身state来关闭
     * @method closeDialog
     * @return null
     * */
    closeDialog() {
        this.close('cancel');
    }

    /**
     * 点击确定按钮，调用successCallback（如果存在），否则通过改变自身state来关闭
     * @method submitForm
     * @return null;
     * */
    submitForm() {
        this.close('success');
    }
    /**
     * 点击取消按钮，调用cancelCallback（如果存在），否则通过改变自身state来关闭
     * @method cancleDialog
     * @return null;
     * */
    cancleDialog() {
        this.close('cancel');
    }

    /**
     * 显示遮罩
     * @method showOverlay
     * @return {ReactElement}
     * */
    showOverlay() {
        return (
            <Grid className={
                classnames(
                    this.getClassNamesForArguments('overlay')
                )
            }>
            </Grid>
        );

    }

    /**
     * 渲染alert
     * @method alert
     * @return  {ReactElement}
     * */
    alert() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'500px'}}>
                <Col>
                    <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )} style={{textAlign:'center'}}>
                            {this.props.title}
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('content'))} style={{textAlign:'center'}}>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('button')
                )}>
                        <Col sm={12}>
                            <Button radius egSize="xs" onClick={::this.submitForm}>确定</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
    /**
     * 渲染confirm
     * @method confirm
     * @return  {ReactElement}
     * */

    confirm() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'500px'}}>
                <Col>
                    <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )} style={{textAlign:'center'}}>
                            {this.props.title}
                            <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x
                            </div>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('content'))} style={{textAlign:'center'}}>
                        <Col>
                            {this.props.children?this.props.children:'请快乐的修bug'}
                        </Col>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                        <Col sm={12}>
                            <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定
                            </Button>
                            <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    /**
     * 渲染dialog
     * @method dialog
     * @return  {ReactElement}
     * */
    dialog() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Col>
                    <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                            {this.props.title}
                            <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x
                            </div>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                        <Col sm={12}>
                            <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定
                            </Button>
                            <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
    /**
     * 渲染mask
     * @method mask
     * @return  {ReactElement}
     * */

    mask() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Col>
                    <Row className={classnames(
                   this.getClassNamesForArguments('title','mask-title')

                )}>
                            {this.props.title}
                            <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x
                            </div>
                    </Row>
                    <Row className={ classnames(
                    this.getClassNamesForArguments('content'))} style={{marginTop:'10px'}}>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </Col>
            </Row>

        )
    }
}


