import React, {Component} from 'react';
import { Menu } from 'antd';
import "./index.less";
import { Link } from "react-router-dom";

export default  class App extends Component {
    state = {
        current: "1",
    }
    render() {
        return (
            <div>
                <Menu
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="1" >
                        <Link to="/"> 首页 </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/enterprise"> 企业库</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/case">案例</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/hall">众创大厅</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/solution"> 解决方案</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/chamber">以商会友</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/humi">忽米国际</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/industry">产业服务</Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to="/finance">企业金融</Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/space">众创空间</Link>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to="/store">店铺</Link>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <Link to="/employercenter">雇主中心</Link>
                    </Menu.Item>
                    <Menu.Item key="13">
                        <Link to="/storesetting">店铺设置</Link>
                    </Menu.Item>
                    <Menu.Item key="14">
                        <Link to="/authEnte">企业认证</Link>
                    </Menu.Item>
                    <Menu.Item key="15">
                        <Link to="/authPersonal">个人认证</Link>
                    </Menu.Item>
                </Menu>
            </div
            >
        );
    }
}


