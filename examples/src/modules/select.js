/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component,PropTypes}  from 'react';
import Select from '../../../src/Select.js';
import Button from '../../../src/Button.js';
import Grid from '../../../src/Grid.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';
let Demo= class Demo extends Component{

    static defaultProps = {
        input: true,
        keys:'bei'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: this.props.input
        }
    }

    getValue(value,key,type){
        let stype = {
            'init':'加载时调用',
            'enter':'回车时调用',
            'click':'点击每一项元素时调用'
        };
        document.getElementById('showtip').innerHTML = `<strong>${stype[type]}</strong>的值为：<b>"key":<span class="color-error">${key}</span></b>,<b>"value":<span class="color-error">${value}</span></b>`;
    }

    render(){
        return (
            <Grid fluid>
                <Row>
                    <Col sm={9} layer end>
                        <Row>
                            <Col sm={4} end>
                                <Select defaultChecked="上海" getValueCallback={::this.getValue} placeholder="请选择" >
                                    <option value='bei'>北京</option>
                                    <option value='shang'>上海</option>
                                    <option value='nan'>南京</option>
                                    <option value='3'>杭州</option>
                                    <option value='4'>杭州西</option>
                                    <option value='5'>杭州北站</option>
                                    <option value='6'>广州</option>
                                    <option value='7'>深圳</option>
                                    <option value='8'>澳门</option>
                                    <option value='10'>太原</option>
                                    <option value='11'>台湾</option>
                                    <option value='12'>香港</option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="showtip" className="color-info"></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Demo;