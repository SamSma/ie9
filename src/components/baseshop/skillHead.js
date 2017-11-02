import React, {Component} from 'react';
import {
    Link,
    NavLink
} from  "react-router-dom";
export default  class SkillHead extends Component {
    render() {
        return (
                    <div className="skillTop mb">
                        <h4 className="skillNav mb">技能管理</h4>
                        <ul>
                            <li className="skillCard t-center">
                                <h3 >
                                    工业设计
                                </h3>
                                <div className="skillBtn">
                                    <NavLink activeClassName="on" to="/storesetting/skill/lei" >编辑类目</NavLink>
                                    <NavLink activeClassName="on" to="/storesetting/skill/attr" >编辑属性</NavLink>
                                    <NavLink activeClassName="on" to="/storesetting/skill/detaill" >查看详细</NavLink>
                                    {/* <button className="on">编辑类目</button>*/}
                                  {/*  <button>编辑属性</button>
                                    <button>查看详细</button>*/}
                                </div>
                            </li>

                            <Link to="/industry/skill/add">
                                <li className="addSkill t-center">
                                    <i className="iconfont icon-tianjia1"></i>
                                    <p>
                                        添加类目18989
                                    </p>
                                </li>
                            </Link>
                        </ul>
                    </div>
        );
    }
}


