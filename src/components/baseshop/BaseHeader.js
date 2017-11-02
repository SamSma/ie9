import React,{ Component } from 'react';
import { Row, Col} from 'antd';
import "./baseheader.less"

export default class Header extends Component {
    render(){
        return (
            <div className="base-header bg-header">
                <div className="w12 ">
                    <Row>
                        <Col span={12}>
                            <a className="t-color m-right">xx您好，欢迎来到忽米网</a>
                            <a className="t-color">安全退出</a>
                        </Col>
                        <Col className="t-right headRight"span={12}>
                            <a className="t-color pad">忽米首页</a>
                            <a className="t-color pad ">消息</a>
                            <a className="t-color pad">雇主中心</a>
                            <a className="t-color pad-lef">服务商中心</a>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}