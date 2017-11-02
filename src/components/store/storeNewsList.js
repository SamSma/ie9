import React, { Component } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./storeNewsList.less";
//新闻
const newsItem = [
    {
        "img": require("../../common/images/store/newsItemImg.jpg"),
        "title": "多功能咖啡研磨机",
        "date": "2017-09-02",
        "content": "马海洋。树设置。他的空气在男性统治的空气中出现了几天分裂的蠕动。树，他以后不是。已经灌满不说精神绿草药有水给。在移动的第六个制服的肉开始。"
    },
    {
        "img": require("../../common/images/store/newsItemImg.jpg"),
        "title": "多功能咖啡研磨机",
        "date": "2017-09-02",
        "content": "马海洋。树设置。他的空气在男性统治的空气中出现了几天分裂的蠕动。树，他以后不是。已经灌满不说精神绿草药有水给。在移动的第六个制服的肉开始。"
    },
    {
        "img": require("../../common/images/store/newsItemImg.jpg"),
        "title": "多功能咖啡研磨机",
        "date": "2017-09-02",
        "content": "马海洋。树设置。他的空气在男性统治的空气中出现了几天分裂的蠕动。树，他以后不是。已经灌满不说精神绿草药有水给。在移动的第六个制服的肉开始。"
    },
    {
        "img": require("../../common/images/store/newsItemImg.jpg"),
        "title": "多功能咖啡研磨机",
        "date": "2017-09-02",
        "content": "马海洋。树设置。他的空气在男性统治的空气中出现了几天分裂的蠕动。树，他以后不是。已经灌满不说精神绿草药有水给。在移动的第六个制服的肉开始。"
    }
];
export default class Storenewslist extends Component {
    render (){
        return (
            <div>
                <Row gutter={ 28 } className="newsLeft">
                    {
                        newsItem.map((v,i) => {
                            return  <Col span={ 12 } key={ i }>
                                <div className="newsImg"><img src={ v.img } alt="newsItem"/></div>
                                <p className="newsTitle">
                                    <span>{ v.title }</span>
                                    <span>{ v.date }</span>
                                </p>
                                <p className="newsContent">{ v.content }</p>
                                <div className="viewDetail"><Link to="/store/storenewsdetail">查看详情</Link></div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}