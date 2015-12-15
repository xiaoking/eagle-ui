/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Grid from './Grid.js';
import Row from './Row.js';
import Col from './Col.js';
import Label from './Label.js';

/**
 * 标签组
 * @class LabelGroup
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label.js {js}
 * @show true
 * */
@ClassNameMixin
export default class LabelGroup extends Component{
    static propTypes = {
        /**
         * 左侧总标题
         * @property title
         * @type String
         * */
        title:PropTypes.string,
        /**
         * 普通标签列表
         * @property simple
         * @type Boolean
         * @default false
         * */
        simple:PropTypes.bool,
        /**
         * 点击事件，所有label会被继承
         * @property clickCallback
         * @type Function
         * */
        clickCallback:PropTypes.func
    };
    static defaultProps = {
        classPrefix:'label',
        simple:false
    };
    constructor(props, context) {
        super(props, context);

        this.state = {
            checked:this.props.defaultChecked
        };
    }

    activeHandler(callback,value,text,target,active){
        //debugger;

        if(this.state.checked!=target.innerHTML ){
            this.setState({
                checked:text
            });
            callback && callback(value,text,target,active);
        }
    }


    render(){
        let _this = this;
        let options = React.Children.map(this.props.children,(option)=>{
            let {
                clickCallback,
                url,
                ...other,
                } = option.props;

            return <Label
                {...other}
                url={url ? url:_this.props.url}
                value = {option.props.value?option.props.value:option.props.children}
                clickCallback={_this.activeHandler.bind(_this,clickCallback ? clickCallback:_this.props.clickCallback)}
                active={this.props.simple?false:option.props.children === _this.state.checked}>{option.props.children}</Label>;

        },this);

        let labelCroupContent=this.props.simple?
            <div className={
                classnames(
                    this.getClassName('group-simple')
                )
           }>
                {options}
            </div>
            :
            <Grid className={
                classnames(
                    this.getClassName('group'),
                    {
                        [this.getClassName('end')]:!!this.props.end
                    }
                )
           }>
                <Row>
                    {
                        this.props.title?
                            <Col sm={1}>
                                <div className={classnames(this.getClassName('title') ) }>
                                    {this.props.title}
                                </div>
                            </Col>
                            :null
                    }
                    <Col sm={this.props.title?11:12} end>
                        {options}
                    </Col>
                </Row>
            </Grid>
        return (
            labelCroupContent
        );
    }
}