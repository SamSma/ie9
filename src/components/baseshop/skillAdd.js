import React, {Component} from 'react';
import Model from "../model";
import BtnSave from "./btnSave";

export default  class SkillApp extends Component {
    state = {
        visible: false,
        title:"提示",
        status : 0  ,//0下一步 1成功
        lei :[{
           name:" 工业设计",
           sel : true
        }, {
            name:" 技能设计",
            sel : false
        }]
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
            <div >
                <div className="skillAdd br  bg mb ">
                        <div className="searchInput mb">
                            <input type="text" placeholder="试试输入类目关键词，快速查找相关类目"/>
                            <button className="h-btn">搜索</button>
                        </div>
                        <div className="searchBody">
                            <div className="searchLeft changeLei">
                                {
                                    this.state.lei.map((e,i)=>{
                                        return(
                                                e.sel ? <p key={i}> {e.name}<span className="x">(已入驻)</span> <span className="wei"> <i className="iconfont icon-gengduo"></i></span>   </p> : <p  key={i}> {e.name} <span className="wei"> <i className="iconfont icon-gengduo"></i></span> </p>
                                            )
                                    })
                                }

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
                        <BtnSave showModal={this.showModal}/>
                </div>

                <Model title={this.state.title} visible={this.state.visible} modelHtml={this.modelHtml} hideModal={this.hideModal} status={this.state.status} modelSuccessHtml={this.modelSuccessHtml}/>
            </div>
        );
    }
}


