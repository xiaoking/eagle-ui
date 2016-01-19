import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import PanelHeader from './PanelHeader';
import Component from '../utils/Component';
/**
 * Panel组件
 * @class Panel
 * @constructor
 * @module panel
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo panel.js {js}
 * @author bo.an@dianping.com
 * */
export default class Panel extends Component{

    static propTypes = {
        /**
         * 标题
         * @property heading
         * @type String
         * @default empty
         * */
        heading:PropTypes.string
    };

    static defaultProps = {

        heading:'',
        classPrefix:'panel'
    };

    renderHeading(){
        const {heading} = this.props;

        if(heading){
            return (
                <PanelHeader className={this.getClassName('panel-header-flag',false)}><h4>{heading}</h4></PanelHeader>
            );
        }

        return null;
    }

    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <div {...this.props} className={
                classnames(
                    this.getProperty(),this.props.className
                )}  style={this.getStyles(this.props.style)}>
                {this.renderHeading()}
                {this.props.children}
            </div>
        );

    }
}