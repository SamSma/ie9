import React, { Component } from "react";
import { Row, Col } from "antd";
import Logo from "../../common/images/shop/logo.jpg";
import "./loginHeader.less";
export default class Loginheader extends Component {
	render (){
		return (
			<div className="w12">
				<Row className="loginH">
					<Col>
						<img src={ Logo } alt="logo"/>
						<span className="loginTitle">欢迎登陆</span>
					</Col>
				</Row>
			</div>
		)
	}
}