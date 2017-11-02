import "./caseHead.less";
import React, {Component} from 'react';
import { Row, Col,Icon} from 'antd';
export default  class CaseHead extends Component {
    render() {
        return (
            <div className="casehead bg-header">
                <div className="w12 ">
                     <Row>
                      <Col span={12}>
                      <a className="t-color m-right">欢迎来到忽米网</a>
                      <a className="t-color m-right">APP</a>
                      <a className="t-color m-right">忽米国际</a>
                      <a className="t-color">公众号</a>
                      </Col>
                     <Col className="t-right"span={12}>
                     <a className="t-color a2-right">忽米首页</a>
                     <a className="t-color a1-right">消息</a>
                     <a className="t-color a1-right">我的雇主 <Icon type="down" /></a>
                     <a className="t-color">我的服务商 <Icon type="down" /></a>
                     </Col>
                     </Row>

                </div>
            </div>
        );
    }
}