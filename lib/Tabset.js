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
 * @demo src/tab.js{js}
 * @demo tab.html
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
            active:props.activeTab
        };
        if(this.props.tabCallback){
            this.props.tabCallback(props.activeTab);
        }
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
    render(){
        let headings=React.Children.map(this.props.children,(option,index)=>{
            let {
                tabCallback,
                ...other
            } = option.props;
            return <Tab
                index={index}
                active={this.state.active === index}
                clickCallback={::this.activeHandler}
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
                <ul>
                {headings}
                </ul>
                <div className={classnames(this.getClassName('tab-content') ) }>
                {panes}
                </div>
            </div>
        );
    }
}


