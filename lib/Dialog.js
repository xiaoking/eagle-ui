/**
 * Created by panqianjin on 15/10/30.
 */
/**
 弹框组件
 Features :
 1.根据不同的type渲染不同的弹框样式
 2.根据需要提供callback


 Update Note:
 +2015.10.30 ： Created
 +2015.11.8 : Restructure
 @moudle Dialog
 */

import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * dialog 弹窗组件
 *
 * @class dialog
 */

@ClassNameMixin
export default class Dialog extends Component {
    static defaultProps = {
        successCallback: null,//success回掉函数
        cancelCallback: null,//cancel回调函数
        close: false,//是否有x图标
        title: ' ',//标题
        show: false,
        type: 'alert',
        tips: null,
        classPrefix:'dialog',//类名前前缀
        componentTag:'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        };
    }
    /**
     * @method close dialog
     * @return change state
     * */
    closeDialog() {
        this.props.cancelCallback && this.props.cancelCallback();
        if(!this.props.cancelCallback) {
            this.setState({
                show: false
            });
        }
    }
    /**
     * @method submit dialog
     * @return callBack;
     *         change state
     * */
    submitForm() {

        this.props.successCallback && this.props.successCallback();
        if(!this.props.successCallback) {
            this.setState({
                show: false
            });
        }
    }

    cancleDialog() {
        this.props.cancelCallback && this.props.cancelCallback();
        if(!this.props.cancelCallback) {
            this.setState({
                show: false
            });
        }
    }
    /**
     * @method show dialog overly
     * @return dom
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
     * @method render different dom
     * @name    face to this.props.type
     * @return  alert/confirm/dialog/mask
     * */
    alert() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'300px'}}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button')
                )}>
                    <Col sm={12}>
                        <Button radius egSize="xs" onClick={::this.submitForm}>确定</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    confirm() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )} style={{width:'300px'}}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                    <Col sm={12}>
                        <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定</Button>
                        <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    dialog() {
        debugger
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('button'))}>
                    <Col sm={12}>
                        <Button radius egSize="xs" style={{marginRight:'20px'}} onClick={::this.submitForm}>确定</Button>
                        <Button radius white egSize="xs" onClick={::this.cancleDialog}>取消</Button>
                    </Col>
                </Row>
            </Row>
        );
    }


    mask() {
        return (
            <Row className={ classnames(
                    this.getClassNamesForArguments('dialog')
                )}>
                <Row className={classnames(
                   this.getClassNamesForArguments('title')
                )}>
                    {this.props.title}
                    <div className={classnames(
                    this.getClassNamesForArguments('close')
                    )} onClick={::this.closeDialog}>x</div>
                </Row>
                <Row className={ classnames(
                    this.getClassNamesForArguments('content'))}>
                    {this.props.children}
                </Row>
            </Row>

        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            show : nextProps.show?nextProps.show:this.state.show
        });

    }
    render() {
        debugger
        return (
            <Grid className={classnames(
                this.getClassName('container'),
                {
                    [this.getClassName('show')]: this.props.cancelCallback?this.props.show:this.state.show
                }
                )}>
                {this[this.props.type.toLowerCase()]()}
                {this.showOverlay(this.props.tips)}
            </Grid>
        );
    }

}


