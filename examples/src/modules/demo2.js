/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging
    ,Tab,Tabset,Dialog
    ,Table,Th,Td,Tr} from '../../../src/index.js';


let ShopDialog= class ShopDialog extends Component{

    static propTypes={

    };
    static defaultProps = {
        show:false
    };
    render(){
        return (
            <Dialog type='dialog' title='详情' show={this.props.show}>
                <Grid>
                    <Row>
                        <Col sm={3}>
                            ID
                        </Col>
                        <Col sm={9}>
                            <Input value='26161' type='text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            名称
                        </Col>
                        <Col sm={9}>
                            <Input value='宴遇（厦门）餐饮管理服务有限公司' type='text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            主体类型
                        </Col>
                        <Col sm={9}>
                            <Select>
                                <item> 内资公司</item>
                                <item> 上</item>
                                <item> 南京</item>
                            </Select>
                        </Col>
                    </Row>
                </Grid>

            </Dialog>
        );
    }
};

let TabContainer= class TabContainer extends Component{
    static defaultProps = {
    }
    constructor(props,context){
        super(props,context);
        this.state = {
            show:false

        };
    }
    toggleDialog(){
        this.setState({
            show:!this.state.show
        });
    }
    render(){
        return (
            <div>
                <ShopDialog show={this.state.show} />
                <Tabset activeTab={2}>
                    <Tab heading='联系人'>
                        暂无权限
                    </Tab>
                    <Tab heading='拜访记录'>
                        暂无权限
                    </Tab>
                    <Tab heading='关联客户'>
                        <Panel className='customer-panel'>
                            <PanelContent>
                                <Table>
                                    <thead>
                                    <Tr>
                                        <Th>客户编号</Th>
                                        <Th>客户名称</Th>
                                        <Th>操作</Th>
                                    </Tr>
                                    </thead>
                                    <tbody>
                                    <Tr>
                                        <Td>26161</Td>
                                        <Td>宴遇（厦门）餐饮管理服务有限公司</Td>
                                        <Td>
                                            <Label clickCallback={::this.toggleDialog}>
                                                详情
                                            </Label>
                                        </Td>
                                    </Tr>
                                    </tbody>
                                </Table>

                            </PanelContent>
                            <PanelFooter>
                                <Paging currentPage={1} total={30} />
                            </PanelFooter>
                        </Panel>
                    </Tab>
                    <Tab heading='门店变更历史'>
                        <Panel className='shop-change-panel'>
                            <PanelContent>
                                <Table>
                                    <thead>
                                    <Tr>
                                        <Th>数据类型</Th>
                                        <Th>数据项</Th>
                                        <Th>昨日</Th>
                                        <Th>本月</Th>
                                        <Th>上月</Th>
                                        <Th>本月城市排名</Th>
                                    </Tr>
                                    </thead>
                                    <tbody>
                                    <Tr>
                                        <Td rowSpan="4">过程指标</Td>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td arrow-up>消费交易额</Td>
                                        <Td arrow-down>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr split>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td arrow-down>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td rowSpan="4">业绩</Td>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>消费交易额</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>1876500</Td>
                                        <Td>200</Td>
                                    </Tr>
                                    </tbody>
                                </Table>

                            </PanelContent>
                            <PanelFooter>
                                <Paging currentPage={1} total={30} />
                            </PanelFooter>
                        </Panel>
                    </Tab>
                </Tabset>
            </div>
        )
    }
};

export default class TestCls extends Component{
    render(){
        return (
            <Panel className='page-Panel'>
                <PanelContent>
                    <Panel className='shop-card-panel'>
                        <PanelContent padding={false}>
                            <Grid>
                                <Row>
                                    <Col sm={7}>
                                        <div className="shop-info-item-text">
                                            <Grid>
                                                <Row>
                                                    <Col sm={12}>
                                                        <h1 className='shop-card-title inline-block'>
                                                            宴遇 (晶品店)
                                                        </h1>
                                                        <span className='shop-id'>ShopID: 22936478</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>类别</span>
                                                        <span className='row-value'>创意菜</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>月佣金基数</span>
                                                        <span className='row-value'>3000.00</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>门店补贴</span>
                                                        <span className='row-value'>无</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>门店市场份额</span>
                                                        <span className='row-value'>100.00%</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>战区市场份额</span>
                                                        <span className='row-value'>94.82%</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>地址</span>
                                                        <span className='row-value'>愚园路68号晶品中心4楼</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>电话</span>
                                                        <span className='row-value'>66855556</span>
                                                    </Col>
                                                </Row>
                                            </Grid>

                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <div className="shop-info-item-text">
                                            <Grid>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>责任销售</span>
                                                        <span className='row-value'>王文淞</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>部门</span>
                                                        <span className='row-value'>厦门团购大客户1组</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <span className='row-key'>销售手机</span>
                                                        <span className='row-value'>13799553669</span>
                                                    </Col>
                                                </Row>
                                            </Grid>

                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </PanelContent>
                    </Panel>
                    <TabContainer />
                </PanelContent>
            </Panel>
        );
    }
}


