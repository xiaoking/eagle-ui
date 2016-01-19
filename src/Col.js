import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';
/**
 * 列
 * @class Col
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Col extends Component{
    static propTypes = {
        /**
         * 占几列，共12列
         * @property egSize
         * @type Integer
         * */
        egSize:PropTypes.string,
        /**
         * 是否是最后一列
         * @property end
         * @type Boolean
         * @default false
         * */
        end:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'col',
        componentTag:'div',
        egSize:'md',
        sm:12
    };

    initCallback(){
        let {sm} = this.props;
        //this.setProperty('sm',this.props.egSize+'-'+sm );
        this.setProperty('end','end' );
        this.setProperty('layer','layer');
        //
    }

    render(){
        let {sm,egSize} = this.props;
        return (
            <this.componentTag {...this.props} className={classnames(
                this.getProperty(),
                this.getClassName(`${egSize}-${sm}`),
                this.props.className
            )}  style={this.getStyles(this.props.style)}>
                {this.props.children}
            </this.componentTag>
        );
    }
}