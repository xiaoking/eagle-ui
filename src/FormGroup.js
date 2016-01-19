
import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

import ClassNameMixin from './utils/ClassNameMixin';

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
@ClassNameMixin
export default class FormGroup extends Component{

    static propTypes = {

    };

    constructor(props, context) {
        super(props, context);
    }

    render(){

        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('form-group'),this.props.className || '')}>
                {this.props.children}
            </div>
        );
    }
}