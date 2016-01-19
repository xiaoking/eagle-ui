/**
 * Created by slashhuang on 15/12/25.
 */
import React,{Component} from 'react';
import querystring from 'querystring';

import {Search,Select, Input,Label,LabelGroup,Grid,Row,Col,Panel,PanelHeader,PanelFooter,PanelContent,Paging
    ,Tab,Tabset,Dialog,Item
    ,Table,Th,Td,Tr,Star,Button,Column,ImgSlider} from '../../../src/index.js';
//测试分页功能
let page = 1;
function callback(page){
    page = page;
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}

function loadPageCallback(pageSize){
    window.location = location.origin+location.pathname+'?page='+page+'&pageSize='+pageSize;
}
var pageSize = 20;
/*测试分页结束*/
/*测试照片展示插件*/
let imgList=[
    {
        profile:'1叔2015上传',
        url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
    },
    {
        profile:'1哥2015上传',
        url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img0.imgtn.bdimg.com/it/u=2544720638,729810412&fm=21&gp=0.jpg'
    },
    {
        profile:'2哥2015上传',
        url:'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
    },
    {
        profile:'3哥2015上传',
        url:'http://www.bz55.com/uploads/allimg/150309/139-150309101F2.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
    },
    {
        profile:'4哥2015上传',
        url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img0.imgtn.bdimg.com/it/u=2926840907,3192872789&fm=21&gp=0.jpg'
    },
    {
        profile:'5哥2015上传',
        url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101A8.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img5.imgtn.bdimg.com/it/u=4207978144,3154923917&fm=21&gp=0.jpg'
    },
    {
        profile:'5哥2015上传',
        url: 'http://img3.imgtn.bdimg.com/it/u=227823385,2843041802&fm=21&gp=0.jpg',
        description:'闪惠商户培训资料',
        thumbnail:'http://img2.imgtn.bdimg.com/it/u=1813764503,1895922603&fm=21&gp=0.jpg'
    },
    {
        profile:'5叔2015上传',
        url:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg',
        description:'熊猫野外生存',
        thumbnail:'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
    }
];
let pageNum = 4;

/*测试照片插件数据结束*/

