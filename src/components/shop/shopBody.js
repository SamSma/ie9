import React, {Component} from 'react';
import {
    Row, Col ,Tabs
} from "antd";
import "./shopBody.less";
import List from "./list";

const TabPane = Tabs.TabPane;
let img =[
    require("../../common/images/shop/img/0.jpg"),
    require("../../common/images/shop/img/1.jpg"),
    require("../../common/images/shop/img/2.jpg"),
    require("../../common/images/shop/img/3.jpg"),
    require("../../common/images/shop/img/0.jpg"),
    require("../../common/images/shop/img/1.jpg"),
    require("../../common/images/shop/img/2.jpg"),
    require("../../common/images/shop/img/3.jpg"),
    require("../../common/images/shop/img/0.jpg"),
    require("../../common/images/shop/img/1.jpg"),
    require("../../common/images/shop/img/2.jpg"),
    require("../../common/images/shop/img/3.jpg"),
]
export default  class ShopBody extends Component {

    componentWillMount(){

    }
    render() {
        return (
            <div className="shopBody bg-body">
                <div className="w12">
                    <div className="bodyHead">
                        <Row>
                            <Col className="bodyLeft clear " span={19}>
                                <div className="h-left t-center">
                                    <img src={require("../../common/images/shop/head.jpg")} alt=""/>
                                </div>
                                <div className="h-right">
                                    <div className="bodyName mb">
                                        <span>一点工业设计</span> <img src={require("../../common/images/shop/zheng.jpg")} alt=""/>
                                    </div>
                                    <div className="mb">
                                        <img className="mr" src={require("../../common/images/shop/dian.jpg")} alt=""/>
                                        <img className="mr" src={require("../../common/images/shop/dian.jpg")} alt=""/>
                                        <img className="mr" src={require("../../common/images/shop/dian.jpg")} alt=""/>
                                    </div>
                                    <div>
                                        <span className="tags mr t-center">工业设计</span>
                                        <span className="tags mr t-center">工业设计</span>
                                        <span className="tags t-center">工业设计</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="bodyRight t-center" span={5}>
                                <div className="pt">
                                    <button>收藏</button>
                                </div>
                                <div className="pt">
                                    <button>雇佣TA</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="bodyBody">
                        <Tabs defaultActiveKey="1" onChange={this.props.changeTag}>
                            <TabPane tab="产品案例" key="1">
                                <List pageSize={this.props.pageSize} current={this.props.current} getPageData={this.props.getPageData} total={this.props.total} img={img} />
                            </TabPane>
                            <TabPane tab="产品介绍" key="2">
                                <List pageSize={this.props.pageSize} current={this.props.current} getPageData={this.props.getPageData} total={this.props.total} img={img} />
                            </TabPane>
                            <TabPane tab="资历荣誉" key="3">
                                <List pageSize={this.props.pageSize} current={this.props.current} getPageData={this.props.getPageData} total={this.props.total} img={img} />
                            </TabPane>
                            <TabPane tab="企业新闻" key="4">
                                <List pageSize={this.props.pageSize} current={this.props.current} getPageData={this.props.getPageData} total={this.props.total} img={img} />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

            </div>
        );
    }
}


