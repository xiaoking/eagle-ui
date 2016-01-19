import React,{Component, PropTypes, ReactDOM} from 'react';
import classnames from 'classnames';

import Suggestion from './Suggestion';
/**
 * 搜索按钮组件
 * 参数： id/callBack/placeholder 均可不传
 * @class Search
 * @module ui
 * @constructor
 * @since 0.1.0
 * @demo suggestion.js{js}
 * @show true
 * @class Select
 * */
/**
 * tips组件
 * 只是从tooltipPanel获得props渲染，其他操作均在tooltipPanel中
 * @class Tooltip

 * */
export default class Search extends Suggestion {

    constructor(props, context) {
        super(props, context);
    }

}