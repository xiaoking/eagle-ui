import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Component from './utils/Component';

/**
 * 行
 * @class Row
 * @module grid
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Row extends Component{
    static propTypes={
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default row
         * */
        classPrefix:PropTypes.string,
        /**
         * 样式前缀
         * @property bottom
         * @type String
         * @default undefined
         * */
        bottom:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'row'
    };

    render(){

        return (
            <div {...this.props} className={classnames(
                this.getProperty(),
                'clearfix',
                this.props.className
            )} style={this.getStyles(this.props.style)}>
                {this.props.children}
            </div>
        );
    }
}