/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tab from './Tab.js';
/**
 * tab组件
 * @class Tabset
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab.js{js}
 * @show true
 * */
@ClassNameMixin
export default class Tabset extends Component{
    static defaultProps = {
        classPrefix:'tabset',
        activeTab:0
    };


    static propTypes = {
        /**
         * 需要在初始的时候打开第几个tab，默认为0（从0计数，即打开第一个tab）
         * @property activeTab
         * @type Number
         * @default 0
         * */
        activeTab:PropTypes.number
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            active:props.activeTab,
            tabSlider:{
                left:0,
                width:0
            }
        };
        if(this.props.tabCallback){
            this.props.tabCallback(props.activeTab);
        }
    }
    componentDidMount(){
        this.tabItemListMouseLeaveHandler();
    }
    activeHandler(index) {
        if(this.state.active !== index){
            this.setState({
                active:index
            });
            if(this.props.tabCallback){
                this.props.tabCallback(index);
            }
        }
    }
    tabItemListMouseLeaveHandler(){
        let activeTab=React.findDOMNode(this.refs['tabItem'+this.state.active]);
        this.timeoutObj=setTimeout(function(){
            this.tabItemMouseEnterHandler(activeTab.offsetLeft,activeTab.offsetWidth);
        }.bind(this),400);
    }
    tabItemMouseEnterHandler(left,width){
        clearTimeout(this.timeoutObj);
        this.setState({
            tabSlider:{
                left,
                width
            }
        });
    }
    render(){
        let headings=React.Children.map(this.props.children,(option,index)=>{
            let {
                tabCallback,
                ...other
            } = option.props;
            return <Tab
                ref={'tabItem'+index}
                index={index}
                active={this.state.active === index}
                clickCallback={::this.activeHandler}
                mouseEnterCallback={::this.tabItemMouseEnterHandler}
                {...other}></Tab>;
        },this);
        let panes = React.Children.map(this.props.children,(option,index)=>{
            return <div
                className={classnames(this.getClassName('panes') ) }
                style={{display: this.state.active === index ? null : 'none'}}
                >{option.props.children}</div>;
        },this);
        return (
            <div>
                <ul className={classnames(this.getClassName('tab-list')) }
                    onMouseLeave={::this.tabItemListMouseLeaveHandler}>
                {headings}
                    <li className={classnames(this.getClassName('slider-container') ) }>
                        <div className={classnames(this.getClassName('slider') ) }
                            style={{width:this.state.tabSlider.width,left:this.state.tabSlider.left}}>
                        </div>
                    </li>
                </ul>
                <div className={classnames(this.getClassName('tab-content') ) }>
                {panes}
                </div>
            </div>
        );
    }
}


