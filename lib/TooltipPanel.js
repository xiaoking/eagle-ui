/**
 * Created by panqianjin on 15/11/17.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tooltip from './Tooltip.js';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
@ClassNameMixin
export default
class TooltipPanel extends Component {
    static defaultProps = {
        show: false,
        msg: "这真是令人心碎的组件",
        classPrefix: 'tooltip',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        }
    }
    render() {
        debugger
        let {componentTag} = this.props.children.props;
        return (
            <Grid className={classnames(
                this.getClassName('container'))}>
                <Row >
                    <componentTag {...this.props} onMouseEnter={::this.showTips} onMouseOut={::this.hideTips}/>
                </Row>
                <Tooltip msg={this.props.msg} show={this.state.show}/>
            </Grid>
        );
    }

    showTips() {
        debugger
        this.setState({
            show: true
        });
    }

    hideTips() {
        this.setState({
            show: false
        });
    }
}