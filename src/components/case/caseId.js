import "./caseId.less";
import React, {Component} from 'react';
import { Row, Col} from 'antd';
import {
    Link
} from "react-router-dom";
import Logo from "../../common/images/case/logo.jpg";
export default class CaseId extends Component {
    render(){
        return(
            <div className="caseId">
                <div className="w12">
                    <Row>
                        <Col span={16}>
                        <Link className="c-logo h-left" to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                        <div className="c-id h-left">
                            <div className="id-height id-top">
                                <h2 className="h-left">欢迎您，<span>用户ID</span></h2>
                               <p className="h-left p-top"><a>完善企业信息，</a>享受专属客服</p>

                            </div>
                            <div className="id-height id-center">
                                <h3 className="h-left s-size">账户余额 :<span>￥3000</span></h3>
                                <Link to="/" className="h-left detail t-center">账户交易明细</Link>
                            </div>
                        </div>
                        
                        <div></div>

                        </Col>
                        <Col span={7} className="t-right id-right">
                       
                        <a className="b">4000236666</a>
                         <a>发布需求</a>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}