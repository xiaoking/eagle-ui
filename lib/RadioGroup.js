/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';
import Input from './Input.js';


export default class RadioGroup extends Component{

    static propTypes = {
        name:PropTypes.string.required,
        defaultChecked:PropTypes.string
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
        }
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