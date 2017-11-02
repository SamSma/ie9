import React, { Component } from 'react';

import WaterMark from '../../components/baseshop/waterMark';
import './basicInfo.less';

export default class MarkSet extends Component{
    render(){
        return(
            <div>
                <div className="basicInfoCon">
                    <div className="basicPanel">
                        <div className="basicMainTil">
                            <span className="basicTilLine"></span>
                            <span className="basicTilWz">水印设置</span>
                        </div>
                        <div className="markCon">
                            {/*<img src="" alt=""/>*/}
                            <WaterMark position="left" />
                            {/*<div className="markOpenAdd"></div>*/}
                            <input type="checkbox"/>
                            <span>开启上传稿件水印添加功能</span>
                            <div className="markBtnGroup">
                                <a href="" className="markBtnSave">保存设置</a>
                                <a href="" className="markBtnPreview">预览</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}