import React, {Component} from 'react';
import {
    Link
} from  "react-router-dom";
import { Row, Col,Menu, Dropdown, Icon } from 'antd';
import "./shopHead.less";

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/">123</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">234</Link>
        </Menu.Item>
    </Menu>
);

export default  class ShopHead extends Component {
    render() {
        return (
                <div className="bg-header shopHead">
                    <div className="w12">
                        <Row >
                            <Col span={12}>欢迎来到忽米网</Col>
                            <Col className="t-right" span={12}>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link t-color">
                                       我是雇主 <Icon type="down" />
                                    </a>
                                </Dropdown>
                                <Dropdown  overlay={menu}>
                                    <a className="ant-dropdown-link m-left t-color">
                                        我的服务商 <Icon type="down" />
                                    </a>
                                </Dropdown>
                                <Link className="t-color m-left" to="/">登录</Link> |  <Link className="t-color" to="/">注册</Link>
                            </Col>
                        </Row>
                    </div>
                </div>



        );
    }
}


