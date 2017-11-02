import React, { Component } from "react";
import "./loginFooter.less";
export default class Loginfooter extends Component {
    render (){
        return (
            <div>
                <div className="footer-1">
                    <a>简体</a>
                    <a>繁体</a>
                    <a>English</a>
                    <a>常见问题</a>
                </div>
                <div className="footer-2">
                    <p>使用条款 | 隐私权政策 | 联系我们 | 渝ICP备000000000号-1   Copyright2017 忽米科技有限公司  版权所有</p>
                </div>
            </div>
        )
    }
}