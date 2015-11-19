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
 * @class  toast
 * @description three tips: success/error/loading
 * date 2015/211
 * */
@ClassNameMixin
export default class Toast extends Component {
    static defaultProps = {
        type: 'sucess-tips',
        msg: '保存成功',
        overlay: false,
        seconds: 4,
        target: true,
        classPrefix: 'tips',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        };
    }

    /**
     * @method  n seconds hide toast
     * */
    setTimeoutForClose() {
        if(this.state.show){
            let seconds = this.props.seconds * 1000;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(::this.closeToast, seconds);
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            show : nextProps.show
        });

    }

    render() {
        this.setTimeoutForClose();
        return (
            <Grid className={classnames(
                    this.getClassName('container'),
                    {
                        [this.getClassName('show')]:this.state.show
                    }
                )}>
                {this.toast()}
                {this.showOverlay(this.props.target)}
            </Grid>
        );
    }

    closeToast() {
        this.props.closeCallback && (this.props.closeCallback() );
        this.setState({
            show: false
        });
    }

    showOverlay(target) {
        if (target) {
            return (<Grid></Grid>);
        } else {
            return (
                <Grid className={
                     classnames(
                    this.getClassNamesForArguments('overlay'),
                    'clearfix'
                )
                }>
                </Grid>
            );
        }
    }

    /**
     * @method render content
     * */
    toast() {
        return (
            <Row className={
                 classnames(
                    this.getClassNamesForArguments(this.props.classPrefix)
                )}>
                <Row className={classnames(
                    this.getClassNamesForArguments('content')
                )}>
                    <Row>
                        <Col className={classnames(
                            this.getClassNamesForArguments(this.props.type)
                        )}>
                        </Col>
                        <Col>
                            {this.props.msg}
                        </Col>
                    </Row>
                </Row>
            </Row>
        )
    }


}


