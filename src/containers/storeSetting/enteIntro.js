import React, { Component } from 'react';

import Ueditor from "../../components/ueditor/index";
import './basicInfo.less';

export default class EnteIntro extends Component{
    render(){
        return(
          <div>
              <div className="basicInfoCon">
                  <div className="basicPanel">
                      <div className="basicMainTil">
                          <span className="basicTilLine"></span>
                          <span className="basicTilWz">企业介绍</span>
                      </div>
                  </div>
                  <div className="basicPanel">
                      <div className="basicViceTil">
                          <span className="basicTilWz">企业简介</span>
                      </div>
                      <div className="basicCon">
                          <input type="text"/>
                      </div>
                  </div>
                  <div className="basicPanel">
                      <div className="basicViceTil">
                          <span className="basicTilWz">详细介绍</span>
                      </div>
                      <div className="basicCon">
                          <Ueditor />
                      </div>
                  </div>
                  <a href="" className="basicEnterBtn">保存</a>
              </div>
          </div>
        );
    }
}