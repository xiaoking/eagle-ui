/**
 * Created by panqianjin on 15/11/17.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import Tooltip from '../../lib/Tooltip.js';
import Button from '../../lib/Button.js';
import TooltipPanel from '../../lib/TooltipPanel.js';
let Demo = class Demo extends Component{
    render(){
        return (
            <div>
            <div style={{width:'300px',display: 'inline-block'}}>sadasda</div>
            <TooltipPanel>
                <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
            </TooltipPanel>
            </div>)
    }
}
ReactDOM.render(
    <Demo />,
        document.getElementById('root'));