import React, {Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

/**
 * input表单组件<br />
 * 通过type可以生成radio、checkbox、input等元素标签
 * @class Input
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js{js}
 * @show true
 * */
@ClassNameMixin
export default class Input extends Component{

    static propTypes = {
        //onClickCallback:PrgiopTypes.fun
    };

    static defaultProps = {
        /**
         * 生成不同的元素标签
         * @property type
         * @type String
         * */
        type:'text',
        /**
         * 默认输入提示
         * @property autoComplete
         * @type String
         * */
        autoComplete:'off',
        /**
         * type为radio或checkbox时，需要显示的标签信息
         * @property label
         * @type String
         * */
        label:'请选择'
    };

    constructor(props, context) {
        super(props, context);

        this.className='input-';

        this.state={
            isActive:this.props.checked
        };
    }

    setCheck(){
        this.setState({
            isActive:!this.state.isActive
        });
    }

    checkbox(){
        let checked = typeof(this.props.checked)!='undefined' ? this.props.checked : this.state.isActive;
        return (
            <div ref="" className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )} onClick={::this.setCheck}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}   />
                <div className="box">
                    <div className={classnames('checkbox',{
                        [this.getClassName('icon-tick',false)]:checked
                    })} >
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }
    //暂时用在图片片选框
    checkboxs(){
        let checked = typeof(this.props.checked)!='undefined' ? this.props.checked : this.state.isActive;
        return (
            <div ref="" className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )} onClick={::this.setCheck}>
                <input  {...this.props} type='checkbox' onChange={::this.onchange}   />
                <div className="box">
                    <div className={classnames('checkbox',{
                        [this.getClassName('icon-tick',false)]:checked
                    })} >
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }

    onchange(e){
        if(this.props.onCheck){
            this.props.onCheck(e.target);
        }
    }

    radio(){
        return (
            <div className={
                classnames(
                    this.getClassNamesForArguments(`${this.className}${this.props.type}` ),
                    {['eg-input-'+this.props.type+'-active']:this.props.checked},
                    {['eg-input-'+this.props.type+'-disabled']:this.props.disabled}
                )}>
                <input type={this.props.type} {...this.props} onChange={::this.onchange}  />
                <div className="box">
                    <div className="checkbox">
                        <div className="round"></div>
                    </div>
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }

    text(){
        return (
            <div className={classnames(
                {
                    [this.getClassName('icon-container')]:!!this.props.icon
                }
            )}>
                <input {...this.props} className={classnames(this.getDefaultClass() )} />
                <i className={'icon-input-right icon-'+this.props.icon} ></i>
            </div>

        );
    }

    getDefaultClass(){
        //border:1px solid #fff;
        return this.getClassName(this.className+this.props.type);
    }

    render(){
        let {type} = this.props;
        type = type.toLowerCase();

        if(type!='radio' && type!='checkbox'){
            type = 'text';
        }
        //const {name,id,value,placeholder,autocomplete,disabled,type} = this.props;
        return this[type]();
    }
}