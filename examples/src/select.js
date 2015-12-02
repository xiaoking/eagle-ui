/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Select from '../../lib/Select.js';

ReactDOM.render(
    <Select  callback={function(val){console.log(val)}} >
        <item value='0'>北京</item>
        <item value='1'>上海</item>
        <item value='2'>南京</item>
        <item value='3'>ssdd</item>
        <item value='4'>sd饭否否</item>
        <item value='5'>南京</item>
        <item value='6'>ssdd</item>
        <item value='7'>sd饭否否</item>
        <item value='8'>北京</item>
        <item value='9'>上海</item>
        <item value='10'>南京</item>
        <item value='11'>ssdd</item>
        <item value='12'>sd饭否否</item>

    </Select>
    ,document.getElementById('root'));