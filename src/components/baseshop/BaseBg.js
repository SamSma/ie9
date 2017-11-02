import React,{ Component } from 'react';
import "./baseheader.less";

export default class BaseBg extends Component {
    render(){
        return (
            <div className="base-bg">
                <img src={require("../../common/images/baseshop/1.png")} className="bas-img" alt="tupian"/>
                <div className="w12 enteBgCon">
                    <img className="enteBgImg" src={require("../../common/images/baseshop/enteBg.png")} alt="企业背景"/>
                    <img className="enteBgBorder" src={require("../../common/images/baseshop/enteBgBorder.png")} alt="企业背景边框"/>
                    <div className="enteInfo">
                        <img className="enteLogo" src={require("../../common/images/baseshop/enteLogo.png")} alt="企业LOGO"/>
                        <div className="enteState">
                            <p>北京名医质询科技有限公司</p>
                            <p>
                                <img src={require("../../common/images/baseshop/enteStateIcon.png")} alt="状态图标"/>
                                <span>未上班，暂停派单</span>
                            </p>
                        </div>
                    </div>
                    <div className="enteConAcco">
                        <p>账户余额</p>
                        <p className="enteAccoBalance">￥<span>3000</span>.00</p>
                        <div className="enteConBtns">
                            <a href="">提现</a>
                            <a href="">交易明细</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}