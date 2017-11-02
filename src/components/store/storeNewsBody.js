import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Switch, Route } from "react-router-dom";
import "./storeNewsBody.less";
import Storenewsdetail from "./storeNewsDetail";
import Storenewslist from "./storeNewsList";
const randomFs = ["font-20","font-18","font-16",'font-normal'];
export default class Storenewsbody extends Component {
    fontName = () => {
        let n = randomFs.length - 1;
        let fontName = '';
        for (let i = 0; i < randomFs.length;i++){
            let m = Math.round(Math.random()*n);
            fontName = randomFs[m];
        }
        return fontName;
    }
    render (){
        return (
            <div>
                <Row gutter={ 28 } className="storeNewsBox">
                    <Col span={ 17 }>
                        <Switch>
                            <Route path="/store/storenewsdetail" component={ Storenewsdetail } />
                            <Route component={ Storenewslist }/>
                        </Switch>
                    </Col>
                    <Col span={ 7 }>
                        <div className="newsRight">
                            <div className="filterAsDateBox">
                                <div>按日期过滤<Icon type="down"/></div>
                                <ul>
                                    <li className="selected"><a>全部</a></li>
                                    <li><a>一周内</a></li>
                                    <li><a>一个月内</a></li>
                                    <li><a>一季度内</a></li>
                                    <li><a>一年内</a></li>
                                </ul>
                            </div>
                            <div className="hotTags">
                                <div>热门标签</div>
                                <Row id="ht">
                                    {
                                        this.props.hotTags.map((v,i) => {
                                            console.log();
                                            return  <Col key={ i } span={ 8 }>
                                                        <a className={ this.fontName() } href={ v.link }>{ v.text }</a>
                                                    </Col>
                                        })
                                    }
                                </Row>
                            </div>
                            <div className="aboutLink">
                                <div>相关链接</div>
                                <ul>
                                    <li><a>2018狗年全球吉庆生肖设计大赛</a></li>
                                    <li><a>首届维信诺未来显示创意设计大赛</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
