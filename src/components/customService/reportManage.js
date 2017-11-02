import React, { Component } from "react";
import "./reportManage.less";
import { Tabs, Row, Col } from "antd";
const TabPane = Tabs.TabPane;
export default class Reportmanage extends Component {
    render (){
        return (
            <div className="reportManage">
                <div className="pageTitle">举报管理</div>
                <Tabs defaultActiveKey="1" className="tabBtn">
                    <TabPane tab="我发起的举报" key="1">
                        <Row gutter={ 16 }>
                            <Col span={ 8 }>
                                <div className="startItem">
                                    <ul>
                                        <li>编号：30291029CEF</li>
                                        <li>类型：虚假需求</li>
                                        <li>举报对象：用户ID/企业名称</li>
                                        <li>发起时间：yyyy-mm-dd  hh:mm:ss</li>
                                        <li>处理状态：举证协商期</li>
                                    </ul>
                                    <Row className="operateBtns" gutter={ 16 }>
                                        <Col span={ 8 }><a href="">详情</a></Col>
                                        <Col span={ 8 }><a href="">补充信息</a></Col>
                                        <Col span={ 8 }><a href="">撤销</a></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={ 8 }></Col>
                            <Col span={ 8 }></Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="我收到的举报" key="2">
                        <Row gutter={ 16 }>
                            <Col span={ 8 }>
                                <div className="startItem">
                                    <ul>
                                        <li>编号：30291029CEF</li>
                                        <li>类型：虚假需求</li>
                                        <li>举报对象：用户ID/企业名称</li>
                                        <li>发起时间：yyyy-mm-dd  hh:mm:ss</li>
                                        <li>处理状态：举证协商期</li>
                                    </ul>
                                    <Row className="operateBtns" gutter={ 16 }>
                                        <Col span={ 8 }><a href="">详情</a></Col>
                                        <Col span={ 8 }><a href="">驳回申请</a></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={ 8 }></Col>
                            <Col span={ 8 }></Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}