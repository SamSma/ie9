import React, { Component } from "react";
import { Row, Col } from "antd";
import Page from "../pagination";
import "./storeCasesBody.less";
export default class Storecasesbody extends Component {
    render (){
        return (
            <div>
                <div className="w12">
                    <Row gutter={ 24 } className="storeCaseBox">
                        {
                            this.props.casesItem.map((v,i) => {
                                return  <Col span={ 6 } key={ i }>
                                            <div className="caseItemBox">
                                                <div><img src={ v.img } alt="caseItemImg"/></div>
                                                <div>
                                                    <p className="caseTitle">{ v.title }</p>
                                                    <p className="caseContent">{ v.content.length > 35? v.content.substring(0,35) + "...":v.content }</p>
                                                </div>
                                            </div>
                                        </Col>
                            })
                        }
                    </Row>
                    <div className="storePage">
                        <Page/>
                    </div>
                </div>
            </div>
        )
    }
}