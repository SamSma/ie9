import React, { Component } from "react";
import { Dropdown, Icon, Row, Col,Button } from 'antd';
import Head from "../shop/shopHead";
import Nav from "../shop/shopNav";
import Banner from "../../common/images/case/caseIndexBanner.png";
import "./caseIndex.less";
import Star from "../../common/images/case/caseIndexItemLevel-star.png";
import Page from "../../components/pagination";
import Bottom from "../../components/bottom";
export default class Caseindex extends Component {
    render (){
        return (
            <div className="caseIndex">
                <Head/>
                <Nav/>
                <div className="bannerBox">
                    <div className="w12"><img src={ Banner } alt="Banner"/></div>
                </div>
                <div className="filterBg">
                    <div className="filter w12">
                        <div className="container overHidden filterBox">
                            <Row gutter={ 20 }>
                                <Col span={ 12 } className="filterConditionBox">
                                    <Row>
                                        <Col span={ 6 }>
                                            <Dropdown overlay={ this.props.service }>
                                                <a className="ant-dropdown-link">服务 <Icon type="down" /></a>
                                            </Dropdown>
                                        </Col>
                                        <Col span={ 6 }>
                                            <Dropdown overlay={ this.props.domain }>
                                                <a className="ant-dropdown-link">领域 <Icon type="down" /></a>
                                            </Dropdown>
                                        </Col>
                                        <Col span={ 6 }>
                                            <Dropdown overlay={ this.props.tndustry }>
                                                <a className="ant-dropdown-link">行业 <Icon type="down" /></a>
                                            </Dropdown>
                                        </Col>
                                        <Col span={ 6 }>
                                            <Dropdown overlay={ this.props.area }>
                                                <a className="ant-dropdown-link">地区 <Icon type="down" /></a>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={ 12 }>
                                    <Row>
                                        <Col span={ 12 }>
                                            <Button type="primary" icon="search" className="searchBtn"></Button>
                                        </Col>
                                        <Col span={ 12 } className="filterRight">
                                            <span>默认</span>
                                            <a>综合 <Icon type="down"/></a>
                                            <a>成交量 <Icon type="down"/></a>
                                            <a>好评率 <Icon type="down"/></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <CaseItem caseItem={ this.props.caseItem }/>
                <div className="w12 caseIndexPage">
                    <Page/>
                </div>
                <Bottom/>
            </div>
        )
    }
}
class CaseItem extends Component {
    componentWillMount = () => {
        for(let i = 0;i < this.props.caseItem.length;i++){
            this.props.caseItem[i].levelBox = [];
            for(let n = 0;n < this.props.caseItem[i].level;n++){
                this.props.caseItem[i].levelBox.push(Star);
            }
        }
    }
    render (){
        return (
            <div className="caseItemBox w12">
                <Row gutter={ 20 }>
                    {
                        this.props.caseItem.map((v,i) => {
                            return  <Col span={ 6 } key={ i }>
                                        <div className="caseItem">
                                            <div><a href={ v.link }><img src={ v.productImg } alt="productImg"/></a></div>
                                            <div className="caseItemContent">
                                                <Row className="title">
                                                    <Col span={ 14 }>{ v.productTit }</Col>
                                                    <Col span={ 10 }>
                                                        {
                                                            v.levelBox.map((n,m) => {
                                                                return <img src={ n } alt="Star" key={ m }/>
                                                            })
                                                        }
                                                    </Col>
                                                </Row>
                                                <p className="tag">{ v.tag }</p>
                                                <p className="service">服务客户：{ v.service }</p>
                                            </div>
                                            <Row className="caseItemFoot">
                                                <Col span={ 14 }>
                                                    <img src={ v.storeLogo } alt=""/>
                                                    <span>{ v.storeName }</span>
                                                </Col>
                                                <Col span={ 10 }><span>11小时前</span></Col>
                                            </Row>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}