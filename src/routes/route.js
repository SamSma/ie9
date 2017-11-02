/**
 * Created by Administrator on 2017/10/17 0017.
 */
import React from "react";
import {
    BrowserRouter as Router  ,
    Route ,
    Switch
}from "react-router-dom";
/*import createHistory from 'history/createHashHistory';*/
import App from "../containers/index"; //首页
import Enterprise from "../containers/enterprise"; //企业库
import Case from "../containers/case"; //案例
import Hall from "../containers/hall"; //众创大厅
import Solution from "../containers/solution"; //解决方案
import Chamber from "../containers/chamber"; //以商会友
import Humi from "../containers/humi"; //国米国际
import Industry from "../containers/industry"; //产业服务
import Finance from "../containers/finance"; //企业金融
import Space from "../containers/space"; //众创空间
import Master from "../containers/master"; //雇主中心
import Login from "../containers/login"; //登录
import AuthPersonal from "../containers/authenication/authPersonal"; //个人认证
import AuthEnte from "../containers/authenication/authEnte"; //企业认证
import Store from "../containers/store"; //店铺首页
import Storecasedetail from "../containers/store/storeCaseDetail"; //店铺案例详情
import Storesetting from "../containers/storeSetting"; //店铺设置

/*const  history = createHistory();*/
const routes =(
    <Router >
        <div>
            <Switch>
                <Route  path="/" exact component={App} />
                <Route  path="/enterprise" component={Enterprise} />
                <Route  path="/case" component={Case} />
                <Route  path="/hall" component={Hall} />
                <Route  path="/solution" component={Solution} />
                <Route  path="/chamber" component={Chamber} />
                <Route  path="/humi" component={Humi} />
                <Route  path="/industry" component={Industry} />
                <Route  path="/finance" component={Finance} />
                <Route  path="/space" component={Space} />
                <Route  path="/login" component={Login} />
                <Route  path="/authPersonal" component={AuthPersonal} />
                <Route  path="/authEnte" component={AuthEnte} />
                <Route  path="/store" component={Store} />
                <Route  path="/storecasedetail" component={Storecasedetail} />
                <Route  path="/employercenter" component={Master} />
                <Route  path="/storesetting" component={Storesetting} />
            </Switch>
        </div>

    </Router>
)

export default routes;