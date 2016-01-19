/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';

import {Row,Col,Grid,
    Panel,PanelHeader,PanelFooter,PanelContent,
    Input,Label,LabelGroup,
    FormGroup,RadioGroup,CheckboxGroup,Select} from '../../../src/index.js';


let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

    }

    show(){
        console.debug(1);
    }
    render(){
        return (
            <Grid fluid>
                <Row>
                    <Col>
                        <h3>无嵌套panel</h3>
                    </Col>
                </Row>
                <Row>
                    <Col end>
                        <Panel>
                            <PanelHeader>title</PanelHeader>
                            <PanelContent>
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

                            </PanelContent>
                            <PanelFooter>heiheihei</PanelFooter>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>panel嵌套<small>通过设置panel的heading属性达到此效果</small></h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel heading="我是标题">
                            <PanelContent>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={2}>姓名</Col>
                                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>姓名</Col>
                                                <Col sm={10}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>性别</Col>
                                                <Col sm={10}>
                                                    <RadioGroup defaultChecked="男" name="radio-sex">
                                                        <Input  type="radio"  label="男" value="男" />
                                                        <Input  type="radio"  label="女" value="女"  />
                                                    </RadioGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>体育爱好</Col>
                                                <Col sm={10}>
                                                    <CheckboxGroup>
                                                        <Input  type="checkbox" label="足球" checked   />
                                                        <Input  type="checkbox" label="篮球"    />
                                                        <Input  type="checkbox" label="羽毛球" checked   />
                                                        <Input  type="checkbox" label="乒乓球"    />
                                                    </CheckboxGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>姓名</Col>
                                                <Col sm={13}><Input name="test" id="test" placeholder="请输入姓名"   /></Col>
                                                <FormGroup>
                                                    <Col sm={13}>出生日期</Col>
                                                    <Col sm={13} end><Input name="test" id="test" placeholder="请输入出生日期"   /></Col>
                                                </FormGroup>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>所在城市</Col>
                                                <Col sm={10} layer>
                                                    <Row style={{margin:0}}>
                                                        <Col sm={4} end>
                                                            <Select placeholder="请选择城市" >
                                                                <item value='bei'>北京</item>
                                                                <item value='shang'>上海</item>
                                                                <item value='nan'>南京</item>
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col padding={'0'}>
                                        <Panel heading="我是标题二">
                                            <PanelContent padding={true}>
                                                我是下一个内容区
                                            </PanelContent>
                                        </Panel>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col padding={'0'}>
                                        <Panel heading="我是标题三" >
                                            <PanelContent padding={true}>
                                                我是下一个内容区
                                            </PanelContent>
                                        </Panel>
                                    </Col>

                                </Row>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>默认嵌套</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel>
                            <PanelHeader>另一种形式的嵌套</PanelHeader>
                            <PanelContent>
                                <Panel>
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Panel>
                                                    <PanelHeader>另一种形式的嵌套3</PanelHeader>
                                                    <PanelContent>
                                                        <Row>
                                                            <Col>
                                                                我是内容区
                                                            </Col>
                                                        </Row>
                                                    </PanelContent>
                                                </Panel>
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                                <Panel>
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>设置<span className="color-primary">egType="normal"</span>后的嵌套效果</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel egType="normal">
                            <PanelHeader>另一种形式的嵌套</PanelHeader>
                            <PanelContent>
                                <Panel egType="normal">
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Panel  margin={'0'}>
                                                    <PanelHeader>另一种形式的嵌套3</PanelHeader>
                                                    <PanelContent>
                                                        <Row>
                                                            <Col>
                                                                我是内容区
                                                            </Col>
                                                        </Row>
                                                    </PanelContent>
                                                </Panel>
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                                <Panel margin={'0'}>
                                    <PanelHeader>另一种形式的嵌套2</PanelHeader>
                                    <PanelContent>
                                        <Row>
                                            <Col>
                                                我是内容区
                                            </Col>
                                        </Row>
                                    </PanelContent>
                                </Panel>
                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
            </Grid>


        );
    }
};

export default Demo;


