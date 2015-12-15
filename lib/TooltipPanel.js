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
/**
 * tipsPanel组件
 * 方向可选：top,down,left,right.默认down
 * 存在边界判断，若指定方向容纳不了提示，会转为默认
 * @class TooltipPanel
 * @moudle ui
 * @constructor
 * @since 0.1.0
 * @demo tooltip.js{js}
 * @show false
 * */
@ClassNameMixin
export default
class TooltipPanel extends Component {
    static propType={
        /**
         * 提示是否展示
         * @property show
         * @type Boolean
         * @default false
         * */
        show: PropTypes.boolean,
        /**
         * 提示内容
         * @property msg
         * @type String
         * @default 这是个提示
         * */
        msg: PropTypes.string,
        /**
         * 提示方向
         * @property direction
         * @type String
         * @default down
         * */
        direction: PropTypes.string,
        classPrefix: PropTypes.string,
        componentTag:PropTypes.string
    }
    static defaultProps = {
        show: false,
        msg: "这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示这是个提示",
        direction: 'down',
        classPrefix: 'tooltip',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            /**
             * 显示与否由父组件控制
             * @type Boolean
             * */
            show: this.props.show
        }
    }
    /**
     * 渲染完成时进行方向和边界判断，调整tips的位置
     * @method componentDidMount
     * @return null
     * */
    componentDidMount(){
        this.changeStyle(this.props.direction);
    }
    /**
     * @method render
     * @return ReactElement
     * */
    render() {
        let {componentTag} = this.props.children.props;
        //  <componentTag {...this.props} onMouseEnter={::this.showTips} onMouseOut={::this.hideTips}/>
        return (
            <Grid  {...this.props} className={classnames(
                this.getClassName('container'))} ref='container' >
                    {React.cloneElement(this.props.children,{
                        onMouseEnter: ::this.showTips,
                        onMouseOut: ::this.hideTips
                        }) }
                    <Tooltip ref='tips' {...this.props} show={this.state.show} />
            </Grid>
        );
    }
   /**
    * 鼠标over，set show true,tips显示
    * @method showTips
    * @return null
    * */
    showTips() {
        this.setState({
            show: true
        });
    }
    /**
     * 鼠标leave，set show false, tips隐藏
     * @method hideTips
     * @return null
     * */
    hideTips() {
        this.setState({
            show: false
        });
    }
    /**
     * tips方向和边界判断，调整tips的位置
     * @method changeStyle
     * @param direction {String}
     * @return null
     * */
    changeStyle(direction){
        let dir = direction;
        let [dbody,delement,tipNode,eleNode] = [document.body,document.documentElement,React.findDOMNode(this.refs.tips),React.findDOMNode(this.refs.container).children[0]];
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
            width: eleNode.offsetWidth,
            left: eleNode.parentNode.offsetLeft,
            top: eleNode.parentNode.offsetTop
        }
        let maxBody = this.getMaxBody(bodys,doc);
        let validate = this.isValidate(dir,tips,element,maxBody);
        if(!validate){
            let arrow = tipNode.children[0];
            this.removeClass(arrow,classnames(
                this.getClassName('arrow-'+dir)
            ));
            this.addClass(arrow,classnames(
                this.getClassName('arrow-down')
            ));
            dir = 'down';
        }
        switch(dir){
            case 'down':
                tipNode.style.left = '0';
                break;
            case 'top':
                tipNode.style.top = '-'+(tips.height + 10)+'px';
                tipNode.style.left = '0';
                break;
            case 'left':
                tipNode.style.left = '-'+(tips.width+5)+'px';
                tipNode.style.top = ((element.height - tips.height)/2 - 5)+'px';
                break;
            case 'right':
                tipNode.style.left = 'auto';
                tipNode.style.right = '-'+(tips.width+5)+'px';
                tipNode.style.top = ((element.height - tips.height)/2 - 5)+'px';
                break;
            default :
                break;
        }
    }
    /**
     * 获得浏览器的边界大小
     * @method getMaxBody
     * @param body {Object}
     * @param doc {Object}
     * @return maxBody {Object}
     * */
    getMaxBody(body,doc){
        let maxBody = {
            height: body.height > doc.height ? body.height : doc.height,
            width: body.width > doc.width ? body.width : doc.width,

        };
        return maxBody;
    }
    /**
     * 判断是否满足边界条件,是返回true否返回false
     * @method isValidate
     * @param dir {String}
     * @param tips {Object}
     * @param ele {Object}
     * @param maxBody {Object}
     * @return flag {Boolean}
     * */
    isValidate(dir,tips,ele,maxBody){
        let flag = false;
        switch(dir){
            case 'down':
                flag = (maxBody.height - ele.top) > (ele.height + tips.height) ? true :false;
                return flag;
                break;
            case 'top':
                flag = ele.top > tips.height ? true :false;
                return flag;
                break;
            case 'left':
                flag = ele.left > tips.width ? true :false;
                return flag;
                break;
            case 'right':
                flag = (maxBody.width - ele.left) > (ele.width + tips.width) ? true :false;
                return flag;
                break;
            default :
                return flag;
                break;
        }
    }

}