export default class Detail extends Component{
    constructor(props){
       super(props);
        this.state={
            sliderShow:false
        }
    }
    getDialog(d){
        this.dialog = d;
    }
    handleSlider(){
        this.dialog.open();
    }
   buttonTest(){
       alert('hello fe');
   }
    closeDialog(){
        this.setState({
            sliderShow:false
        })
    }
    render(){
        {/*本示例用到的额外数据说明:

            数据模型:
            1.state={sliderShow:boolean}用于调取slider图片浏览插件

            样式:
            1.styleObj为示例用到的行内样式
            2.ft-gray,ft-orange,mg-bottom-10等为eagle-ui库定义的字体及布局样式,在public.less文件中，不需要自己定义
            3.detail-hollow-star,shop-detail-hui-icon为使用者自己定义的样式，放在'/example/index.html'之中,未放入项目库，要自己手写
            4.eg-item-flag样式为组件库提供的样式，定义每一大项左侧的小红条，可以直接调用

            函数:
            1.handleSlider用于加载slider图片浏览
            2.buttonTest定义页面所有的按钮动作

            变量:
            1.huiIconSrc 为闪惠图表的图片地址
        */}
        let query = this.props.location.query,
            page = query.page*1 ||0,
            pageSize = query.pageSize*1 || 10;
        let {sliderShow}=this.state;
        let huiIconSrc = location.origin+'/examples/imgs/thunder.png';
        let styleObj={
            visitMore:{/*定义有效拜访'收起''更多'样式*/
                //position:'absolute',
                //bottom:'1px',
                //right:'6px',
                cursor:'pointer'
            },
            visitReplay:{/*有效拜访回复样式*/
                padding:'10px ',
                background:"#f5f5f5",
                width:'100%',
                lineHeight:'18px'
            },
            visitLabel:{/*有效拜访样式*/
                color:'#ee5511',
                border:'1px solid #ee5511'
            },
            buttonGroup:{ /*页面底部按钮组*/
                position:'fixed',
                bottom:'1px',
                left:'1px',
                background:'#fff',
                padding:' 6px 10% 6px 50%',
                width:'100%',
                boxShadow:'0 -1px 2px rgba(0,0,0,0.5)'
            }
        };
        /*附近门店数据*/
        let nearByShops=[
            {
                name:' 70后饭吧(五角场店)',
                labels:['订','惠'],
                rate:80,
                customer:'大客户'
            },
            {
                name:' 80后饭吧(五角场店)',
                labels:['闪','惠'],
                rate:60,
                customer:'小客户'
            }
        ];

        return (
            <div style={{color:'#333'}}>
                {/*照片浏览组件(建议放在dom根节点附近)*/}
                <Dialog type={'mask'} ref={::this.getDialog}>
                    <ImgSlider showThumbnail show={sliderShow}
                            imgList={imgList} profileKey={'profile'} urlKey={'url'} titleKey={'description'}
                            pageNum={pageNum}/>
                </Dialog>
                {/*主页面*/}
                <Grid className='mg-bottom-40'>
                    <Row>
                        <Col sm={12}>
                            <h2>门店详情</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} style={{paddingRight:'5px'}}>
                            <Panel>
                                {/*门店信息*/}
                                <PanelContent>
                                    <Row>
                                        <Col sm={13} >
                                            <h3>美丽新世界(旗舰店)</h3>
                                            <h5 className={'ft-gray mg-left-10 mg-right-10 '}>shopID:237489</h5>
                                            <Label success >团</Label>
                                            <Label active  className={'mg-left-10'}>
                                                <span style={{position:'relative'}}>
                                                    惠
                                                 <i className='shop-detail-hui-icon'></i>
                                                </span>

                                            </Label>
                                            <Label disabled  className={'mg-left-10'}>订</Label>
                                        </Col>
                                        <Col sm={13}>
                                            <h5 className={'ft-gray' }>门店月浏览量</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={13} >
                                            <Star Rate={80} size={'17px'} />
                                            <h5 className={'ft-gray  mg-left-10'} style={{verticalAlign:'top',lineHeight:'17px'}}>大客户</h5>
                                        </Col>
                                        <Col sm={13} className='ft-orange'>
                                            198283
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>分类</h5>
                                            <span className={' mg-left-10'}>美食、小吃、快餐</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>地址</h5>
                                            <span className={' mg-left-10'}>上海市 杨浦区 国顺东路237-3（近银扣路）查看地图  </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>电话</h5>
                                            <span className={' mg-left-10'}>021-38475738 </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} >
                                            <h5 className={'ft-gray'}>分店</h5>
                                            <span className={' mg-left-10'}>3家 所有分店 </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={13} >
                                            <Button radius egSize="sm" egStyle="white" onClick={this.buttonTest}>查看主站页面</Button>
                                        </Col>
                                        <Col sm={13} className={'ft-gray mg-top-10'}>
                                            <h5 className={'detail-hollow-star mg-right-10'}></h5> |
                                            <h5 className={'ft-gray mg-left-10'}>已有21人关注</h5>
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                {/*市场份额信息*/}
                                <PanelContent>
                                    <Row>
                                        <Col sm={4}>
                                            <Row>
                                                <Col>
                                                    <h5 className={'ft-gray'} style={{marginRight:'10px'}}>当前日佣金基数</h5>
                                                    <h1 className={'ft-orange'}>307.32</h1>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={4}>
                                            <Row>
                                                <Col>
                                                    <h5 className={'ft-gray'} style={{marginRight:'10px'}}>战区市场份额</h5>
                                                    <h5>3.32%</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <h5 className={'ft-gray'} style={{marginRight:'10px'}}>门店市场份额</h5>
                                                    <h5>3.32%</h5>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={4}>
                                            <Row>
                                                <Col sm={5}>
                                                    <h5 className={'ft-gray'}>门店补贴</h5>
                                                </Col>
                                                <Col sm={7} style={{paddingLeft:0}}>
                                                    <h5>3.32%</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={5}>
                                                    <h5 className={'ft-gray'}>补贴原因</h5>
                                                </Col>
                                                <Col sm={7} style={{paddingLeft:0}}>在夏天的话，需要有一些降温的应急补贴</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                <PanelContent>
                                    <Item>
                                        <Row><Col className='mg-bottom-10'><h4 className='eg-item-flag'>合作信息</h4></Col></Row>
                                        {/*合作信息*/}
                                        <Row>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>上月闪惠交易额</h5>
                                            </Col>
                                            <Col sm={13}>
                                                <h4 className={'ft-blue'}>111,220,034</h4>
                                            </Col>
                                            <Col sm={13}>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>上月团购交易额</h5>
                                            </Col>
                                            <Col sm={13}>
                                                <h4 className={'ft-orange'}>111,220,034</h4>
                                            </Col>
                                            <Col sm={13}>
                                            </Col>
                                        </Row>
                                        <Row bottom>
                                            <Col sm={1}>
                                                <Label className='ft-12' active>订</Label>
                                            </Col>
                                            <Col sm={11}>每满100元减50</Col>
                                        </Row>
                                        <Row bottom>
                                            <Col sm={1}>
                                                <Label className='ft-12' success>惠</Label>
                                            </Col>
                                            <Col sm={11}>双人创意套餐A</Col>
                                        </Row>
                                        <Row bottom>
                                            <Col sm={1}>
                                                <Label className='ft-12' success>团</Label>
                                            </Col>
                                            <Col sm={3}>双人创意套餐A</Col>
                                            <Col sm={2}><h5 className={'ft-orange'} >￥12500</h5></Col>
                                            <Col sm={2}><h5 className={'ft-gray'} style={{textDecoration:'line-through'}}>￥13000</h5></Col>
                                            <Col sm={13}><h5 className={'ft-gray'} >已售120份</h5></Col>
                                        </Row>
                                    </Item>
                                    <Item >
                                        {/*联系人信息*/}
                                        <Row><Col className='mg-bottom-10'><h4 className='eg-item-flag'>联系人</h4></Col></Row>
                                        <Row bottom>
                                            <Col sm={3}>
                                                李牛牛
                                                <h5 className={'ft-orange mg-left-10'}>kp</h5>
                                            </Col>
                                            <Col sm={3}>老板/股东</Col>
                                            <Col sm={3}>123456789</Col>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>
                                                    <span onClick={this.buttonTest} className='hover-pointer'>编辑</span>
                                                    <span className={'mg-left-10'}>|</span>
                                                    <span className={'mg-left-10 hover-pointer'} onClick={this.buttonTest}>废弃</span>
                                                </h5>
                                            </Col>
                                        </Row>
                                        <Row bottom>
                                            <Col sm={3}>
                                                李牛牛
                                                <h5 className={'ft-gray mg-left-10'}>已废弃</h5>
                                            </Col>
                                            <Col sm={3}>老板/股东</Col>
                                            <Col sm={3}>123456789</Col>
                                            <Col sm={13}>
                                                <h5 className={'ft-gray'}>
                                                    <span onClick={this.buttonTest} className='hover-pointer'>  恢复</span>
                                                   </h5>
                                            </Col>
                                        </Row>
                                    </Item>
                                    <Item>
                                        <Row><Col className='mg-bottom-10'><h4 className={'eg-item-flag'}>拜访记录</h4></Col></Row>
                                        {/*拜访记录*/}
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>拜访人</h5>
                                                    <span className={' mg-left-10'}>王军</span>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>联系人</h5>
                                                    <span className={' mg-left-10'}>李大牛</span>
                                                    <h5 className={'mg-left-10 ft-orange'}> KP</h5>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                        2015-3-32<span className='mg-left-5'>礼拜一</span>
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={13}>
                                                    <Label className={'ft-12'} style={styleObj['visitLabel']}>
                                                        有效拜访
                                                    </Label>
                                                </Col>
                                                <Col sm={13}>
                                                    <Label>
                                                        <h5 className={'ft-gray'}>上门</h5>
                                                    </Label>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                        <Label className={'ft-gray'}>
                                                            <h5 className={'ft-gray'}>谈单</h5>
                                                        </Label>
                                                    </h5>
                                                </Col>
                                                <Col sm={1}></Col>
                                            </Row>
                                            <Row bottom>
                                                <Col className='no-pd-left-right'>
                                                    上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                    还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                    上周五去了一趟门店，感觉还是可以的。
                                                </Col>
                                                <Col sm={12} style={styleObj['visitReplay']}>
                                                    <div style={{marginBottom:'5px'}}>
                                                        <h5 className={'ft-gray'}>陪访人</h5>
                                                        <span className={' mg-left-10'}>李经理</span>
                                                    </div>
                                                    <div>
                                                        上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                        还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                        上周五去了一趟门店，感觉还是可以的。
                                                    </div>
                                                </Col>
                                                <Col sm={13} className={'mg-top-5'}>
                                                    <div style={styleObj['visitMore']}>
                                                        收起
                                                        <div className='eg-arrow-hollow-up mg-left-10'></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>拜访人</h5>
                                                    <span className={' mg-left-10'}>王军</span>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>联系人</h5>
                                                    <span className={' mg-left-10'}>李大牛</span>
                                                    <h5 className={'mg-left-10 ft-orange'}> KP</h5>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                        2015-3-32<span className='mg-left-5'>礼拜一</span>
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={13}>
                                                    <Label className={'ft-12'} style={styleObj['visitLabel']}>
                                                        有效拜访
                                                    </Label>
                                                </Col>
                                                <Col sm={13}>
                                                    <Label>
                                                        <h5 className={'ft-gray'}>上门</h5>
                                                    </Label>
                                                </Col>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}>
                                                        <Label className={'ft-gray'}>
                                                            <h5 className={'ft-gray'}>谈单</h5>
                                                        </Label>
                                                    </h5>
                                                </Col>
                                                <Col sm={1}></Col>
                                            </Row>
                                            <Row bottom>
                                                <Col className='no-pd-left-right'>
                                                    上周五去了一趟门店，感觉还是可以的，店主也是很有合作意向，但是
                                                    还要在跟进谈一谈细节，唯一的在阻碍时店主的帐目量，觉得手续费太高，不愿合作。
                                                    上周五去了一趟门店，感觉还是可以的。
                                                </Col>
                                                <Col sm={13} className={'mg-top-5'}>
                                                    <div style={styleObj['visitMore']}>
                                                        更多
                                                        <div className='eg-arrow-hollow-down mg-left-10'></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                        <Paging loadPageCallback={loadPageCallback}
                                                currentPage={page} pageSize={pageSize} pageCallback={callback} total={5024}></Paging>
                                    </Item>
                                    <Item>
                                        {/*关联客户*/}
                                        <Row><Col><h4 className='mg-bottom-10 eg-item-flag'>关联客户</h4></Col></Row>
                                        <Row>
                                            <Col>上海市舞虾餐饮有限公司(直营)</Col>
                                        </Row>
                                        <Row>
                                            <Col>上海市舞虾餐饮有限公司(加盟)</Col>
                                        </Row>
                                    </Item>
                                    <Item>
                                        {/*门店历史*/}
                                        <Row><Col><h4 className='mg-bottom-10 eg-item-flag'>门店历史</h4></Col></Row>
                                        <Grid>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}> 2014-5-12</h5>
                                                </Col>
                                                <Col sm={13} end>孙大力
                                                    <h5 className={'ft-gray'}>将</h5>
                                                    维护销售
                                                    <h5 className={'ft-gray'}>从</h5>
                                                    李啦啦
                                                    <h5 className={'ft-gray'}> 变更为</h5>
                                                    孙大力
                                                    <h5 className={'ft-orange'}>(门店系统变更)</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={13}>
                                                    <h5 className={'ft-gray'}> 2014-5-12</h5>
                                                </Col>
                                                <Col sm={13} end>孙大力
                                                    <h5 className={'ft-gray'}>将</h5>
                                                    维护销售
                                                    <h5 className={'ft-gray'}>从</h5>
                                                    李啦啦
                                                    <h5 className={'ft-gray'}> 变更为</h5>
                                                    孙大力
                                                    <h5 className={'ft-orange'}>(门店系统变更)</h5>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Item>
                                </PanelContent>
                            </Panel>
                        </Col>
                        <Col sm={4}>
                            <Panel>
                                <PanelContent>
                                    <Item>
                                        {/*归属信息*/}
                                        <Row>
                                            <Col>
                                                <h4 className='eg-item-flag'> 归属信息</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4}>
                                                <h5 className={'ft-gray'}> 责任销售</h5>
                                            </Col>
                                            <Col sm={8} className={'no-pd-left-right'}>
                                                老大哥
                                                <span className={' mg-left-10'}> 剩余12天</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    组织
                                                </h5>
                                            </Col>
                                            <Col sm={8} className={'no-pd-left-right'}>
                                                上海大客户团购1-1组
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    战区</h5>
                                            </Col>
                                            <Col sm={8} className={'no-pd-left-right'}>
                                                上海公海
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4} >
                                                <h5 className={'ft-gray'}>
                                                    电话</h5>
                                            </Col>
                                            <Col sm={8} className={'no-pd-left-right'}>
                                                15005162976
                                            </Col>
                                        </Row>
                                    </Item>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                <PanelContent >
                                    <Item>
                                        {/*归属信息*/}
                                        <Row>
                                            <Col>
                                                <h4 className='eg-item-flag'>pop</h4>
                                            </Col>
                                            <Col style={{width:'100%',height:'auto',position:'relative'}}>
                                                <img src={imgList[0]['url']} onClick={this.handleSlider.bind(this)} style={{cursor:'pointer',display:'block'}}/>
                                                <div style={{position:'absolute',bottom:'10px',right:'25px',color:'#fff'}}>共{imgList.length}张</div>
                                            </Col>
                                        </Row>
                                    </Item>
                                </PanelContent>
                            </Panel>
                            <Panel>
                                <PanelContent >
                                    <Item>
                                        {/*附近同类门店*/}
                                        <Row><Col><h4 className='eg-item-flag'>附近同类门店</h4></Col></Row>
                                        {
                                          nearByShops.map((shop,index)=>{
                                              return (
                                                  <Grid className={'pd-top-bottom-10'} key={'shop-'+index}>
                                                      <Row>
                                                          <Col sm={12} >
                                                             {shop['name']}
                                                              {
                                                                  shop['labels'].map((label,labelIndex)=>{
                                                                    return  <Label success className={'mg-left-10 ft-12'} key={'label-'+index+'-'+labelIndex}>
                                                                        {label}</Label>
                                                                  })
                                                              }
                                                          </Col>
                                                      </Row>
                                                      <Row bottom className={'pd-bottom-15 pd-top-0'}>
                                                          <Col className={'no-pd-top-bottom'}>
                                                              <Star Rate={shop['rate']} size={'16px'} />
                                                              <h5 className={'ft-gray mg-left-5'}  style={{verticalAlign:'top',lineHeight:'16px'}}>
                                                                  {shop['customer']}
                                                              </h5>
                                                          </Col>
                                                      </Row>
                                                  </Grid>
                                              )
                                          })

                                        }
                                        <Grid className={'pd-top-bottom-10'}>
                                            <Row>
                                                <Col sm={12} >
                                                    70后饭吧(五角场店)
                                                    <Label success className={'mg-left-10 ft-12'}>订</Label>
                                                    <Label active className={'mg-left-10 ft-12'}>惠</Label>
                                                </Col>
                                            </Row>
                                            <Row bottom className={'pd-bottom-15 pd-top-0'}>
                                                <Col className={'no-pd-top-bottom'}>
                                                    <Star Rate={80} size={'16px'} />
                                                    <h5 className={'ft-gray mg-left-5'}  style={{verticalAlign:'top',lineHeight:'16px'}}>
                                                        大客户</h5>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Item>
                                </PanelContent>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={ styleObj['buttonGroup']}>
                    <Col sm={13}>
                        <Button radius egSize="sm" egStyle="white" onClick={this.buttonTest}>报错</Button>
                    </Col>
                    <Col  sm={13}>
                        <Button radius egSize="sm" egStyle="white"  onClick={this.buttonTest}>添加联系人</Button>
                    </Col>
                    <Col sm={13}>
                        <Button radius egSize="sm" egStyle="white"  onClick={this.buttonTest}>拜访</Button>
                    </Col>
                    <Col sm={13} end>
                        <Button radius egSize="sm" onClick={this.buttonTest}>释放</Button>
                    </Col>

                </Grid>
            </div>
        );
    }
}


