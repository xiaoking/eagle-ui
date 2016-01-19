/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';

import querystring from 'querystring';

import {Select,FormGroup,CalendarPanel,CheckboxGroup,RadioGroup,Grid,Row,Col,PanelContent,Panel,Input} from '../../../src/index.js';


let Demo= class Demo extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            show:false
        }
    };

    focus(){
        this.setState({
            show:true
        });
    }
    blur(){
        this.setState({
            show:false
        });
    }
    getValueCallback(val){
        alert(val);
        console.dir(val);
    }

    getValue(val){
        console.dir(val);
    }

    change(e){
        console.dir(e.target.value);
    }

    render(){

        return (
            <Panel>
                <PanelContent>
                <Grid>
                    <Row>
                        <Col sm={12}><Input name="test" id="test" placeholder="请输入" icon="calendar"  /></Col>
                        <Col sm={12}>
                            <CheckboxGroup>
                                <Input  type="checkbox" checked  disabled={true}  />
                                <Input  type="checkbox"  disabled={true}   />
                                <Input  type="checkbox" getValueCallback={::this.getValue}  value="ccc"  />
                                <Input  type="checkbox" checked onChange={::this.change} value="bbb"  />
                            </CheckboxGroup>
                        </Col>
                        <Col sm={12}>
                            <Col sm={6}>
                                <RadioGroup defaultChecked="石榴" name="radio-test">
                                    <Input  type="radio"  label="石榴" value="石榴" />
                                    <Input  type="radio"  label="橘子" value="橘子"  />
                                    <Input  type="radio"  label="苹果" value="苹果" />
                                </RadioGroup>
                            </Col>
                            <Col sm={6}>
                                <RadioGroup defaultChecked="鸡蛋" name="radio-foot" getValueCallback={this.getValueCallback}>
                                    <Input  type="radio"  label="大白菜" value="大白菜" />
                                    <Input  type="radio"  label="鸡蛋" value="鸡蛋" disabled={true}  />
                                    <Input  type="radio"  label="猪肉" value="猪肉" />
                                    <Input  type="radio"  label="牛肉" value="牛肉" />
                                    <Input  type="radio"  label="鱼肉" value="鱼肉" disabled={true} />
                                </RadioGroup>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h4>表单</h4></Col>
                    </Row>
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
                                    <FormGroup>
                                        <Col sm={13}>省份证</Col>
                                        <Col sm={13} end><Input name="test" id="test" placeholder="请输入省份证"   /></Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <Col sm={2}>所在城市</Col>
                                    <Col sm={10}>
                                        <Select placeholder="请选择城市" >
                                            <item value='bei'>北京</item>
                                            <item value='shang'>上海</item>
                                            <item value='nan'>南京</item>
                                        </Select>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
                </PanelContent>
            </Panel>
        );
    }
};


export default class InputCls extends Component{
    render(){
        return (
            <Demo />
        );
    }
}
