/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import Dialog from '../../lib/Dialog.js';

let Demo= class Demo extends Component{

    static propTypes={

    };

    render(){

        return (
            <Dialog type='alert' show/>
        );
    }
}

ReactDOM.render(
        <Demo  />
    ,document.getElementById('root'));