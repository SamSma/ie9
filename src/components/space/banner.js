import React, { Component } from 'react';
import { Carousel } from "antd";

import './index.less';

export default class Banner extends Component {
    render(){
        return (
            <div className="bannerCon">
                <Carousel className="banner">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
                <div className="bannerNav">
                    <img src={require("../../common/images/auth/logo.png")} alt="忽米网"/>
                    <div className="bannerNavRight">
                        <a href="">首页</a>
                        <a href="">企业库</a>
                        <a href="">案例</a>
                        <a href="">众创大厅</a>
                        <a href="">解决方案</a>
                        <a href="">以商会友</a>
                        <a href="">忽米国际</a>
                        <span className="bannerNavLine"></span>
                        <div className="bannerNavlast">
                            <a href="">产业服务</a>
                            <a href="">企业金融</a>
                            <a href="">众创空间</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
