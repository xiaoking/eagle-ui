/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging,CheckboxGroup,List,Item} from '../../../src/index.js';

let SearchSec= class SearchSec extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={5}>
                        <Select  callback={function(val){alert(val)}}>
                            <item> 北京</item>
                            <item> 上海</item>
                            <item> 南京</item>
                        </Select>
                    </Col>
                    <Col sm={5}>
                        <Search placeholder='shopId/门店名称' callBack={function(val){alert(val)}}>
                        </Search>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
let FilterSec= class FilterSec extends Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <LabelGroup title='频道' defaultChecked='全部' clickCallback={this.show} >
                    <Label>全部</Label>
                    <Label>美</Label>
                    <Label>休闲娱乐</Label>
                    <Label>景点</Label>
                    <Label>购物</Label>
                    <Label>丽人</Label>
                    <Label>结婚</Label>
                    <Label>亲子</Label>
                    <Label>教育培训</Label>
                    <Label>运动健身</Label>
                    <Label>酒店</Label>
                    <Label>家装</Label>
                    <Label>酒店</Label>
                    <Label>爱车</Label>
                    <Label>酒店</Label>
                    <Label>医疗健康</Label>
                </LabelGroup>
                <LabelGroup title='行政区' defaultChecked='全部' clickCallback={this.show} >
                    <Label>全部</Label>
                    <Label>卢湾区</Label>
                    <Label>徐汇区</Label>
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

            </div>
        )
    }
};
var page=1;
let CardListPanel = class CardListPanel extends Component{

    constructor(props,context){
        super(props,context);
    }
    show(){
        console.debug(1);
    }
    render(){
        return (
            <Panel>
                <PanelHeader>
                    <CheckboxGroup>
                        <Input label="仅公海"  type="checkbox" checked />
                        <Input lebal="冻结中"  type="checkbox" />
                        <Input label="团购在线" type="checkbox"  />
                        <Input label="闪惠在线" type="checkbox"  />
                        <Input label="预订在线" type="checkbox"  />
                    </CheckboxGroup>
                </PanelHeader>
                <PanelContent padding={false}>
                    <List>
                        <Item className="shop-info-item">
                            <h1 className='shop-card-title inline-block'>
                                宴遇 (晶品店)
                            </h1>
                            <Label error radius> 团</Label>
                            <div className="shop-info-item-text">
                                <Grid>
                                    <Row>
                                        <Col sm={6}>
                                            shopid: 22936478 rotateid: 107126470
                                        </Col>
                                        <Col sm={6}>
                                            月佣金基数: 3000.00
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            浏览量：151195
                                        </Col>
                                        <Col sm={6}>
                                            门店市场份额:100.00%          战区市场份额: 94.63%
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col end sm={6}>
                                            美食其他 | 静安区 愚园路68号晶品中心4楼
                                        </Col>
                                    </Row>
                                </Grid>

                            </div>
                            <div className="shop-info-item-footer">
                                <Grid>
                                    <Row>
                                        <Col sm={10}>
                                            <LabelGroup simple clickCallback={this.show} >
                                                <Label>POI报错</Label>
                                                <Label>查看所有分店</Label>
                                            </LabelGroup>
                                        </Col>
                                        <Col sm={2}>
                                            <Label>想要这家店？</Label>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </Item>
                        <Item className="shop-info-item">
                            <h1 className='shop-card-title inline-block'>
                                宴遇 (晶品店)
                            </h1>
                            <Label error radius> 团</Label>
                            <div className="shop-info-item-text">
                                <Grid>
                                    <Row>
                                        <Col sm={6}>
                                            shopid: 22936478 rotateid: 107126470
                                        </Col>
                                        <Col sm={6}>
                                            月佣金基数: 3000.00
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            浏览量：151195
                                        </Col>
                                        <Col sm={6}>
                                            门店市场份额:100.00%          战区市场份额: 94.63%
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            美食其他 | 静安区 愚园路68号晶品中心4楼
                                        </Col>
                                        <Col sm={6}>
                                        </Col>
                                    </Row>
                                </Grid>

                            </div>
                            <div className="shop-info-item-footer">
                                <Grid>
                                    <Row>
                                        <Col sm={10}>
                                            <LabelGroup simple clickCallback={this.show} >
                                                <Label>POI报错</Label>
                                                <Label>查看所有分店</Label>
                                            </LabelGroup>
                                        </Col>
                                        <Col sm={2}>
                                            <Label>想要这家店？</Label>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </Item>
                        <Item className="shop-info-item">
                            <h1 className='shop-card-title inline-block'>
                                宴遇 (晶品店)
                            </h1>
                            <Label error radius> 团</Label>
                            <div className="shop-info-item-text">
                                <Grid>
                                    <Row>
                                        <Col sm={6}>
                                            shopid: 22936478 rotateid: 107126470
                                        </Col>
                                        <Col sm={6}>
                                            月佣金基数: 3000.00
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            浏览量：151195
                                        </Col>
                                        <Col sm={6}>
                                            门店市场份额:100.00%          战区市场份额: 94.63%
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            美食其他 | 静安区 愚园路68号晶品中心4楼
                                        </Col>
                                        <Col sm={6}>
                                        </Col>
                                    </Row>
                                </Grid>

                            </div>
                            <div className="shop-info-item-footer">
                                <Grid>
                                    <Row>
                                        <Col sm={10}>
                                            <LabelGroup simple clickCallback={this.show} >
                                                <Label>POI报错</Label>
                                                <Label>查看所有分店</Label>
                                            </LabelGroup>
                                        </Col>
                                        <Col sm={2}>
                                            <Label>想要这家店？</Label>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </Item>

                    </List>
                </PanelContent>
                <PanelFooter>
                    <Paging currentPage={page} total={1024} />
                </PanelFooter>
            </Panel>

        );
    }
};

export default class Test extends Component{
    render(){
        return (
            <Panel className='page-Panel'>
                <PanelContent>
                    <SearchSec />
                    <FilterSec />
                    <CardListPanel />
                </PanelContent>
            </Panel>
        );
    }
}


