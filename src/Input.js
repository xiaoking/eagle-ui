import React, {PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Icon from './utils/Icon';

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
        label:'请选择',
        /**
         * 需要显示的icon
         * @property icon
         * @type String
         * */
        /**
         * 给icon设置样式
         * @property iconStyle
         * @type Object
         * */
        classPrefix:'input',
        /**
         * icon,input类型只能是text这种的
         * @property icon
         * @type String
         * */
        icon:'',
        /**
         * icon展示的方向，{left,right}
         * @property iconDirection
         * @type String
         * */
        iconDirection:''
    };

    constructor(props, context) {
        super(props, context);

        this.className='input-';

        this.state={
            _active:this.props.checked
        };
    }

    getIcon(type,checked,icon){
        const classMap = {
            radio:{
                active:'adjust_checked',
                default:'adjust_unchecked'
            },
            checkbox:{
                active:'checkbox_checked',
                default:'checkbox_unchecked'
            }
        };

        let iconType = classMap[type];

        let html = null,
            iconStyle= this.props.iconStyle||{},
            name ='';

        if(iconType){
            name = iconType[checked?'active':'default'];
        }else{
            name = icon;
        }


        if(name){
            return (
                <Icon  className={classnames(
                    "input-icon"
                )} name={name} style={iconStyle} />
            );
        }

        return html;
    }

    changeHander(e){
        let target = e.target,
            type = target.type.toLowerCase();

        if(this.isRadio(type) ){
            this.execMethod('active',target);

        }else if(this.isCheckbox(type) ){

            this.setState({
                _active:!this.state._active
            });
            this.execMethod('getValue',target.value ||'',target);
        }

        if(this.props.onChange){
            this.props.onChange(e);
        }
    }

    isCheckbox(type){
        return /checkbox/.test(type ||this.props.type);
    }

    isRadio(type){
        return /radio/.test(type || this.props.type);
    }

    render(){
        const {disabled,type,label,icon} = this.props;

        let {iconDirection} = this.props;

        let {checked} = this.props;

        if(this.isCheckbox()){
            checked = this.state._active;
        }

        if(icon){
            if(iconDirection==''){
                iconDirection = 'right';
            }

            iconDirection = this.getClassName('icon-'+iconDirection);
        }

        return (
            <div className={classnames(this.getProperty(),type,{
                'active':checked,
                'disabled':disabled,
                'show-icon':!!icon,
                [`${iconDirection}`]:!!iconDirection
            })}>
                {this.getIcon(type,checked,icon)}
                <label>{label}</label>
                <input type={type} {...this.otherProps} onChange={disabled?()=>{}: this.changeHander.bind(this)} />
            </div>
        );
    }
}