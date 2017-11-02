import React, {Component} from 'react';
import CaseHead from "../../components/case/caseHead";
import CaseId from "../../components/case/caseId";
import CaseBody from "../../components/case/caseBody";
import Bottom from "../../components/bottom";
export default  class Entryprise extends Component {
    render() {
        var shouye = require("../../common/images/case/shouye.jpg");
        var dingdan = require("../../common/images/case/dingdan.jpg");
        var fapiao = require("../../common/images/case/fapiao.jpg");
        var fws = require("../../common/images/case/fws.jpg");
        var geren = require("../../common/images/case/geren.jpg");
        var anquan = require("../../common/images/case/anquan.jpg");
        var tuikuan = require("../../common/images/case/tuikuan.jpg");
        var news = require("../../common/images/case/news.jpg");
        this.state={
            // nav:["我的首页","我的订单","我的发票","退款管理","收藏的服务商","个人资料","安全设置","消息"]
            nav:[{title:"我的首页",icon:shouye,route:"/employercenter/master"},{title:"我的订单",icon:dingdan,route:""},
                {title:"我的发票",icon:fapiao,route:""},{title:"退款管理",icon:tuikuan,route:""},
                {title:"收藏的服务商",icon:fws,route:""},{title:"个人资料",icon:geren,route:""},
                {title:"安全设置",icon:anquan,route:""},{title:"消息",icon:news,route:""}
            ]
        }

        return (
            <div>
                <CaseHead/>
                <CaseId/>
                <CaseBody nav={this.state.nav}/>
                <Bottom/>
            </div>
        );
    }
}
