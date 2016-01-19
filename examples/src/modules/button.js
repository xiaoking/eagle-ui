/**
 * Created by mac on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import ButtonGroup from '../../../src/ButtonGroup.js';
import Button from '../../../src/Button.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';
import Grid from '../../../src/Grid.js';

export default class ButtonCls extends Component{
    onActive(target,html){
        console.dir(html);
        alert('测试');
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col>
                        <ButtonGroup egType="justify" activeCallback={this.onActive}>
                            <Button radius egSize="sm" egStyle="warning">水平按钮组1</Button>
                            <Button radius egSize="sm" egStyle="warning">水平按钮组2</Button>
                            <Button radius egSize="sm" egStyle="warning">水平按钮组3</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ButtonGroup egType="tacked">
                            <Button radius egSize="sm" egStyle="">垂直按钮组1</Button>
                            <Button radius egSize="sm" egStyle="">垂直按钮组2</Button>
                            <Button radius egSize="sm" egStyle="">垂直按钮组3</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}><Button radius egSize="sm" egStyle="warning">警告</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="success">成功</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="danger">危险</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="error">错误</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button radius egSize="sm" egStyle="info">info</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" >默认</Button></Col>
                        <Col sm={3}><Button radius egSize="sm" egStyle="white">白色</Button></Col>
                    <Col sm={3}><Button radius egSize="sm" egStyle="white" disabled>白色</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="gray">灰色</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" >默认</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" disabled>默认不可点</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="white" disabled>白色不可点</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="success" disabled>成功不可点</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" >默认</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" disabled>默认不可点</Button></Col>
                    <Col sm={3}><Button block radius egSize="sm" egStyle="link" >链接</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block radius egSize="xs" egStyle="success" disabled>大号</Button></Col>
                    <Col sm={3}><Button block radius egSize="xs" >大号</Button></Col>
                    <Col sm={3}><Button block radius egSize="xs" disabled>大号</Button></Col>
                    <Col sm={3}><Button block radius egSize="xs" egStyle="link" >大号</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block radius egSize="lg" egStyle="success" disabled>小号</Button></Col>
                    <Col sm={3}><Button block radius egSize="lg" >小号</Button></Col>
                    <Col sm={3}><Button block radius egSize="lg" disabled>小号</Button></Col>
                    <Col sm={3}><Button block radius egSize="lg" egStyle="link" >小号</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block egSize="sm" egStyle="warning" hollow>警告</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="success" hollow>成功</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="danger" hollow>危险</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="error" hollow>错误</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block egSize="sm" egStyle="primary" hollow>primary</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="info" hollow>infp</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="default" hollow>default</Button></Col>
                </Row>
                <Row>
                    <Col sm={3}><Button block egSize="sm" egStyle="warning" disabled hollow>警告</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="success" disabled hollow>成功</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="danger" disabled hollow>危险</Button></Col>
                    <Col sm={3}><Button block egSize="sm" egStyle="error" disabled hollow>错误</Button></Col>
                </Row>
            </Grid>
        );
    }
}