import React, {PropTypes} from 'react';
import classNames from 'classnames';

import Component from './utils/Component';


/**
 * 星级评价
 * @class Star
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo star.js {js}
 * @show true
 * */
export default class Star extends Component{
    static propTypes = {
        /**
         * 星级评价分数
         * @property Rate
         * @type number
         * @default 默认未0分
         * */
        rate:PropTypes.number,
        /**
         * 星星大小
         * @property size
         * @type String||number
         * @default undefined  可以取值10-20 默认单位为'px'
         * */
        egSize: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
        ]),
        classPrefix:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'star',
        rate:0
    };
    constructor(props,context){
        super(props,context);
    }
    render(){
        let {rate,size} = this.props;
        //兼容用户输入px为单位的数据大小
        size=/px/i.test(size)?size.replace('px',''):size;
        let customizeStyle=size?{
            width:size*5+'px',
            height:size-1+'px',
            backgroundSize:size*5+'px auto'
        }:{};
        let shadowPosition=size?{
            backgroundPosition:"0  -"+size+"px"
        }:{};
        return (
            <div className={this.getProperty()} style={customizeStyle}>
                <div className={this.getClassName('grey')} style={{width:rate+'%',...shadowPosition}}></div>
            </div>
        )
    }
}