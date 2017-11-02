import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import {
    Row, Col
} from "antd";
import "./index.less";
import Logo from "../../common/images/bottom/logo.png";
import Gong from "../../common/images/bottom/2.png";
export default  class Bottom extends Component {
    render() {
        return (
            <div className="foot">
                <div className="footTop">
                   <div className="w12">
                       <Row>
                           <Col span={6}>
                               <img src={Logo} alt=""/>
                           </Col>
                           <Col span={18} className="t-right">
                               <ul>
                                   <li className="footNav">
                                       联系我们
                                   </li>
                                   <li>
                                       <Link to="/">用户入门</Link>
                                   </li>
                                   <li>
                                       <Link to="/">联系客服</Link>
                                   </li>
                                   <li>
                                       <Link to="/">在线咨询</Link>
                                   </li>
                               </ul>
                               <ul>
                                   <li className="footNav">
                                       服务商
                                   </li>
                                   <li>


                                       <Link to="/">服务商入驻</Link>
                                   </li>
                                   <li>
                                       <Link to="/">企业信用</Link>
                                   </li>
                                   <li>
                                       <Link to="/">服务商守则</Link>
                                   </li>
                               </ul>
                               <ul>
                                   <li className="footNav">
                                       忽米服务
                                   </li>


                                   <li>
                                       <Link to="/">合作招商</Link>
                                   </li>
                                   <li>
                                       <Link to="/">服务规则</Link>
                                   </li>
                                   <li>
                                       <Link to="/">法律帮助</Link>
                                   </li>
                               </ul>
                               <ul>
                                   <li className="footNav">
                                       交易安全
                                   </li>
                                   <li>
                                       <Link to="/">交易维权攻略</Link>
                                   </li>
                                   <li>
                                       <Link to="/">用户指南</Link>
                                   </li>
                                   <li>
                                       <Link to="/">服务商指南</Link>
                                   </li>
                               </ul>
                               <ul>
                                   <li>
                                       <img src={Gong} alt=""/>
                                       <h5>忽米微信公众号</h5>
                                   </li>
                               </ul>
                           </Col>
                       </Row>
                   </div>
                </div>
                <div className="footBot t-center">
                    使用条款 | 隐私权政策 | 联系我们 | 渝ICP备000000000号-1   Copyright2017 忽米科技有限公司  版权所有
                </div>
            </div>
        );
    }
}


