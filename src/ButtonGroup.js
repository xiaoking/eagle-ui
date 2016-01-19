/**
 * Created by mac on 15/9/8.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 按钮组组件<br/>
 * @class ButtonGroup
 * @module form
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button.js {js}
 * @show true
 * */
export default class ButtonGroup extends Component{

    static propTypes={
        /**
         * 是否自适应宽度
         * @property justify
         * @type Boolean
         * @default false
         * */
        justify:PropTypes.bool,
        /**
         * 是否垂直排列
         * @property tacked
         * @type Boolean
         * @default false
         * */
        tacked:PropTypes.bool,
        egType:PropTypes.string
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

        this.state = {
            active:this.props.active
        };
    }

    mouseDownHandler(e){
        let target = e.target;
        this.execMethod('active',target,target.innerHTML);
        this.setState({
            active:target.innerHTML
        })
    }

    render(){
        const {componentTag:Component} = this.props;

        let options = React.Children.map(this.props.children,(option)=>{

            let opt = React.cloneElement(option,{
                onMouseDown:this.mouseDownHandler.bind(this),
                active:this.state.active == option.props.children
            });
            return opt;

        },this);

        return (
            <Component {...this.props} className={
                classnames(
                    this.getProperty(),
                    'clearfix'
                )}>{options}</Component>
        );
    }
}