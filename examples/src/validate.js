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
import ValidatorPanel from '../../lib/ValidatorPanel.js';

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);


        this.rules = {
            //key对应的是表单元素的name
            calendar:{
                //组件默认规则
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

    }

    show(value,text,target,active){
        console.dir(value);
    }

    render(){
        return (
            <Panel>

                    <Grid>
                        <Row>
                            <Col sm={5} end>
                                <ValidatorPanel rules={this.rules} submitElement="#submit">
                                    <Row>
                                        <Col>
                                            <PanelContent>
                                                <Row>
                                                    <Col>
                                                        <Input placeholder="请输入" icon="calendar" name="calendar" data-validate />
                                                        <Input  type="checkbox"  name="checkbox" value="1"  data-validate />
                                                        <Input  type="checkbox"   name="checkbox" value="2" data-validate  />
                                                        <Input  type="checkbox"   name="checkbox" value="3" data-validate  />
                                                        <Input  type="checkbox"   name="checkbox" value="4" data-validate  />
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input placeholder="请输入日期" icon="calendar" name="date" data-validate />
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
                                                        <Button radius egSize="xs" id="submit">点我提交表单</Button>
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