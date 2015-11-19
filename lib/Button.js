/**
 * Created by mac on 15/9/7.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

@ClassNameMixin
export default class Button extends Component{
    //static mixins = [ClassNameMixin];
    static propTypes = {
        egSize:PropTypes.string,
        disabled:PropTypes.bool,
        enable:PropTypes.bool,
        //success:PropTypes.bool,
        active:PropTypes.bool,
        radius:PropTypes.bool,
        round:PropTypes.bool,
        //error:PropTypes.bool,
        //warning:PropTypes.bool,
        //danger:PropTypes.bool,
        egStyle:PropTypes.string,
        classPrefix:PropTypes.string,
        componentTag:PropTypes.string,
        block:PropTypes.bool,
        egHref:PropTypes.string
    };
    static defaultProps = {
        egSize:'default',
        classPrefix:'btn',
        componentTag:'a'
    };
    //lg
    //sm
    //xs this.getClassName('demo'); eg-demo
    constructor(props, context) {
        super(props, context);
        //this.classNameMixin = new ClassNameMixin(this.props);
    }
    render(){
        //const {} = this.props;
        //什么颜色，大小  类型
        let {egSize,componentTag:Component,egStyle} = this.props;
        //let  size= this.classNameMixin.getClassName(egSize);

        return (
            <Component {...this.props} className={
                classnames(
                    this.getClassNamesForArguments('btn',egSize,egStyle),
                    this.getClassNames(this.props)
                )
                }>{this.props.children}</Component>
        );
    }
}