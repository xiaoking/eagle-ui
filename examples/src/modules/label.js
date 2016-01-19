/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import {Label,LabelGroup,Panel,Grid,Row,Col,PanelContent} from '../../../src/index.js';

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

    }

    show(value,text,target,active){
        console.dir(value);
    }

    render(){
        return (
            <Panel style={{
                margin:'20px'
            }}>
                <PanelContent >
                    <Grid>
                        <Row>
                            <Col>
                                <h3>标签组</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LabelGroup spacing={94} title='行政区' defaultChecked='全部' activeCallback={this.show} end>
                                    <Label value="0" className="all">全部</Label>
                                    <Label value="1">卢湾区</Label>
                                    <Label value="10">徐汇区</Label>
                                    <Label>静安区</Label>
                                    <Label>长宁区</Label>
                                    <Label>闵行区</Label>
                                    <Label>浦东新区</Label>
                                    <Label>黄浦区</Label>
                                    <Label>普陀区</Label>
                                    <Label>闸北区</Label>
                                    <Label>虹口区</Label>
                                    <Label>杨浦区</Label>
                                    <Label>宝山区</Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LabelGroup title='商品类型' defaultChecked='全部' activeCallback={this.show} end>
                                    <Label value="0" className="all">全部</Label>
                                    <Label value="1">卢湾区</Label>
                                    <Label value="10">徐汇区</Label>
                                    <Label>静安区</Label>
                                    <Label>长宁区</Label>
                                    <Label>闵行区</Label>
                                    <Label>浦东新区</Label>
                                    <Label>黄浦区</Label>
                                    <Label>普陀区</Label>
                                    <Label>闸北区</Label>
                                    <Label>虹口区</Label>
                                    <Label>杨浦区</Label>
                                    <Label>宝山区</Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LabelGroup defaultChecked='卢湾区' activeCallback={this.show} end>
                                    <Label value="0">全部</Label>
                                    <Label value="1">卢湾区</Label>
                                    <Label value="10">徐汇区</Label>
                                    <Label>静安区</Label>
                                    <Label>长宁区</Label>
                                    <Label>闵行区</Label>
                                    <Label>浦东新区</Label>
                                    <Label>黄浦区</Label>
                                    <Label>普陀区</Label>
                                    <Label>闸北区</Label>
                                    <Label>虹口区</Label>
                                    <Label>杨浦区</Label>
                                    <Label>宝山区</Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>普通标签组</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LabelGroup egType="simple" activeCallback={this.show}>
                                    <Label value="0">全部</Label>
                                    <Label value="1">卢湾区</Label>
                                    <Label value="10">徐汇区</Label>
                                    <Label>静安区</Label>
                                    <Label>长宁区</Label>
                                    <Label>闵行区</Label>
                                    <Label url="http://baidu.com">点击跳转至百度</Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>form标签组</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1">121212121</Label>
                                </LabelGroup>
                            </Col>
                            <Col sm={6}>
                                <LabelGroup egType="form" >
                                    <Label value="0">当前日佣金基数</Label>
                                    <Label value="1"><h1 className="color-error">9112</h1></Label>
                                </LabelGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>单个标签</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <Label active egSize="xs">选中</Label>
                            </Col>
                            <Col sm={2}>
                                <Label  egStyle="success">成功</Label>
                            </Col>
                            <Col sm={2}>
                                <Label  egStyle="error">错误</Label>
                            </Col>
                            <Col sm={2}>
                                <Label disabled>禁用</Label>
                            </Col>
                            <Col sm={2}>
                                <Label egStyle="warning" egSize="lg" >warning</Label>
                            </Col>
                            <Col sm={2}>
                                <Label >默认</Label>
                            </Col>
                        </Row>
                    </Grid>
                </PanelContent>
            </Panel>
        );
    }
};

export default class LabelCls extends Component{
    render(){
        return (
            <Demo />
        );
    }
}
