import React, { Component } from "react";
import "./alterLoginPassword.less";
import Pagetiticon from "../../common/images/auth/safeIcon-1.png";
export default class Alterloginpassword extends Component {
    render (){
        return (
            <div className="alterLoginPassword">
                <div className="pageTitleIcon">
                    <span className="outSideBox">
                        <span className="inSideBox"><img src={ Pagetiticon } alt="Pagetiticon"/></span>
                    </span>
                </div>
                <p className="pageTitle">修改登录密码</p>
                <form className="formBox">
                    <div className="inputBox">
                        <span>
                            <label htmlFor=""><i>*</i>旧密码：</label>
                            <input type="password"/>
                            <p>请输入您的支付密码</p>
                        </span>
                    </div>
                    <div className="inputBox">
                        <span>
                            <label htmlFor=""><i>*</i>新密码：</label>
                            <input type="password"/>
                            <p>请输入8-16位字符，不能是纯数字</p>
                        </span>
                    </div>
                    <div className="inputBox lastStep">
                        <span>
                            <label htmlFor=""><i>*</i>确认密码：</label>
                            <input type="password"/>
                            <p>请输入8-16位字符，不能是纯数字</p>
                        </span>
                    </div>
                    <div className="subBtnBox">
                        <button type="submit">完成</button>
                    </div>
                </form>
            </div>
        )
    }
}