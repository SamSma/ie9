import React, { Component } from "react";
import { Row, Col } from "antd";
import "./storeHonour.less";
export default class Storehonour extends Component {
    slideRight = (e) => {
        let n = e.target.getAttribute("index");
        let obj = document.getElementById("honourBox");
        if (obj.childNodes[n].className === "sliding"){
            obj.childNodes[n].className = "";
            return
        }
        obj.childNodes[n].className = "sliding";
    }
    render (){
        return (
            <div className="storehonour">
                <ul className="honourBox" id="honourBox">
                    {
                        this.props.honour.map((v,i) => {
                            return  <li key={ i }>
                                        <div className="honourLeft" onClick={ this.slideRight } index={ i }>
                                            <img src={ v.img } alt="honourImg" index={ i }/>
                                        </div>
                                        <div className="honourRight">
                                            <p>{ v.textT }</p>
                                            <p>{ v.textC }</p>
                                        </div>
                                    </li>
                        })
                    }
                </ul>
                <div className="honourProducts">
                    {
                        this.props.honourProducts.map((v,i) => {
                            return  <Row key={ i }>
                                        <Col span={ 9 }>
                                            <p>{ v.textT }</p>
                                            <p>{ v.textC }</p>
                                            <p>{ v.date }</p>
                                        </Col>
                                        <Col span={ 15 }>
                                            <Row gutter={ 12 }>
                                                {
                                                    v.img.map((n,m) => {
                                                        return <Col key={ m } span={ 8 }><img src={ n } alt="productImg"/></Col>
                                                    })
                                                }
                                            </Row>
                                        </Col>
                                    </Row>
                        })
                    }

                </div>
            </div>
        )
    }
}