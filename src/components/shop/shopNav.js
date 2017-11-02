import React, {Component} from 'react';
import {
    Row, Col,Button
} from "antd";
import {
    Link
} from "react-router-dom";
import "./shopNav.less";
import Logo from "../../common/images/shop/logo.jpg";
export default  class ShopNav extends Component {
    render() {
        return (
            <div className="shopNav">
                <div className="w12">
                    <Row>
                        <Col span={19}>
                            <Link className="logo" to="/">
                                <img src={Logo} alt="logo"/>
                            </Link>
                            <div className="nav">
                                <Link to="/">首页</Link>
                                <Link to="/enterprise">企业库</Link>
                                <Link to="/case">案例</Link>
                                <Link to="/hall">众创大厅</Link>
                            </div>
                        </Col>
                        <Col className="t-right"  span={5}><Button className="navBtn" type="primary">发布需求</Button></Col>
                    </Row>
                </div>
            </div>
        );
    }
}


