import React, {Component} from 'react';
import {
    Row,Col
} from "antd";
import {
    Link
} from "react-router-dom";
import Logo from "../../common/images/auth/logo.png";
import "./authHead.less";
export default  class AuthHead extends Component {
    render() {
        return (
            <div className="AuthHead">
                <div className="head">
                    <div className="w12">
                        <Row>
                            <Col span={12}>
                                <span className="mb">你好</span>
                                <span className="sel mb">用户名称</span>
                                <Link to="/">安全退出</Link>
                            </Col>
                            <Col span={12} className="t-right">
                                <span  className="mb">
                                    消息
                                </span>
                                <Link to="/"  className="mb">
                                    我的账户
                                </Link>
                                <Link to="/"  className="mb">
                                    服务商中心
                                </Link>
                                <Link to="/" >
                                    雇主中心
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="logo">
                    <div className="w12">
                        <Row>
                            <Col span={12} className="logoLeft">
                                <img src={Logo} alt="logo"/>
                            </Col>
                            <Col span={12} className="t-right">
                                <div className="LogoHead clear">
                                    <div className="h-left">
                                        <img src={require("../../common/images/auth/head.png")} alt="头像"/>
                                    </div>
                                    <div className="h-right">
                                        <p>上午好  <span className="userName">壹典工业设计</span></p>
                                        <p>手机号：192232121511 </p>
                                        <p>上次登录时间：2017.10.09 19:30:02 </p>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}


