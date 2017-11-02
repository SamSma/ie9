import React, { Component } from 'react';
import { Icon } from 'antd';

import Ueditor from "../../components/ueditor/index";
import "./basicInfo.less";


export default class CertUpload extends Component{
    render(){
        return(
            <div>
                <div className="basicInfoCon">
                    <div className="basicPanel">
                        <div className="basicMainTil">
                            <span className="basicTilLine"></span>
                            <span className="basicTilWz">荣誉资历管理</span>
                            <span className="basicTilPrompt">（您只能发布原创属于您自有获奖记录，若有虚假，一经查证，立刻下架，您有可能会承担法律风险。）</span>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">证书名称</span>
                        </div>
                        <div className="basicCon">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">证书介绍</span>
                        </div>
                        <div className="basicCon">
                            <Ueditor />
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">获取证书时间</span>
                        </div>
                        <div className="basicCon basicConDate">
                            <select name="" id="">
                                <option value="">2000</option>
                            </select>
                            <span>年</span>
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                            <span>月</span>
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                            <span>日</span>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicViceTil">
                            <span className="basicTilWz">上传获奖证书图片</span>
                        </div>
                        <div className="basicCon basicUploadWin">
                            <div className="basicWinCon">
                                <div className="basinWinEvent">
                                    <Icon type="plus-circle" />
                                    <p>上传获奖证书图片</p>
                                </div>
                                <input type="file"/>
                            </div>
                            <div className="basicWinPreview">
                                <img src={require("../../common/images/baseshop/defaultImg.png")} alt="获奖证书图片"/>
                                <div className="basicPreviewDel">
                                    <a>删除</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="basicEnterBtn">确认</a>
                </div>
            </div>
        )
    }
}