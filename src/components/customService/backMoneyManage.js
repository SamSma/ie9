import React, { Component } from "react";
import "./backMoneyManage.less";
import { DatePicker, Row, Col } from "antd";
const { RangePicker } = DatePicker;
export default class Backmoneymanage extends Component {
    render (){
        return (
            <div className="backMoney">
                <div className="pageTitle">退款管理</div>
                <div className="filterInput">
                    <span>客户名称</span>
                    <input type="text"/>
                    <span>退款状态</span>
                    <select name="" id="">
                        <option value="已退款">已退款</option>
                    </select>
                    <span>退款申请时间</span>
                    <RangePicker size="large"/>
                    <button>查询</button>
                </div>
                <Row className="backMoneyItemBox" gutter={ 15 }>
                    <Col span={ 8 }>
                        <div className="backMoneyItem">
                            <p className="title">我需要一个logo设计</p>
                            <ul>
                                <li>雇主：鹊桥</li>
                                <li>退款金额：¥3900.00</li>
                                <li>申请时间：yyyy-mm-dd  hh:mm:ss</li>
                                <li>退款状态：待确认退款</li>
                            </ul>
                            <div><a href="">查看详情</a></div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}