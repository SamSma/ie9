import React,{ Component } from 'react';
import { Icon,Tabs,Row,Col,Card } from 'antd';
import {Map, Marker, NavigationControl} from 'react-bmap';

import './index.less';

const TabPane = Tabs.TabPane;

export default class Content extends Component {
    render (){
        return (
            <div>
                <div className="conModule">
                    <div className="content">
                        <div className="conTil">
                            <span className="conTilLine"></span>
                            <span className="conTilWz">空间介绍</span>
                            <span className="conTilYw">SPACE INTRODUCTION</span>
                        </div>
                        <div className="conInfo conIntro">
                            <p>忽米网位于大坪商务圈虎头岩转盘，坐落于重庆总部经济区内，处于城市交通网络交汇位置的万科023创意天地4号楼。</p>
                            <p>忽米网所处区域“三横三纵三轻轨”，将五大商圈链接为15分钟生活圈；周边形成以英利国际、龙湖时代天街、重庆天地、星光天地等90万方顶级商务配套；</p>
                            <p>240亩虎头岩城市花园提供运动中心和临崖观廊等氧吧服务。</p>
                            <p>多功能会议室全面支持异地会议，茶水间、休闲娱乐区等一应俱全。</p>
                        </div>
                    </div>
                </div>
                <div className="conModule">
                    <div className="content">
                        <div className="conTil">
                            <span className="conTilLine"></span>
                            <span className="conTilWz">空间特色</span>
                            <span className="conTilYw">SPACE CHARACTERISTIC</span>
                        </div>
                        <div className="conInfo">
                            <img src={require('../../common/images/space/characImg.png')} alt="空间特色"/>
                        </div>
                    </div>
                </div>
                 <div className="conModule">
                     <div className="content">
                         <div className="conTil">
                             <span className="conTilLine"></span>
                             <span className="conTilWz">空间服务</span>
                             <span className="conTilYw">SPACE SERVICE</span>
                         </div>
                         <div className="conInfo">
                             <img src={require('../../common/images/space/spaceServiceImg.png')} alt="空间服务"/>
                         </div>
                     </div>
                 </div>
                 <div className="conModule conEnteService">
                     <div className="content">
                         <div className="conTil">
                             <span className="conTilLine"></span>
                             <span className="conTilWz">企业服务</span>
                             <span className="conTilYw">ENTERPRISE SERVICE</span>
                         </div>
                         <div className="conInfo conEnteService">
                             <Tabs type="card">
                                 <TabPane tab="工商注册" key="1">
                                     <Row>
                                         <Col span={6}>
                                             <img src={require("../../common/images/space/enteServiceImg.png")} alt="企业服务"/>
                                             <div className="conRegTop">
                                                 <p>全程专人办理</p>
                                                 <span>线上提交资料，足不出户即可完成办理</span>
                                             </div>
                                             <div className="conRegBottom">
                                                 <span>公司注册</span>
                                                 <span>公司变更</span>
                                                 <span>资质办理</span>
                                             </div>
                                         </Col>
                                         <Col span={6}>
                                             <div className="conRegService">
                                                 <p className="conRegName">外资独资公司注册</p>
                                                 <p className="conRegIntro">与全球经济接轨</p>
                                                 <p className="conRegPrice">1元起</p>
                                             </div>
                                             <div className="conRegService">
                                                 <p className="conRegName">公司股权变更</p>
                                                 <p className="conRegIntro">工商、税务、法务一步到位</p>
                                                 <p className="conRegPrice">100元起</p>
                                             </div>
                                             <div className="conRegService">
                                                 <p className="conRegName">网络文化经营许可证</p>
                                                 <p className="conRegIntro">“三证合一，一照一码”，告别旧执照</p>
                                                 <p className="conRegPrice">6000元起</p>
                                             </div>
                                         </Col>
                                         <Col span={6}>
                                             <div className="conRegService conRegLarge">
                                                 <p className="conRegName">有限责任公司注册</p>
                                                 <p className="conRegIntro">办理营业执照是开公司第一步</p>
                                                 <p className="conRegPrice">1元起</p>
                                                 <a href="" className="conRegBtn">查看详情</a>
                                             </div>
                                             <div className="conRegService">
                                                 <p className="conRegName">ICP经营许可证</p>
                                                 <p className="conRegIntro">系统反馈进度，服务流程透明</p>
                                                 <p className="conRegPrice">588元起</p>
                                             </div>
                                         </Col>
                                         <Col span={6}>
                                             <div className="conRegRead">
                                                 <div className="conReadTil">
                                                    <span>创业必读</span>
                                                 </div>
                                                 <div className="conReadList">
                                                    <div className="conReadSingle">
                                                        <a href="">
                                                            <img src={require("../../common/images/space/readIcon1.png")} alt="世上最全开公司指南"/>
                                                            <span>世上最全开公司指南</span>
                                                        </a>
                                                    </div>
                                                     <div className="conReadSingle">
                                                         <a href="">
                                                             <img src={require("../../common/images/space/readIcon2.png")} alt="公司注销指南"/>
                                                             <span>公司注销指南</span>
                                                         </a>
                                                     </div>
                                                     <div className="conReadSingle">
                                                         <a href="">
                                                             <img src={require("../../common/images/space/readIcon3.png")} alt="商标注册，企业必须知道的五个问题"/>
                                                             <span>商标注册，企业必须知道的五个问题</span>
                                                         </a>
                                                     </div>
                                                 </div>
                                             </div>
                                         </Col>
                                     </Row>
                                 </TabPane>
                                 <TabPane tab="财税服务" key="2">Content of Tab Pane 2</TabPane>
                                 <TabPane tab="知识产权" key="3">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="法律服务" key="4">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="人资社保" key="5">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="微信服务" key="6">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="开发&视觉设计" key="7">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="市场推广" key="8">Content of Tab Pane 3</TabPane>
                                 <TabPane tab="新媒体服务" key="9">Content of Tab Pane 3</TabPane>
                             </Tabs>
                         </div>
                     </div>
                 </div>
                <div className="conModule conBg conMap">
                    <div className="content">
                        <div className="conTil">
                            <span className="conTilLine"></span>
                            <span className="conTilWz">地理位置</span>
                            <span className="conTilYw">SPACE LOCATION</span>
                        </div>
                        <div className="conInfo">
                            <Map center={{lng: 106.553841, lat: 29.572964}} zoom="13">
                                <Marker position={{lng: 106.553841, lat: 29.572964}} />
                                <NavigationControl />
                            </Map>
                            <div className="conMapAddress">
                                <div className="f-left">
                                    <Icon type="environment" />
                                    <span>重庆市九龙坡区万科023创意天地4号楼</span>
                                </div>
                                <div className="f-right">
                                    <a href="" className="conMapAll">
                                        <Icon type="search" />
                                        <span>查看完整地图</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conModule conActiv">
                    <div className="content">
                        <div className="conTil">
                            <span className="conTilLine"></span>
                            <span className="conTilWz">创业活动</span>
                            <span className="conTilYw">SPACE ACTIVITIES</span>
                        </div>
                        <div className="conInfo">
                            <Row gutter={20}>
                                <Col span={6}>
                                    <Card bodyStyle={{ padding: 0 }}>
                                        <div className="custom-image">
                                            <img src={require('../../common/images/space/activImg1.png')} width="100%" alt="创业活动"/>
                                        </div>
                                        <div className="custom-card">
                                            <p>【大咖帮帮忙】解密营销奥义--初创企业如何从零搭建？</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card bodyStyle={{ padding: 0 }}>
                                        <div className="custom-image">
                                            <img src={require('../../common/images/space/activImg2.png')} width="100%" alt="创业活动"/>
                                        </div>
                                        <div className="custom-card">
                                            <p>霸王课|社群，我们的另一种身份</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card bodyStyle={{ padding: 0 }}>
                                        <div className="custom-image">
                                            <img src={require('../../common/images/space/activImg3.png')} width="100%" alt="创业活动"/>
                                        </div>
                                        <div className="custom-card">
                                            <p>【大咖帮帮忙】客户为什么选择我？|商业模式的设计思维</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card bodyStyle={{ padding: 0 }}>
                                        <div className="custom-image">
                                            <img src={require('../../common/images/space/activImg4.png')} width="100%" alt="创业活动"/>
                                        </div>
                                        <div className="custom-card">
                                            <p>Coffice大咖帮帮忙|拯救你的演讲</p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                 <div className="conModule conBg">
                     <div className="content">
                         <div className="conTil">
                             <span className="conTilLine"></span>
                             <span className="conTilWz">入驻企业</span>
                             <span className="conTilYw">SPACE ENTERPRISE</span>
                         </div>
                         <div className="conInfo conSpaceEnte">
                             <Row>
                                 <Col span={4}>
                                     <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo1.png')} alt="天津艺点意创科技公司"/>
                                     </div>
                                     <p>天津艺点意创科技公司</p>
                                 </Col>
                                 <Col span={4}>
                                     <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo2.png')} alt="同异设计"/>
                                     </div>
                                     <p>同异设计</p>
                                 </Col>
                                 <Col span={4}>
                                     <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo3.png')} alt="橄榄树"/>
                                     </div>
                                    <p>橄榄树</p>
                                 </Col>
                                 <Col span={4}>
                                     <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo4.png')} alt="三维表现"/>
                                     </div>
                                     <p>三维表现</p>
                                 </Col>
                                <Col span={4}>
                                    <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo5.png')} alt="星图设计"/>
                                    </div>
                                     <p>星图设计</p>
                                 </Col>
                                 <Col span={4}>
                                     <div className="conEnteList">
                                        <img src={require('../../common/images/space/entLogo6.png')} alt="西子工业设计"/>
                                     </div>
                                     <p>西子工业设计</p>
                                 </Col>
                             </Row>
                         </div>
                     </div>
                 </div>
            </div>
        )
    }
}