import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * Panel组件
 * @class Panel
 * @constructor
 * @module panel
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/panel.js {js}
 * @demo panel.html {html}
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Panel extends Component{

    static propTypes = {
    };

    static defaultProps = {
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <div {...this.props} className={
                classnames(
                    this.getClassName('panel'),this.props.className
                )}>
                {this.props.children}
            </div>
        );

    }
}