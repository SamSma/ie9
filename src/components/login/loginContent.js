import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Tabs, Row, Col, Modal } from "antd";
import "./loginContent.less";
import { Link } from "react-router-dom";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const area = [
	"中国",
	"阿富汗",
	"巴基斯坦",
	"美国",
	"浙江",
	"山东"
]
const moduleContent1 = (
	<div>
		<p>用户协议</p>
		<p>协议内容</p>
	</div>
)
const moduleContent2 = (
	<div>
		<p>隐私政策</p>
		<p>政策内容</p>
	</div>
)
let moduleContent = '';
let moduleTitle = '';
export default class Logincontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	visible: false
        }
    }
    handleSubmit = (e) => {
		e.preventDefault();
		alert("登录成功");
	}
    showModal = (e) => {
        moduleContent = e.target.getAttribute("t") === "1"? moduleContent1:moduleContent2;
        moduleTitle = e.target.getAttribute("t") === "1"? "用户协议":"隐私政策";
        this.setState({
            visible: true,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
	render (){
		return (
			<div className="loginContent">
				<div className="w12">
					<div className="loginBox">
						<Tabs defaultActiveKey="1" className="lAndR">
							<TabPane tab="登录" key="1">
								<Form onSubmit={this.handleSubmit} className="login-form">
									<FormItem className="userBox">
										<Input placeholder="邮箱/手机号码/忽米ID" className="username"/>
									</FormItem>
									<FormItem>
										<Input type="password" placeholder="密码" className="password"/>
									</FormItem>
									<FormItem>
										<Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
										<Checkbox className="autoLogin">一周内自动登录</Checkbox>
										<span>
									<a>立即注册</a>丨
									<a>忘记密码？</a>
								</span>
									</FormItem>
								</Form>
								<div className="otherLogin">
									<p><i></i>其他方式登录<i></i></p>
									<div className="platform">
										<Link to="/login" className="tencent"></Link>
										<Link to="/login" className="sina"></Link>
										<Link to="/login" className="alipay"></Link>
										<Link to="/login" className="wechat"></Link>
									</div>
								</div>
							</TabPane>
							<TabPane tab="注册" key="2">
								<form action="">
									<p className="selectAreaTitle">国家 / 地区</p>
									<select className="selectArea">
										<option value="">请选择国家 / 地区</option>
										{
											area.map((v,i) => {
												return <option value={ v } key={ i }>{ v }</option>
											})
										}
									</select>
									<p className="tip">成功注册账号后，国家 / 地区将不能被修改</p>
									<p className="phoneTitle">手机号码</p>
									<Row>
										<Col span={ 5 }>
											<select className="areaCode">
												<option value="">+86</option>
												<option value="123">123</option>
											</select>
										</Col>
										<Col span={ 19 }>
											<FormItem>
												<Input placeholder="请输入手机号" className="phone"/>
											</FormItem>
										</Col>
									</Row>
									<Button type="primary" className="register">立即注册</Button>
									<p className="TCP">注册账号即表示您同意并愿意遵守忽米 <a t="1" onClick={this.showModal}>用户协议</a> 和 <a t="2" onClick={this.showModal}>隐私政策</a></p>
								</form>
							</TabPane>
						</Tabs>
					</div>
					<div className="sloganBox">
						<p>忽米网</p>
						<p>专业的工业服务分享平台</p>
						<p>PROFESSIONAL INDUSTRIAL SERVICE SHARING PLATFORM</p>
					</div>
				</div>
				<Modal className="moduleBox" title={ moduleTitle } visible={this.state.visible} onCancel={this.handleCancel} footer={ null }>
					{ moduleContent }
				</Modal>
			</div>
		)
	}
}