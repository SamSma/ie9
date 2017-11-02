import React, { Component } from "react";
import Loginheader from "../../components/login/loginHeader";
import Logincontent from "../../components/login/loginContent";
import Loginfooter from "../../components/login/loginFooter";
export default class login extends Component {
	render (){
		return (
			<div>
				<Loginheader />
				<Logincontent />
				<Loginfooter />
			</div>
		)
	}
}