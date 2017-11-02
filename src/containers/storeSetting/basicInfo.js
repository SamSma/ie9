import React, { Component } from 'react';
import Ueditor from "../../components/ueditor/index";

import "./basicInfo.less";



export default class BasicInfo extends Component{
    render(){
        return(
            <div>
                <div className="basicInfoCon">
                    <div className="basicPanel">
                        <div className="basicMainTil">
                            <span className="basicTilLine"></span>
                            <span className="basicTilWz">基本信息设置</span>
                        </div>
                        <div className="basicCon basicInfoSetup">
                            <img src={require("../../common/images/baseshop/defaultImg.png")} alt="企业LOGO"/>
                            <p>北京名医质询科技有限公司</p>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">店铺封面大图</span>
                        </div>
                        <div className="basicCon basicUoloadImg">
                            <div className="basicUoloadBtn">
                                <img src={require("../../common/images/baseshop/uploadBg.png")} alt="店铺封面大图"/>
                                <input type="file"/>
                                <p>点击上传</p>
                            </div>
                            <p>推荐尺寸1920x344，JPG / GIF / PNG， RGB模式，3M以内。</p>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">店铺名称</span>
                        </div>
                        <div className="basicCon">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">企业简介</span>
                        </div>
                        <div className="basicCon">
                            <Ueditor />
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">所在地区</span>
                        </div>
                        <div className="basicCon">
                            <select>
                                <option>111</option>
                            </select>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">详细介绍</span>
                        </div>
                        <div className="basicCon">
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <a href="" className="basicEnterBtn">保存</a>
            </div>
        )
    }
}