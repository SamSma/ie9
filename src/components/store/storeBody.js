import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./storeBody.less";
import createHistory from 'history/createBrowserHistory';
import { Tabs } from 'antd';
import Navimg from "../../common/images/store/storeBanner.jpg";
import Storelogo from "../../common/images/store/storeLogo.png";
import Storeposicon from "../../common/images/store/storePosIcon.png";
import Storeicon from "../../common/images/store/storeMesIcon.png";
import StoreCasesBody from "./storeCasesBody";
import StoreNewsBody from "./storeNewsBody";
import Storehonour from "./storeHonour";
import Storecompany from "./storeCompany";
const TabPane = Tabs.TabPane;
const Gradesicon = [
    require("../../common/images/store/zs.png"),
    require("../../common/images/store/hj.png"),
    require("../../common/images/store/xl.png")
]

const history = createHistory();
export default class Storemes extends Component {
    constructor(){
        super();
        this.state={}
    }
    change = (n) => {
        history.push("/store");
    }
    render (){
        return (
            <div className="storeMesBox">
                <div><img className="navImg" src={ Navimg } alt="navImg"/></div>
                <div className="storeMes">
                    <div className="w12">
                        <div className="storeLogo">
                            <span><img src={ Storelogo } alt="storelogo"/></span>
                        </div>
                        <div className="companyName">
                            <span>早山设计</span>
                            <span><img src={ Storeposicon } alt="storeposicon"/>重庆市渝北区 </span>
                        </div>
                        <div className="iconBox">
                            <img src={ Storeicon } alt="storeicon"/>
                        </div>
                        <ul className="storeTags">
                            {
                                this.props.tags.map((v,i) => {
                                    return <li key={ i }>{ v }</li>
                                })
                            }
                        </ul>
                        <ul className="grades">
                            {
                                Gradesicon.map((v,i) => {
                                    return <li><img src={ v } key={ i } alt="Icon"/>4.99</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="storeNav w12">
                    <Tabs defaultActiveKey="1" onChange={ this.change }>
                        <TabPane tab="产品案例" key="1">
                            <StoreCasesBody casesItem={ this.props.casesItem }/>
                        </TabPane>
                        <TabPane tab="企业介绍" key="2">
                            <Storecompany />
                        </TabPane>
                        <TabPane tab="资历荣誉" key="3">
                            <Storehonour honour={ this.props.honour } honourProducts={ this.props.honourProducts } />
                        </TabPane>
                        <TabPane tab="企业新闻" key="4">
                            <StoreNewsBody hotTags={ this.props.hotTags } />
                        </TabPane>
                    </Tabs>
                    {/*<ul>*/}
                        {/*<li className="selecting"><Link to="/store/case/:id">产品案例</Link></li>*/}
                        {/*<li><Link to="/store/company">企业介绍</Link></li>*/}
                        {/*<li><Link to="/store/honour">资历荣誉</Link></li>*/}
                        {/*<li><Link to="/store/news">企业新闻</Link></li>*/}
                    {/*</ul>*/}
                    <div className="operateBtns">
                        <a href="">收藏</a>
                        <a href="">雇佣TA</a>
                    </div>
                </div>
            </div>
        )
    }
}