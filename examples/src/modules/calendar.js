/**
 * Created by mac on 15/11/4.
 */
import React,{Component,PropTypes} from 'react';
import Input from '../../../src/Input.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';
import Grid from '../../../src/Grid.js';
import CalendarPanel from '../../../src/CalendarPanel.js';
import querystring from 'querystring';


export default class Calendar extends Component{
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
                <Col sm={12}>
                    <CalendarPanel startDate="2015-11-11">
                        <Input placeholder="请选择日期" style={{width:'150px'}} />
                    </CalendarPanel>

                </Col>
                <Col sm={1} end>
                    每日邮报报道,英国华威大学划艇队推出了2016年新版裸体日历,小伙子们在镜头前“坦诚相见”,大秀肌肉。这是该校划艇队第六次拍摄这种日历。 长期锻炼的队员们骄傲的
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <CalendarPanel startDate="2015-11-11" endDate="2015-12-1">
                        <Input placeholder="请选择日期" style={{width:'150px'}} />
                    </CalendarPanel>
                </Col>
            </Row>
            </Grid>
        );
    }
}