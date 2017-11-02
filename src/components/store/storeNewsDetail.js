import React, { Component } from "react";
import "./storeNewsDetail.less";

export default class Storenewsdetail extends Component {
    render (){
        console.log(this.props);
        return (
            <div className="storeNewsDetail">
                <h1 className="newsTitle">思维无限工业视觉设计展</h1>
                <p className="newsDate">2017-09-22</p>
                <div className="shareBox">
                    <p>分享至</p>
                    <div className="jiathis_style">
                        <a className="jiathis_button_qzone">1</a>
                        <a className="jiathis_button_tsina">1</a>
                        <a className="jiathis_button_tqq">1</a>
                        <a className="jiathis_button_weixin">1</a>
                        <a className="jiathis_button_renren">1</a>
                        <a href="http://www.jiathis.com/share" className="jiathis jiathis_txt jtico jtico_jiathis" target="_blank">1</a>
                        <a className="jiathis_counter_style">1</a>
                    </div>
                </div>
                <div id="newsDetailContent">
                    新闻内容
                </div>
            </div>
        )
    }
    componentDidMount = () => {
        let script = document.createElement('script');
        script.src = "http://v3.jiathis.com/code/jia.js";
        document.body.appendChild(script);
        let obj = document.getElementsByClassName("filterAsDateBox");
        obj[0].style.display = "none";
    }
    componentWillUnmount = () => {
        let obj = document.getElementsByClassName("filterAsDateBox");
        obj[0].style.display = "block";
    }
}