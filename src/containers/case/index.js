import React, {Component} from 'react';
import Caseindex from "../../components/case/caseIndex";
import { Menu } from "antd";
const menuContent = [
    {a:"服务1",b:"领域1",c:"行业1",d:"地区1"},
    {a:"服务2",b:"领域2",c:"行业2",d:"地区2"},
    {a:"服务3",b:"领域3",c:"行业3",d:"地区3"},
    {a:"服务4",b:"领域4",c:"行业4",d:"地区4"}
]

// 筛选 服务 下拉列表
const service = (
    <Menu>
        {
            menuContent.map((v,i) => {
                return 	<Menu.Item className="caseIndexMenu" key={ i }>
                    <a rel="noopener noreferrer">{ v.a }</a>
                </Menu.Item>
            })
        }
    </Menu>
)
// 筛选 领域 下拉列表
const domain = (
    <Menu>
        {
            menuContent.map((v,i) => {
                return 	<Menu.Item className="caseIndexMenu" key={ i }>
                    <a rel="noopener noreferrer">{ v.b }</a>
                </Menu.Item>
            })
        }
    </Menu>
)
// 筛选 行业 下拉列表
const tndustry = (
    <Menu>
        {
            menuContent.map((v,i) => {
                return 	<Menu.Item className="caseIndexMenu" key={ i }>
                    <a rel="noopener noreferrer">{ v.c }</a>
                </Menu.Item>
            })
        }
    </Menu>
)
// 筛选 地区 下拉列表
const area = (
    <Menu>
        {
            menuContent.map((v,i) => {
                return 	<Menu.Item className="caseIndexMenu" key={ i }>
                    <a rel="noopener noreferrer">{ v.d }</a>
                </Menu.Item>
            })
        }
    </Menu>
)
const caseItem = [
    {
        productImg: require("../../common/images/case/caseIndexItemImg.png"),
        link: "#",
        productTit: "玻璃制品产品设计",
        level: 5,
        tag: "IT科技 / 商业",
        service: "重庆大三贸易有限公司",
        storeLogo: require("../../common/images/case/caseIndexItemLogo.png"),
        storeName: "易点工业设计",
        date: "100000"
    },
    {
        productImg: require("../../common/images/case/caseIndexItemImg.png"),
        link: "#",
        productTit: "玻璃制品产品设计1231312",
        level: 2,
        tag: "IT科技 / 商业",
        service: "重庆大三贸易有限公司",
        storeLogo: require("../../common/images/case/caseIndexItemLogo.png"),
        storeName: "易点123工业设计",
        date: "100000"
    },
    {
        productImg: require("../../common/images/case/caseIndexItemImg.png"),
        link: "#",
        productTit: "玻璃制品产品设计1231312",
        level: 1,
        tag: "IT科技 / 商业",
        service: "重庆大三贸易有限公司",
        storeLogo: require("../../common/images/case/caseIndexItemLogo.png"),
        storeName: "易点工业设计",
        date: "100000"
    }
]
export default  class Case extends Component {
    render() {
        return (
            <div>
                <Caseindex
                    menuContent={ menuContent }
                    service={ service }
                    domain={ domain }
                    tndustry={ tndustry }
                    area={ area }
                    caseItem={ caseItem }
                />
            </div>
        );
    }
}



