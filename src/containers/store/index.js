import React, { Component } from "react";
import Head from "../../components/shop/shopHead";
import Nav from "../../components/shop/shopNav";
import Storebody from "../../components/store/storeBody";
import Bottom from "../../components/bottom";
//公司标签
const tags = ["工业设计","产品设计","结构设计","VI","交通装备"];
//产品案例
const casesItem = [
    {
        "img": require("../../common/images/store/caseItemImg.jpg"),
        "title": "安防监控",
        "content": "一典工业设计：在很多网站看到木雕，今天才发现那么多的作品竟都来自同一个"
    },
    {
        "img": require("../../common/images/store/caseItemImg.jpg"),
        "title": "安防监控2",
        "content": "一典工业设计：在很多网站看到木雕，今天才发现那么多的作品竟都来自同一个asd"
    },
    {
        "img": require("../../common/images/store/caseItemImg.jpg"),
        "title": "安防监控3",
        "content": "一典工业设计：在很多网站看到木雕，今天才发现那么多的作品竟都来自同一个asd"
    },
    {
        "img": require("../../common/images/store/caseItemImg.jpg"),
        "title": "安防监控4",
        "content": "一典工业设计：在很多网站看到木雕，今天才发现那么多的作品竟都来自同一个213asd"
    },
    {
        "img": require("../../common/images/store/caseItemImg.jpg"),
        "title": "安防监控5",
        "content": "adsdadadasdadasdadasasdasdadadasdada"
    }
]

//热门标签
const hotTags = [
    {
        link: "#",
        text: "工业设计"
    },
    {
        link: "#",
        text: "结构"
    },
    {
        link: "#",
        text: "制造"
    },
    {
        link: "#",
        text: "云计算"
    },
    {
        link: "#",
        text: "全联接"
    },
    {
        link: "#",
        text: "管理服务"
    },
    {
        link: "#",
        text: "多功能"
    },
    {
        link: "#",
        text: "红点"
    },
    {
        link: "#",
        text: "产品设计"
    }
]
//荣誉奖项
const honour = [
    {
        img: require("../../common/images/store/storeHonour-1.jpg"),
        textT: "红星奖",
        textC: "中国创新设计红星奖于2006年由中国工业设计协会、北京工业设计促进中心、国务院发展研究中心安达市多奥术大师多"
    },
    {
        img: require("../../common/images/store/storeHonour-1.jpg"),
        textT: "星奖",
        textC: "中国创新设计红星奖于2006年由中国工业设计协会、北京工业设计促进中心、国务院发展研究中心安达市多奥术大师多"
    },
    {
        img: require("../../common/images/store/storeHonour-1.jpg"),
        textT: "红奖",
        textC: "中国创新设计红星奖于2006年由中国工业设计协会、北京工业设计促进中心、国务院发展研究中心安达市多奥术大师多"
    }
]
//参赛产品
const honourProducts = [
    {
        img:[
            require("../../common/images/store/honourProduct-1.jpg"),
            require("../../common/images/store/honourProduct-1.jpg")
        ],
        textT: "红点设计大赛",
        textC: "原汁机采用研磨原理，它低速均匀地压榨出保存在果汁中丰富的活性酶，矿物质和活性维生素等营养成分，轻松榨取百分百果蔬纯原汁，它的汁渣分离技术有效排除重金属和农药残留，美味、健康果汁轻松获得。",
        date: "2016-11"
    }
]
export default class Storeindex extends Component {
    render (){
        return (
            <div>
                <Head/>
                <Nav/>
                <Storebody
                    tags={ tags }
                    casesItem={ casesItem }
                    hotTags={ hotTags }
                    honour={ honour }
                    honourProducts={ honourProducts }
                />
                <Bottom/>
            </div>
        )
    }
}