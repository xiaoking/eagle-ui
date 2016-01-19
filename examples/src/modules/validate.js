/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Tabset,Tab,CalendarPanel,ValidatorPanel,Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from '../../../src/index';




let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);


        this.rules = {
            //key对应的是表单元素的name
            calendar:{
                //组件默认规则
                required:true
            },
            userName:{
                required:true
            },
            checkbox:{
                required:true,
                //自定义规则
                isValueToNumber:{
                    text:'value值不是字符串',
                    rule:function(value){
                        console.dir(value);
                        //return isNaN(value);
                        return true;
                    }
                }
            },
            date:{
                date:true
            },
            number:{
                number:true,
                digits:true
            },
            equalTo:{
                digits:true,
                equalTo:{
                    params:'[name="number"]'
                }

            },
            minlength:{
                minlength:{
                    params:10
                },
                maxlength:{
                    params:15
                }
            },
            email:{
                email:true
            }
        };

        this.state={
            showTab:0,
            update:'uid',
            show:false
        };

    }

    show(value,text,target,active){
        console.dir(value);
    }

    getDialog(d){
        //this.dialog = d;
    }

    change(value){
       this.setState({
           showTab:value,
           update:'uid'+(+new Date())
       });

    }

    submit(vals){
        alert('验证成功'+JSON.stringify(vals));
    }

    showMask(){
        Dialog.mask('demo2');
    }

    checktab(){
        if(this.state.showTab =='1'){
            return (
                <div>
                <Row>
                    <Col>
                        <Input placeholder="请输入姓名"  name="userName" data-validate />
                    </Col>
                </Row>
                <Row>
                <Col>
                    <CheckboxGroup>
                    <Input  type="checkbox"  name="checkbox" value="1"  data-validate />
                    <Input  type="checkbox"   name="checkbox" value="2" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="3" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="4" data-validate  />
                    </CheckboxGroup>
                </Col>

                </Row>
                </div>
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <Panel>

                    <Grid>
                        <Tabset>
                            <Tab heading="demo1">
                                <Row>
                                    <Col>
                                        <PanelContent>
                                            <RadioGroup defaultChecked={this.state.showTab+''} name="radio-foot" getValueCallback={::this.change}>
                                                <Input  type="radio"  label="非必填项" value="0"  />
                                                <Input  type="radio"  label="必填项" value="1"   />
                                            </RadioGroup>
                                        </PanelContent>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8} end>
                                        <ValidatorPanel rules={this.rules} submitElement="#submit" direction="right" id="testFrom" update={this.state.update} submitCallback={::this.submit}>
                                            <Row>
                                                <Col>
                                                    <PanelContent>
                                                        <Row>
                                                            <Col>
                                                                <CalendarPanel>
                                                                    <Input placeholder="请选择日期" icon="calendar" name="date" data-validate />
                                                                </CalendarPanel>

                                                            </Col>
                                                        </Row>
                                                        {this.checktab()}
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请输入手机号码" name="number" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请再次确认手机号码" name="equalTo" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请输入您的email" name="email" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Button radius egSize="xs" id="submit" >点我提交表单</Button>
                                                            </Col>
                                                        </Row>
                                                    </PanelContent>
                                                </Col>
                                            </Row>

                                        </ValidatorPanel>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab heading="demo2">
                                <PanelContent>
                                    <Row>
                                        <Col>
                                            <Button onClick={::this.showMask}>弹出验证表单</Button>
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </Tab>
                        </Tabset>
                    </Grid>
                    <Dialog id="demo2" egSize="sm" title="表单验证">
                        <Grid>
                            <ValidatorPanel rules={this.rules} submitElement="#ssubmit" direction="top" id="testDialogFrom" submitCallback={::this.submit}>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入姓名"  name="userName" data-validate />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入有效的号码" name="number" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入有效的号码" name="equalTo" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入您的email" name="email" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button radius egSize="xs" id="ssubmit" >点我提交表单</Button>
                                    </Col>
                                </Row>
                            </ValidatorPanel>
                        </Grid>
                    </Dialog>
            </Panel>

        );
    }
};
export default Demo;