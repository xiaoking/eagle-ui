/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import {Label,LabelGroup,Panel,Grid,Row,Col,ValidatorPanel,Input} from 'eagle-ui';

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

    }

    show(value,text,target,active){
        console.dir(value);
    }

    render(){
        return (
            <Panel>
                <ValidatorPanel>
                    <Input placeholder="请输入" icon="calendar"  />
                </ValidatorPanel>
            </Panel>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));