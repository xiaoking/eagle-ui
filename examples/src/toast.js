/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Toast from '../../lib/Toast.js';
ReactDOM.render(
    <Toast type='error' msg='保存成功' seconds='3' show overlay>
    </Toast>
    ,document.getElementById('root'));