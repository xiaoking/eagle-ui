/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Input from './Input.js';

import Component from './utils/Component.js';

/**
 * 多选按钮组组件
 * @class CheckboxGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input.js {js}
 * @show true
 * */
export default class CheckboxGroup extends Component{

    static propTypes = {

    };

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){

    }
    render(){

        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('input-group'),this.props.className || '')}>
                <div className={this.getClassName('input-group-container')}>
                {this.props.children}
                </div>
            </div>
        );
    }
}