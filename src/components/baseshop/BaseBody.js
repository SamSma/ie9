import React, {Component} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import BaseNav from "./BaseNav";
import "./baseheader.less";
import Right1 from "./Right1";
import Right2 from "./Right2";
import BasicInfo from "../../containers/storeSetting/basicInfo";
import CaseManage from "../../containers/storeSetting/caseManage";
import EnteIntro from "../../containers/storeSetting/enteIntro";
import MarkSet from "../../containers/storeSetting/markSet";
import Skill from "./skill";
import HonorManage from "../../containers/storeSetting/honorManage";
import NewsManage from "../../containers/storeSetting/newsManage";
import Reportmanage from "../customService/reportManage";//举报管理
import Backmoneymanage from "../customService/backMoneyManage";//退款管理
import CertUpload from "../../containers/storeSetting/certUpload";
import WinUpload from "../../containers/storeSetting/winUpload";
import {Row, Col} from "antd";

export default class BaseBody extends Component {
    render() {
        return (
            <div className="base-body">
                <div className="w12">
                    <Row gutter={20}>
                        <Col span={4}>
                            <BaseNav/>
                        </Col>

                        <Col span={20}>
                            <div className="base-right">

                                <Switch>
                                    <Route path="/storesetting/navright" component={Right1}/>
                                    <Route path="/storesetting/navright2" component={Right2}/>
                                    <Route path="/storesetting/basicInfo" component={BasicInfo} />
                                    <Route path="/storesetting/caseManage" component={CaseManage} />
                                    <Route path="/storesetting/enteIntro" component={EnteIntro} />
                                    <Route path="/storesetting/markSet" component={MarkSet} />
                                    <Route path="/storesetting/skill" component={Skill}/>
                                    <Route path="/storesetting/honorManage" component={HonorManage}/>
                                    <Route path="/storesetting/newsManage" component={NewsManage}/>
                                    <Route path="/storesetting/report" component={Reportmanage} />
                                    <Route path="/storesetting/backmoney" component={Backmoneymanage} />
                                    <Route path="/storesetting/certUpload" component={CertUpload}/>
                                    <Route path="/storesetting/winUpload" component={WinUpload}/>
                                    <Route component={Right1}/>
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}