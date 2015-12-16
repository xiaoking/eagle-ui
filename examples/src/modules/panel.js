/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';

import Input from '../../../src/Input.js';
import Label from '../../../src/Label.js';
import LabelGroup from '../../../src/LabelGroup.js';


import Grid from '../../../src/Grid.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';

import Panel from '../../../src/Panel/Panel.js';
import PanelHeader from '../../../src/Panel/PanelHeader.js';
import PanelFooter from '../../../src/Panel/PanelFooter.js';
import PanelContent from '../../../src/Panel/PanelContent.js';


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
                                <Input label=''  type="checkbox"  />
                            </Col>
                            <Col sm={10}>
                                <div className='shop-card'>
                                    <h1 className='shop-card-title inline-block'>
                                        西贝莜面村（中山公园店）

                                    </h1>
                                    <Label error radius>运营下线</Label>
                                    <div>
                                        <span className='row-key'>方案ID：</span><span className='row-value'>21355</span>
                                        <span className='row-key'>负责人：</span><span className='row-value'>张三丰</span>
                                        <span className='row-key'>城市：</span><span className='row-value'>上海</span>
                                        <span className='row-key'>售卖时间：</span><span className='row-value'>2014-2015</span>
                                        <span className='row-key'>售卖量：</span><span className='row-value'>0</span>
                                    </div>
                                    <div>
                                        <span className='row-key'>客户：</span><span className='row-value'></span>
                                        <span className='row-key'>已分配（王卓轩 2015-02-01 14:22）</span>
                                    </div>
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
                            <Col sm={1}>审批通过</Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <Input label=''  type="checkbox" checked  />
                            </Col>
                            <Col sm={10}>
                                <div className='shop-card'>
                                    <h1 className='shop-card-title inline-block'>
                                        西贝莜面村（中山公园店）

                                    </h1>
                                    <Label success radius>售卖中</Label>
                                    <div>
                                        <span className='row-key'>方案ID：</span><span className='row-value'>21355</span>
                                        <span className='row-key'>负责人：</span><span className='row-value'>张三丰</span>
                                        <span className='row-key'>城市：</span><span className='row-value'>上海</span>
                                        <span className='row-key'>售卖时间：</span><span className='row-value'>2014-2015</span>
                                        <span className='row-key'>售卖量：</span><span className='row-value'>0</span>
                                    </div>
                                    <div>
                                        <span className='row-key'>客户：</span><span className='row-value'></span>
                                        <span className='row-key'>已分配（王卓轩 2015-02-01 14:22）</span>
                                    </div>
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
                            <Col sm={1}>审批通过</Col>
                        </Row>

                    </Grid>
                </PanelContent>
                <PanelFooter>heiheihei</PanelFooter>
            </Panel>

        );
    }
};

export default Demo;


