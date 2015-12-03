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
        direction: 'down',
        classPrefix: 'tooltip',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        }
    }
    componentDidMount(){
        this.changeStyle(this.props.direction);
    }
    render() {
        let {componentTag} = this.props.children.props;
        //  <componentTag {...this.props} onMouseEnter={::this.showTips} onMouseOut={::this.hideTips}/>
        return (
            <Grid className={classnames(
                this.getClassName('container'))} ref='container'>
                    {React.cloneElement(this.props.children,{
                        onMouseEnter: ::this.showTips,
                        onMouseOut: ::this.hideTips
                        }) }

                    <Tooltip ref='tips' {...this.props} show={this.state.show} />
            </Grid>
        );
    }

    showTips() {
        this.setState({
            show: true
        });
    }

    hideTips() {
        this.setState({
            show: false
        });
    }
    changeStyle(direction){
        let dir = direction;
        console.log(dir);
        let [dbody,delement,tipNode,eleNode] = [document.body,document.documentElement,ReactDOM.findDOMNode(this.refs.tips),ReactDOM.findDOMNode(this.refs.container).children[0]];
        let win = {

        };
        let bodys = {
            height: dbody.clientHeight,
            width: dbody.clientWidth
        };
        let doc = {
            height: delement.clientHeight,
            width: delement.clientWidth
        };
        let tips = {
            height: tipNode.offsetHeight,
            width: tipNode.offsetWidth
        };
        let element = {
            height: eleNode.offsetHeight,
            width: eleNode.offsetWidth
        }
        switch(dir){
            case 'down':
                break;
            case 'top':
                tipNode.style.top = '-'+element.height+'px';
                console.log(tipNode.style.top);
                break;
            case 'left':
                tipNode.style.left = '-'+tips.width+'px';
                break;
            case 'right':
                tipNode.style.right = '-'+tips.width+'px';
                break;
            default :
                break;
        }

    }
}