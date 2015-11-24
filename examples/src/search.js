/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Search from '../../lib/Search.js';

ReactDOM.render(
    <div>
        <Search callBack={function(val){alert(val)}}>
        </Search>
    </div>
    ,document.getElementById('root'));
