import React, { Component } from "react";
import { Row, Col } from "antd";
import "./safeSetting.less";
import SafeIcon from "../../common/images/auth/safeIcon-1.png";
export default class Safesettingright extends Component {
    render (){
        let safeLevelIcon = [];
        let levelWord = '低';
        for(let i = 0;i < 5;i++){
            //let iconCn = i < (this.props.safeLevel)? 'safeLevelIconIng':'safeLevelIconUn'
            safeLevelIcon.push( <span key={ i } className={ "safeLevelIconUn" }></span>);
        }
        return (
            <div className="rightBg">
                <p className="safeLevel">当前安全级别</p>
                <div className="levelIconBox">
                    {
                        safeLevelIcon.map((v) => {
                            return v
                        })
                    }
                    <i>{ levelWord }</i>
                </div>
                <p className="levelTips">为了更好的保护您的交易安全，建议您通过一下方式提高安全级别</p>
                <Row className="safeContent">
                    {/* 登录密码 */}
                    <Col span={ 8 } className="safeContentItem">
                        <div className="safeIconBox">
                            <span className="outSide">
                                <span className="inSide"><img src={ SafeIcon } alt="SafeIcon"/></span>
                            </span>
                        </div>
                        <p className="safeOptionsTitle">登录密码</p>
                        <p className="secondTitle">建议您定期更改密码以保护账户安全</p>
                        <div className="confirmBtn">
                            <button>立即修改</button>
                        </div>
                    </Col>
                    {/* 手机绑定 */}
                    <Col span={ 8 } className="safeContentItem">
                        <div className="safeIconBox">
                            <span className="outSide">
                                <span className="inSide"><img src={ SafeIcon } alt="SafeIcon"/></span>
                            </span>
                        </div>
                        <p className="safeOptionsTitle">手机绑定</p>
                        <p className="secondTitle">已绑定手机号码：198*****321<br />直接使用“手机号码”登录忽米网，并受到中标、支付等题型</p>
                        <div className="confirmBtn">
                            <button>立即修改</button>
                        </div>
                    </Col>
                    {/* 邮箱绑定 */}
                    <Col span={ 8 } className="safeContentItem">
                        <div className="safeIconBox">
                            <span className="outSide">
                                <span className="inSide"><img src={ SafeIcon } alt="SafeIcon"/></span>
                            </span>
                        </div>
                        <p className="safeOptionsTitle">邮箱绑定<i>（未绑定）</i></p>
                        <p className="secondTitle">直接使用“邮箱”登录忽米网，并受到中标、支付等题型</p>
                        <div className="confirmBtn">
                            <button>立即修改</button>
                        </div>
                    </Col>
                    {/* 身份认证 */}
                    <Col span={ 8 } className="safeContentItem">
                        <div className="safeIconBox">
                            <span className="outSide">
                                <span className="inSide"><img src={ SafeIcon } alt="SafeIcon"/></span>
                            </span>
                        </div>
                        <p className="safeOptionsTitle">身份认证</p>
                        <p className="secondTitle">认证后方可进行交易，开通店铺等操作</p>
                        <div className="confirmBtn">
                            <button className="doubleBtx">个人认证/查看</button>
                            <button>企业认证/查看</button>
                        </div>
                    </Col>
                    {/* 支付密码修改 */}
                    <Col span={ 8 } className="safeContentItem">
                        <div className="safeIconBox">
                            <span className="outSide">
                                <span className="inSide"><img src={ SafeIcon } alt="SafeIcon"/></span>
                            </span>
                        </div>
                        <p className="safeOptionsTitle">支付密码修改</p>
                        <p className="secondTitle">直接使用“邮箱”登录忽米网，并受到中标、支付等题型</p>
                        <div className="confirmBtn">
                            <button>立即修改</button>
                        </div>
                    </Col>
                    <span className="rowLineOne"></span>
                    <span className="rowLineTwo"></span>
                    <span className="line"></span>
                </Row>
            </div>
        )
    }
}