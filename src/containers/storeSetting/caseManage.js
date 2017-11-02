import React, { Component } from 'react';
import { Row,Col,Tabs,Icon } from 'antd';

import './caseManage.less'

const { TabPane } = Tabs;

export default class CaseManage extends  Component{
    render(){
        return(
            <div className="caseManageCon">
                <div className="caseHead">
                    <div className="caseHeadTil">
                        <span className="caseHeadLine"></span>
                        <span>案例管理</span>
                    </div>
                </div>
                <div className="caseHeadTab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="全部" key="1">
                            <Row className="caseManageList" gutter={25}>
                                <Col span={8} className="caseListSingle">
                                    <div className="caseSingInfo caseListAdd">
                                        <div className="caseSingleBtn">
                                            <a>
                                                <Icon type="plus-circle" />
                                                <p>添加类目</p>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} className="caseListSingle">
                                    <img src={require('../../common/images/baseshop/defaultImg.png')} />
                                    <div className="caseSingInfo">
                                        <p>
                                            <span className="caseSingName">玻璃制品产品设计</span>
                                            <span className="caseSingStars">
				          					<Icon type="star" />
				          					<Icon type="star" />
				          					<Icon type="star" />
			          					</span>
                                        </p>
                                        <span>IT科技/商业</span>
                                        <p className="caseSingKh">服务客户：重庆大三贸易有限公司</p>
                                    </div>
                                    <div className="caseSingCz">
                                        <Icon type="reload" />
                                        <Icon type="edit" />
                                        <Icon type="delete" />
                                    </div>
                                </Col>
                                <Col span={8} className="caseListSingle">
                                    <img src={require('../../common/images/baseshop/defaultImg.png')} />
                                    <div className="caseSingInfo">
                                        <p>
                                            <span className="caseSingName">玻璃制品产品设计</span>
                                            <span className="caseSingStars">
				          					<Icon type="star" />
				          					<Icon type="star" />
				          					<Icon type="star" />
			          					</span>
                                        </p>
                                        <span>IT科技/商业</span>
                                        <p className="caseSingKh">服务客户：重庆大三贸易有限公司</p>
                                    </div>
                                    <div className="caseSingCz">
                                        <Icon type="reload" />
                                        <Icon type="edit" />
                                        <Icon type="delete" />
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="已发布" key="2">Content of tab 2</TabPane>
                        <TabPane tab="审核中" key="3">Content of tab 3</TabPane>
                        <TabPane tab="未通过" key="4">Content of tab 4</TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}