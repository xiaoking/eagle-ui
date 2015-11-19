/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Select from '../../lib/Select.js';

ReactDOM.render(
    <Select  callback={function(val){alert(val)}}>
        <item> 北京</item>
        <item> 上海</item>
        <item> 南京</item>
    </Select>
    ,document.getElementById('root'));