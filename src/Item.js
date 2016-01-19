import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

/**
 * 表组件
 * @class Item
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class Item extends Component{

    static propTypes = {
    };

    static defaultProps = {
        classPrefix:'item'
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        let renderStyle=this.props.style||{};
        return (
            <div className={
                classnames(
                    this.getClassNamesForArguments('item'),
                    this.props.className,
                    this.getClassNames(this.props)
                )} style={renderStyle}>
                {this.props.children}
            </div>
        );

    }
}