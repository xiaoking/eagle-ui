import React, {PropTypes} from 'react';

import Search from './sug/Search';

/**
 * 搜索联想组件。
 * @Class Suggestion
 * @Module ui
 * @constructor
 * @extends Component
 * @since 0.1.0
 * @demo suggestion.js {js}
 * */
export default class Suggestion extends Search {
    constructor(props, context) {
        super(props, context,{});
    }

    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @property callback
         * @type func
         * @default null
         * */
        getValueCallback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'suggestion-warp',
        componentTag: 'div',
        defaultValue:'',
        icon:'',
        iconDirection:'',
        iconStyle:{},
        noResultTips:'没有匹配结果'
    };

    loadedCallback(){

    }

    focusHandler(e){
        super.focusHandler(e);
        let {value} = this.state;
        if(value!=''){
            this.show();
            this.search(value);
        }else if(this.state._activeValue ==''){
            this.hide();
        }
    }
    entryCallback(){
        if(this.state._activeValue ==''){
            this.setDefaultData();
            this.hide();
        }

    }
}