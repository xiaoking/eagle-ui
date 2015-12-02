/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';
import Input from './Input.js';

/**
 * 单选按钮组组件
 * @class RadioGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo src/input.js {js}
 * @demo input.html {html}
 * @show true
 * */
export default class RadioGroup extends Component{

    static propTypes = {
        /**
         * radio name
         * @property name
         * @type String
         * */
        name:PropTypes.string,
        /**
         * 默认选中项
         * @property defaultChecked
         * @type String
         * */
        defaultChecked:PropTypes.string,
        /**
         * 获取选中的值
         * @property getValueCallback
         * @type String
         * */
        getValueCallback:PropTypes.func
    };

    constructor(props, context) {
        super(props, context);

        this.state={
            checked:this.props.defaultChecked
        };
    }

    _onChange(target){

        if(this.state.checked!=target.value ){

            this.setState({
                checked:target.value
            });
            this.props.getValueCallback(target.value,target);
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.defaultChecked
        });
    }

    render(){

        let options = React.Children.map(this.props.children,(option)=>{
            let {
                name,
                value,
                label,
                onCheck,
                ...other,
                } = option.props;

            return <Input
                {...other}
                ref={option.props.value}
                name={this.props.name}
                key={option.props.value}
                value={option.props.value}
                label={option.props.label}
                onCheck={::this._onChange}
                checked={option.props.value === this.state.checked}/>;

        },this);

        return (
            <div style={this.props.style}
                 className={this.props.className || ''}>
                {options}
            </div>
        );
    }
}