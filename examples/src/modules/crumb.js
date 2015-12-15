/**
 * Created by panqianjin on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import Crumb from '../../../lib/Crumb.js';

export default class CrumbCls extends Component {
    render() {
        return (
            <Crumb>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url="dddd.html">菜单</item>
                <item url='baidu.html'>菜单</item>
            </Crumb>
        );
    }
}
