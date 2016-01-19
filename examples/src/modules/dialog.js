/**
 * Created by min.xiao
 */
import React,{Component} from 'react';

import {Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from '../../../src/index';

let Demo= class Demo extends Component{

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
    }

    getScope(dialog){
        this.dialog = dialog;
    }

    show(name){
        Dialog.mask(name).then(function(){
            console.dir('...alert....');
            Dialog.close();
        },function(type){
            console.dir(type);
        });
    }

    showAlert(){
        Dialog.alert('哈哈，我是alert');
    }
    nomask(){
        Dialog.alert('哈哈，我是alert',{
            isMask:false
        });
    }

    showConfirm(){
        Dialog.confirm('确定你已经打开了么？').then(()=>{
            alert('确定');
        },()=>{
            alert('取消');
        });
    }

    render(){
        return (
            <div>
                <Button onClick={::this.show.bind(this,'demo1')} className="mg-right-15">点击我mask</Button>
                <Button onClick={::this.show.bind(this,'demo2')} className="mg-right-15">点击我mask2表单秀</Button>
                <Button onClick={::this.show.bind(this,'demo3')} className="mg-right-15">点击我mask3 outside</Button>
                <Button onClick={::this.showAlert} className="mg-right-15">点击我alert</Button>
                <Button onClick={::this.nomask} className="mg-right-15">无遮罩显示</Button>
                <Button onClick={::this.showConfirm}>点击我Confirm</Button>
                <Dialog id="demo1" egSize="xs" buttonAlign="right" title="苍老师你好" buttons={[
                    {
                        type: 'success',
                        name: '确认',
                        callback:()=>{}
                    },
                    {
                        type:'cancel',
                        egStyle:'white',
                        name:'取消',
                        callback:()=>{}
                    },
                    {
                        egStyle:'warning',
                        name:'自定义按钮',
                        callback:()=>{alert('自定义按钮');}
                    }
                    ]}>
                    <div>
                        哈哈，你好苍老师
                    </div>
                </Dialog>
                <Dialog id="demo2" egSize="sm" title="表单验证" buttons={[
                    {
                        type: 'success',
                        name: '提交',
                        callback:()=>{}
                    },
                    {
                        type:'cancel',
                        egStyle:'white',
                        name:'取消',
                        callback:()=>{}
                    }
                    ]}>
                    <Grid>
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
                    </Grid>
                </Dialog>
                <Dialog id="demo3" title="panel" outside egSize="lg">
                    <Panel egType="normal" margin="0">
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
                </Dialog>
            </div>
        );
        /*return (
         <Grid>
        <Row>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showDialog}>dialog</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showAlert}>alert</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showConfirm}>confirm</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showMsak}>mask</Button></Col>
        </Row>
            <Dialog type={this.state.type} show={this.state.show} title={this.state.title} ref={::this.getScope}>
            ahflaskdjflajsflajsdlf;jkasdfk
                adfkjasd;fkjas;dlf
                asdfkn;askdfnas
            </Dialog>
           </Grid>
        );*/
    }
    /*showDialog(){
        this.dialog.open('dialog');
    }
    showAlert(){
        this.dialog.open('alert');
    }
    showConfirm(){
        this.dialog.open('confirm');
    }
    showMsak(){
        this.dialog.open('mask');
    }*/
};

export default class DialogCls extends Component{
    render(){
        return (
            <Demo  />
        );
    }
}