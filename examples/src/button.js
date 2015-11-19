/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import ButtonGroup from '../../lib/ButtonGroup.js';
import Button from '../../lib/Button.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import Grid from '../../lib/Grid.js';

ReactDOM.render(
    <Grid>
        <Row>
            <Col sm={12}>
                <ButtonGroup justify>
                    <Button radius egSize="sm" egStyle="warning">水平按钮组</Button>
                    <Button radius egSize="sm" egStyle="warning">水平按钮组</Button>
                    <Button radius egSize="sm" egStyle="warning">水平按钮组</Button>
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <ButtonGroup tacked>
                    <Button radius egSize="sm" egStyle="">垂直按钮组</Button>
                    <Button radius egSize="sm" egStyle="">垂直按钮组</Button>
                    <Button radius egSize="sm" egStyle="">垂直按钮组</Button>
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
            <Col sm={3}><Button radius egSize="sm" egStyle="gray">灰色</Button></Col>
            <Col sm={3}><Button radius egSize="sm" >默认</Button></Col>
            <Col sm={3}><Button radius egSize="sm" egStyle="white">白色</Button></Col>
            <Col sm={3}><Button radius egSize="sm" egStyle="white">白色</Button></Col>
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
    </Grid>
    ,document.getElementById('root'));