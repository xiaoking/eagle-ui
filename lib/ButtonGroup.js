/**
 * Created by mac on 15/9/8.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

@ClassNameMixin
export default class ButtonGroup extends Component{

    static propTypes={
        justify:PropTypes.bool,
        tacked:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'btn-group',
        componentTag:'div'
    };
    /**
     * tacked: bool 是否垂直排列
     * justify: justify 是否自适应宽度
     * */
    constructor(props, context) {
        super(props, context);
        //this.classNameMixin = new ClassNameMixin(this.props);
    }

    render(){
        const {componentTag:Component} = this.props;
        return (
            <Component {...this.props} className={
                classnames(
                    this.getClassNamesForArguments('btn-group'),
                    'clearfix' ,
                    this.getClassNames(this.props)
                )}>{this.props.children}</Component>
        );
    }
}