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
 * @class Label
 * @description   标签组
 * */
@ClassNameMixin
export default class LabelGroup extends Component{
    static propTypes = {
        title:PropTypes.string,
        simple:PropTypes.bool
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

    activeHandler(callback,active,target){
        //debugger;

        if(this.state.checked!=target.innerHTML ){
            this.setState({
                checked:target.innerHTML
            });
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
                value = {option.props.children}
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
                    this.getClassName('group')
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