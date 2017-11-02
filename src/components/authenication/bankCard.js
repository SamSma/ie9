import React, {Component} from 'react';
import {
    Row,Col
} from "antd";
import {
    Link
} from "react-router-dom";
import "./bankcard.less";
export default  class BankCard extends Component {
    render() {
        return (
            <div className="BankCard">
                <h5>添加银行卡</h5>
                <Row gutter={16} className="mb">
                    <Col className="t-right line" span={8} >真实姓名</Col>
                    <Col span={12} >
                       <input value="林伟" disabled className="winput" type="text"/>
                    </Col>
                </Row>
                <Row gutter={16} className="mb">
                    <Col className="t-right line" span={8} >身份证号码</Col>
                    <Col span={12} >
                        <input value="1200****33" disabled className="winput" type="text"/>
                    </Col>
                </Row>
                <Row gutter={16} className="mb">
                    <Col className="t-right line" span={8} >银行卡号</Col>
                    <Col span={12} >
                        <input value="林伟"  className="winput" type="text"/>
                        <div className="info">
                            输入卡号后会智能识别银行和卡种,<Link to="/">银行卡要求</Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mb">
                    <Col className="t-right line" span={8} >手机号码</Col>
                    <Col span={12} >
                        <input  className="winput" type="text"/>
                        <div className="info">
                            请填写您在银行预留的手机号码，以验证银行卡是否属于您本人
                        </div>
                    </Col>
                </Row>
                <Row gutter={8} >
                    <Col className="t-right line" span={7} ></Col>
                    <Col span={12} >
                       <button className="h-btn">同意协议并确定</button>
                    </Col>
                </Row>
            </div>
        );
    }
}


