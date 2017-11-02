import React, {Component} from 'react';
import { Row, Col,Icon } from 'antd';
import "./masterRight.less";
import a1 from "../../common/images/case/a1.jpg";
import b1 from "../../common/images/case/b1.jpg";
import c1 from "../../common/images/case/c1.jpg";
import d1 from "../../common/images/case/d1.jpg";
import d2 from "../../common/images/case/d2.jpg";
import d3 from "../../common/images/case/d3.jpg";
import qiu from "../../common/images/case/qiu.jpg";
export default  class masterRight extends Component {
    render() {
        return(
            <div className="master-right h-right">
                <div className="dingdan">
                    <div className="dd-h2">
                        <h2 className="h-left">我的订单</h2>
                        <a className="h-right">全部订单</a>
                    </div>
                    <div>
                        <div className="bao">
                        <div className="order order2 h-left">
                            <div className="o-img" align="center"><img src={d1} alt="tupian"/></div>
                            <h2>待托管<span>55</span></h2>
                            <h3>猫眼电影新片电影“想看”量推广</h3>
                            <h4>2017-09-30 19:30</h4>
                            <h5><span className="h-left">￥3000.00</span><a className="h-right">代付款</a></h5>
                        </div>
                        <div className="order order2 h-left">
                            <div className="o-img" align="center"><img src={d2} alt="tupian"/></div>
                            <h2>待托管<span>55</span></h2>
                            <h3>猫眼电影新片电影“想看”量推广</h3>
                            <h4>2017-09-30 19:30</h4>
                            <h5><span className="h-left">￥3000.00</span><a className="h-right">代付款</a></h5>
                        </div>
                        <div className="order h-left">
                            <div className="o-img" align="center"><img src={d3} alt="tupian"/></div>
                            <h2>待托管<span>55</span></h2>
                            <h3>猫眼电影新片电影“想看”量推广</h3>
                            <h4>2017-09-30 19:30</h4>
                            <h5><span className="h-left">￥3000.00</span><a className="h-right">代付款</a></h5>
                        </div>
                        </div>

                    </div>


                </div>

                <div className="fapiao">

                        <Row className="fp-h2">
                            <Col span={12}>
                                <h2>我的发票<a>新增专票资质</a><a>新增发票抬头</a></h2>
                            </Col>
                            <Col span={12}>
                                <a className="h-right shen">发票申请</a>
                            </Col>
                        </Row>

                    <div className="fp-div">
                        <div className="piao h-left">
                            <h3>普票</h3>
                            <h4>发票抬头 ：</h4>
                            <h5>北京名医质询</h5>
                            <h6><a>保存</a><a>删除</a></h6>

                        </div>
                        <div className="zhuanpiao h-left">
                            <h3>专票</h3>
                            <div className="h4-con">
                            <h4>公司名称：<span>北京名医咨讯</span></h4>
                            <h4>开户银行：<span>中国工商银行</span></h4>
                            <h4>注册地址：<span>北京市</span></h4>
                            </div>
                            <h5><a>查看/修改</a><a>删除</a></h5>

                        </div>
                        <div className="zhuanpiao h-left">
                            <h3>专票</h3>
                            <div className="h4-con">
                                <h4>公司名称：<span>北京名医咨讯</span></h4>
                                <h4>开户银行：<span>中国工商银行</span></h4>
                                <h4>注册地址：<span>北京市</span></h4>
                            </div>
                            <h5><a>查看/修改</a><a>删除</a></h5>

                        </div>
                        <div className="zhuanpiao h-left">
                            <h3>专票</h3>
                            <div className="h4-con">
                                <h4>公司名称：<span>北京名医咨讯</span></h4>
                                <h4>开户银行：<span>中国工商银行</span></h4>
                                <h4>注册地址：<span>北京市</span></h4>
                            </div>
                            <h5><a>查看/修改</a><a>删除</a></h5>

                        </div>

                    </div>


                </div>

                <div className="server">
                    <div className="server-h2">
                        <h2 className="h-left">收藏的服务商</h2>
                        <a className="h-right">全部查看</a>
                    </div>
                    <div className="server-div">
                        <div className="left-i h-left">  <Icon type="left" /></div>
                        <div className="kuai h-left m-r">
                            <div className="xu" align="center">
                            <img src={a1} alt="tupian"/>
                            <h2>杭州奥格工业设计有限公司</h2>
                                <img src={qiu} alt="tupian"/>
                            </div>
                            <div className="all-a" align="center">
                                <a>工业设计</a>
                                <a>产品设计</a>
                                <a>供应链服务</a>
                                <a>VI</a>
                                <a>嵌入式开发</a>

                            </div>
                        </div>

                        <div className="kuai h-left m-r">
                            <div className="xu" align="center">
                                <img src={a1} alt="tupian"/>
                                <h2>杭州奥格工业设计有限公司</h2>
                                <img src={qiu} alt="tupian"/>
                            </div>
                            <div className="all-a" align="center">
                                <a>工业设计</a>
                                <a>产品设计</a>
                                <a>供应链服务</a>
                                <a>VI</a>
                                <a>嵌入式开发</a>

                            </div>
                        </div>

                        <div className="kuai h-left">
                            <div className="xu" align="center">
                                <img src={a1} alt="tupian"/>
                                <h2>杭州奥格工业设计有限公司</h2>
                                <img src={qiu} alt="tupian"/>
                            </div>
                            <div className="all-a" align="center">
                                <a>工业设计</a>
                                <a>产品设计</a>
                                <a>供应链服务</a>
                                <a>VI</a>
                                <a>嵌入式开发</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-h2">
                        <h2>进行中的活动</h2>
                    </div>
                    <div>
                        <div className="ac-content">
                            <div className="con h-left">
                            <img src={b1} alt="tupian"/>
                            <h2>与客人在中心的童话设计</h2>
                            </div>
                            <div className="con h-left center-con">
                                <img src={b1} alt="tupian"/>
                                <h2>与客人在中心的童话设计</h2>
                            </div>
                            <div className="con h-left">
                                <img src={b1} alt="tupian"/>
                                <h2>与客人在中心的童话设计</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zixun">
                    <h2><a>热门资讯</a></h2>
                    <div className="zc">
                    <div className="zc-content h-left">
                        <div className="zc-con">
                            <img src={c1} alt="tupian"/>
                            <h3>网络精英座谈会</h3>
                            <p>台湾的一设计师，探讨手绘的，有些地方过于深入了，新手看看还会是很有益的</p>
                        </div>

                    </div>
                    <div className="zc-content h-left cen-con">
                        <div className="zc-con">
                            <img src={c1} alt="tupian"/>
                            <h3>网络精英座谈会</h3>
                            <p>台湾的一设计师，探讨手绘的，有些地方过于深入了，新手看看还会是很有益的</p>
                        </div>

                    </div>
                    <div className="zc-content h-left">
                        <div className="zc-con">
                            <img src={c1} alt="tupian"/>
                            <h3>网络精英座谈会</h3>
                            <p>台湾的一设计师，探讨手绘的，有些地方过于深入了，新手看看还会是很有益的</p>
                        </div>
                    </div>

                    </div>
                </div>



                </div>






        );
    }
}