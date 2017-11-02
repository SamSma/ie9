import React, {Component} from 'react';
import { Checkbox } from 'antd';
import {
    Link
} from "react-router-dom";
import Model from "../model";
import Btn from "./btn";
const CheckboxGroup = Checkbox.Group;
const plainOptions = [  "餐饮行业","食品饮料","家居建材","烟酒行业","IT行业","休闲娱乐","电子家电"
    ,"美容健身","咨询中介","房产建设","零售百业","文化教育","金融保险","农林牧渔","工业制造","交通运输" ]
export default  class Edit extends Component {
    state = {
        visible: false,
        title:"提示",
        next:true, //true 下一步 false 上一步
        status : 0 , //0下一步 1成功
        lei :[{
            name:" 工业设计",
            sel : true
        }, {
            name:" 技能设计",
            sel : false
        }]
    }
    delLei=(e)=>{
        let id = Number(e.target.id);
        let lei=this.state.lei;
        lei.forEach((e,i)=>{
            if(i === id ){
                console.log(1)
                e.sel = false;
            }
        })
        console.log(lei)
        this.setState({
            lei
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    hideModal = () => {
        this.setState({
            visible: false,
        });
    }
    nextDiv = ()=>{
        this.props.history.push()
        this.props.history.push("/industry/skill/attr");
    }
    modelHtml =()=>  {
        return (
            <div className="t-center showModel">
                <p>
                    <img src={require("../../common/images/baseshop/next.png")} alt="下一步" />
                </p>
                <p className="ti">
                    当前类目还有未完善的属性，请完善属性后在提交类目。
                </p>
                <p>
                    <button onClick={ this.hideModal } className="h-btn bgBlue">继续完善</button>
                </p>
            </div>
        )
    }
    modelSuccessHtml =()=>  {
        return (
            <div className="t-center showModel">
                <p>
                    <img src={require("../../common/images/baseshop/success.png")} alt="成功" />
                </p>
                <p className="ti">
                    保存成功
                </p>
                <p>
                    <button onClick={ this.hideModal } className="h-btn bgBlue">确定</button>
                </p>
            </div>
        )
    }
    modelHtml =()=>  {
        return (
            <div className="t-center showModel">
                <p>
                    <img src={require("../../common/images/baseshop/next.png")} alt="下一步" />
                </p>
                <p className="ti">
                    当前类目还有未完善的属性，请完善属性后在提交类目。
                </p>
                <p>
                    <button onClick={ this.hideModal } className="h-btn bgBlue">继续完善</button>
                </p>
            </div>
        )
    }
    modelSuccessHtml =()=>  {
        return (
            <div className="t-center showModel">
                <p>
                    <img src={require("../../common/images/baseshop/success.png")} alt="成功" />
                </p>
                <p className="ti">
                    保存成功
                </p>
                <p>
                    <button onClick={ this.hideModal } className="h-btn bgBlue">确定</button>
                </p>
            </div>
        )
    }
    render() {
        return (

                <div className="skillAdd br san sanLei bg mb ">
                    <div className="searchBody">
                        <div className="searchLeft changeLei">
                            {
                                this.state.lei.map((e,i)=>{
                                    return(
                                        e.sel ? <p key={i}> {e.name}<span className="x">(已入驻)</span> <span className="wei"> <i className="iconfont icon-gengduo"></i></span>   </p> : <p  key={i}> {e.name} <span className="wei"> <i className="iconfont icon-gengduo"></i></span> </p>
                                    )
                                })
                            }
                         {/*   <p className="sel">
                                工业设计 <span className="x">(已入驻)</span>
                            </p>
                            <p>
                                营销推广
                            </p>
                            <p>
                                营销推广
                            </p>*/}
                            <Link to="/industry/skill/add" className="qie">
                                        <i className="iconfont icon-qiehuan1"></i> 切换类目
                                </Link>
                        </div>
                        <div className="searchLeft">

                            <p className="sel">
                                工业设计 <span className="x">(已入驻)</span> <span className="wei"> <i className="iconfont icon-gengduo"></i></span>
                            </p>
                            <p>
                                营销推广 <span className="wei"> <i className="iconfont icon-gengduo"></i></span>
                            </p>
                            <p>
                                营销推广 <span className="wei"> <i className="iconfont icon-gengduo"></i></span>
                            </p>

                        </div>
                        <div className="searchLeft">

                            <p className="sel">
                                工业设计 <span className="x">(已入驻)</span>
                            </p>
                            <p>
                                营销推广2
                            </p>
                            <p>
                                营销推广
                            </p>

                        </div>
                        <div className="searchRight">
                            <p className="brx x">您已选择的类目</p>
                            <div className="cont brx">
                                {
                                    this.state.lei.map((e,i)=>{
                                        return (
                                            e.sel ? <span  key={i} className="mark"> {e.name} <span id={i} onClick={this.delLei} className="x delMark"><i className="iconfont icon-shanchu "></i></span>  </span>:""
                                        )
                                    })
                                }
                            </div>
                            <p className="brx x">您已添加的自定义类目</p>
                            <div className="cont">

                            </div>
                        </div>
                    </div>
                    <Btn showModal={this.showModal} next={this.state.next} nextDiv ={this.nextDiv}/>
                    <Model title={this.state.title} visible={this.state.visible} modelHtml={this.modelHtml} hideModal={this.hideModal} status={this.state.status} modelSuccessHtml={this.modelSuccessHtml}/>
                </div>

        );
    }
}


