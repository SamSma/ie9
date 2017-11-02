import React, {Component} from 'react';
import {
    NavLink,
    Route,
    Switch
} from  "react-router-dom";
import "./authMain.less";

import Bank from "./bank";
import SafeSet from "./safeSetting";
import Tel from "./tel";
import AlterLoginPsw from "./alterLoginPasswrod";
import TradeRecords from "./tradeRecords";
import BankCard from "./bankCard";
import CardManage from "./cardManage";
import Funds from "./funds";

export default  class authMain extends Component {
    render() {
        return (
            <div className="authMain">
                <div className="w12 clear">
                    <div className="h-left mainLeft">
                        <ul>
                            <li className="navMain">
                              <span>图</span>  账户管理
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/hall"> 银行卡管理</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/safe"> 银行卡管理</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/tel"> 银行卡管理</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/alterloginpsw">修改登录密码</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/tradeRecords">交易记录</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/card">添加银行卡</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/cardmanage">银行卡管理</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hall/funds">资金明细</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li className="navMain">
                                <span>图</span>  安全设置
                            </li>
                            <li>
                                <NavLink to="/c"> 银行卡管理</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="h-right mainRight">

                        <Switch>
                            <Route path="/hall/bank" component={Bank} />
                            <Route path="/hall/safe" component={SafeSet} />
                            <Route path="/hall/tel" component={Tel} />
                            <Route path="/hall/alterloginpsw" component={AlterLoginPsw} />
                            <Route path="/hall/tradeRecords" component={TradeRecords} />
                            <Route path="/hall/card" component={BankCard} />
                            <Route path="/hall/cardmanage" component={CardManage} />
                            <Route path="/hall/funds" component={Funds} />
                            <Route component={ Bank } />
                        </Switch>

                    </div>
                </div>
            </div>
        );
    }
}


