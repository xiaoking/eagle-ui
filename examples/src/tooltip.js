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
            <TooltipPanel>
                <Button radius egSize="sm" egStyle="warning">我是按钮</Button>
                </TooltipPanel>
            )
    }
}
ReactDOM.render(
    <Demo />,
        document.getElementById('root'));