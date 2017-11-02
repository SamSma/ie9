import React,{ Component } from 'react';
import "./baseheader.less";
import {
    Link
} from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
export default class BaseNav extends Component {
    render(){
        return (
            <div className="base-nav">

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                onOpenChange={this.onOpenChange}
            >
                <Menu.Item key="1">
                    <Link to="/storesetting/navright" >
                        <Icon type="home" />
                        <span>我的首页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link  to="/storesetting/navright2">
                        <Icon type="inbox" />
                        <span>众创大厅</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="">
                        <Icon type="global" />
                        <span>企业商机</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="">
                        <Icon type="inbox" />
                        <span>我的订单</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="">
                        <Icon type="wallet" />
                        <span>我的发票</span>
                    </Link>
                </Menu.Item>


                <SubMenu key="sub1" title={<span><Icon type="bars" /><span>店铺设置</span></span>}>
                    <Menu.Item key="6">
                        <Link to="/storesetting/skill">
                            <span>技能管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/storesetting/honorManage">
                            <span>资质证书管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/storesetting/markSet">
                            <span>水印设置</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to="/storesetting/caseManage">
                            <span>案例管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/storesetting/enteIntro">
                            <span>企业介绍</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to="/storesetting/newsManage">
                            <span>新闻管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <Link to="/storesetting/basicInfo">
                            <span>店铺信息管理</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="bars" /><span>店铺运营</span></span>}>
                    <Menu.Item key="13">
                        <Link to="">
                            <span>访客监控</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="14">
                        <Link to="">
                            <span>店铺SEO</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="bars" /><span>客户服务</span></span>}>
                    <Menu.Item key="15">
                        <Link to="/storesetting/backmoney">
                            <span>退款管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="16">
                        <Link to="/storesetting/report">
                            <span>举报管理</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="bars" /><span>账户管理</span></span>}>
                    <Menu.Item key="17">
                        <Link to="">
                            <span>我的账户</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="18">
                        <Link to="">
                            <span>安全设置</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="bars" /><span>我的消息</span></span>}>
                    <Menu.Item key="19">
                        <Link to="">
                            <span>我的消息</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>



        )
    }
}