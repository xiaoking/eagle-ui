import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelFooter组件
 * @class PanelFooter
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/panel.js {js}
 * @demo panel.html {html}
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class PanelFooter extends Component{


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
                    this.getClassName('footer')
                    ,this.props.padding?this.getClassName('padding'):''
                )}>
                {this.props.children}
            </div>
        );

    }
}