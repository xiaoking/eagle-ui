/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import Input from '../../lib/Input.js';
import Button from '../../lib/Button.js';
import Row from '../../lib/Row.js';
import Panel from '../../lib/panel/Panel.js';
import PanelContent from '../../lib/panel/PanelContent.js';
import Col from '../../lib/Col.js';
import Grid from '../../lib/Grid.js';
import RadioGroup from '../../lib/RadioGroup.js';
import ValidatorPanel from '../../lib/ValidatorPanel.js';
import CalendarPanel from '../../lib/CalendarPanel.js';

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
                        return isNaN(value);
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
            update:'uid'
        };

    }

    show(value,text,target,active){
        console.dir(value);
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
                    <Input  type="checkbox"  name="checkbox" value="1"  data-validate />
                    <Input  type="checkbox"   name="checkbox" value="2" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="3" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="4" data-validate  />
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
                        <Row>
                            <Col>
                                <PanelContent>
                                    <RadioGroup defaultChecked={this.state.showTab+''} name="radio-foot" getValueCallback={::this.change}>
                                        <Input  type="radio"  label="显示第一个表单元素" value="0"  />
                                        <Input  type="radio"  label="显示第二个表单元素" value="1"   />
                                    </RadioGroup>
                                </PanelContent>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5} end>
                                <ValidatorPanel rules={this.rules} submitElement="#submit" direction="right" id="testFrom" update={this.state.update} submitCallback={::this.submit}>
                                    <Row>
                                        <Col>
                                            <PanelContent>
                                                <Row>
                                                    <Col>
                                                        <CalendarPanel>
                                                            <Input placeholder="请选择日期" icon="calendar" name="date" style={{width:'150px'}} data-validate />
                                                        </CalendarPanel>

                                                    </Col>
                                                </Row>
                                                {this.checktab()}
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
                                                        <Button radius egSize="xs" id="submit" >点我提交表单</Button>
                                                    </Col>
                                                </Row>
                                            </PanelContent>
                                        </Col>
                                    </Row>

                                </ValidatorPanel>
                            </Col>
                        </Row>
                    </Grid>

            </Panel>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));