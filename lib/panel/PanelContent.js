import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelContent组件
 * @class PanelContent
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
export default class PanelContent extends Component{

    static propTypes = {
        /**
         * 是否加padding
         * @property padding
         * @type bool
         * @default true
         * */
        padding:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'panel',
        padding:true
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <div className={
                classnames(
                    this.getClassName('content')
                    ,this.props.padding?this.getClassName('padding'):''
                )}>
                {this.props.children}
            </div>
        );

    }
}