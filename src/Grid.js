import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin';

@ClassNameMixin
/**
 * 布局组件
 * @class Grid
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Grid extends Component{

    static propTypes = {
    };


    render(){

        return (
            <div {...this.props}
                className={classnames(this.getClassName('grid'),this.getClassName(this.props.fluid?'grid-'+'fluid':''),this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}