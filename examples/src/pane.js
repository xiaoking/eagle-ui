/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';

import Input from '../../lib/Input.js';
import Label from '../../lib/Label.js';
import LabelGroup from '../../lib/LabelGroup.js';


import Grid from '../../lib/Grid.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';

import Panel from '../../lib/Panel/Panel.js';
import PanelHeader from '../../lib/Panel/PanelHeader.js';
import PanelFooter from '../../lib/Panel/PanelFooter.js';
import PanelContent from '../../lib/Panel/PanelContent.js';




let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

    }

    show(){
        console.debug(1);
    }
    render(){
        return (
            <Panel>
                <PanelHeader>title</PanelHeader>
                <PanelContent>
                    <Grid>
                        <Row>
                            <Col sm={1}>
                                <Input label=''  type="checkbox" checked  />
                            </Col>
                            <Col sm={9}>
                                <div className='shop-card'>
                                    <h1 className='shop-card-title'>
                                        西贝莜面村（中山公园店）

                                    </h1>
                                    <Label error radius>aaaa</Label>
                                    <div>
                                        <LabelGroup simple clickCallback={this.show} >
                                            <Label>流程历史</Label>
                                            <Label>编辑</Label>
                                            <Label>删除</Label>
                                            <Label>复制</Label>
                                        </LabelGroup>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={2}>啊哈</Col>
                        </Row>
                    </Grid>
                </PanelContent>
                <PanelFooter>heiheihei</PanelFooter>
            </Panel>

        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));


