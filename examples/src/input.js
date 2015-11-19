/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component,PropTypes} from 'react';
import Input from '../../lib/Input.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import Grid from '../../lib/Grid.js';
import RadioGroup from '../../lib/RadioGroup.js';
import CalendarPanel from '../../lib/CalendarPanel.js';
import querystring from 'querystring';


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

    render(){

        return (
            <Grid>
                <Row>
                    <Col sm={12}><Input name="test" id="test" placeholder="请输入" icon="calendar"  /></Col>
                    <Col sm={12}>
                        <Input  type="checkbox" checked  disabled={true}  />
                        <Input  type="checkbox"  disabled={true}   />
                        <Input  type="checkbox"   />
                        <Input  type="checkbox" checked  />

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
                            <RadioGroup defaultChecked="鸡蛋" name="radio-foot">
                                <Input  type="radio"  label="大白菜" value="大白菜" />
                                <Input  type="radio"  label="鸡蛋" value="鸡蛋" disabled={true}  />
                                <Input  type="radio"  label="猪肉" value="猪肉" />
                                <Input  type="radio"  label="牛肉" value="牛肉" />
                                <Input  type="radio"  label="鱼肉" value="鱼肉" disabled={true} />
                            </RadioGroup>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));