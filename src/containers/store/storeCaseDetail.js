import React, { Component } from "react";
import Head from "../../components/shop/shopHead";
import Nav from "../../components/shop/shopNav";
import "../../components/store/storeCaseDetail.less";
import { Row, Col, Icon } from "antd";
import Bottom from "../../components/bottom";
export default class Storecasedetail extends Component {
    render (){
        return (
            <div>
                <Head/>
                <Nav/>
                <div className="storeCaseDetail">
                    <div className="w12">
                        <Row>
                            <Col span={ 15 }>
                                <p>原汁机、搅拌机、破壁机设计</p>
                                <Row>
                                    <Col span={ 14 }>产品开发<i>/</i>嵌入式开发类</Col>
                                    <Col span={ 10 }>
                                        <div className="shareBox">
                                            <span><Icon type="eye"/><i>7854</i>次</span>
                                            <span>分享至：</span>
                                            <div className="jiathis_style">
                                                <a className="jiathis_button_qzone">1</a>
                                                <a className="jiathis_button_tsina">2</a>
                                                <a className="jiathis_button_tqq">3</a>
                                                <a className="jiathis_button_weixin">4</a>
                                                <a className="jiathis_button_renren">5</a>
                                                <a href="http://www.jiathis.com/share" className="jiathis jiathis_txt jtico jtico_jiathis" target="_blank">6</a>
                                                <a className="jiathis_counter_style">7</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={ 9 } className="companyMes">
                                <div className="logo"><img src={ require("../../common/images/store/storeCaseDetail-logo.png") } alt="companyLogo"/></div>
                                <div className="message">
                                    <p>早山设计</p>
                                    <p>重庆市 | 工业制造/艺术</p>
                                    <div>
                                        <a href="">收藏</a>
                                        <a href="">雇佣TA</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="w12">
                    <div className="companyCaseBody">案例信息</div>
                </div>
                <Bottom/>
            </div>
        )
    }
    componentDidMount = () => {
        let script = document.createElement('script');
        script.src = "http://v3.jiathis.com/code/jia.js";
        document.body.appendChild(script);
    }
}