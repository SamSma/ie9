import React, {Component} from 'react';
import { Checkbox } from 'antd';
import Model from "../model";
import Btn from "./btn";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [  "餐饮行业","食品饮料","家居建材","烟酒行业","IT行业","休闲娱乐","电子家电"
    ,"美容健身","咨询中介","房产建设","零售百业","文化教育","金融保险","农林牧渔","工业制造","交通运输" ]
export default  class Attr extends Component {
    state = {
        visible: false,
        title:"提示",
        next:false, //true 下一步 false 上一步
        status : 0  //0下一步 1成功
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
    change = (checkedValues)=>{
        console.log('checked = ', checkedValues);
    }
    upDiv = ()=>{
        this.props.history.push();
        this.props.history.push("/industry/skill/lei");
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

        <div className="skillAdd br san sanShu bg mb ">
            <h5 className="f brx">
                工业设计>产品设计> <span className="x">手板制作</span>
            </h5>
            <div className="nature clear">
                <div className="h-left ">
                    行业：
                </div>
                <div className="h-right natureName">
                    <CheckboxGroup options={plainOptions} defaultValue={['餐饮行业']} onChange={this.change} />

                </div>
            </div>
            <div className="nature">
                <div className="brx">设置该类目的交易合同状态：</div>
                <p  className="brx">
                    当订单金额 <i className="iconfont icon-gengduo"></i> <input className="in"/> 元时，不签订交易合同。当订单金额 ≥<input  className="in"/> 元时，必须要签订交易合同。
                </p>
                <p  className="brx">
                    当50元≤订单金额<i className="iconfont icon-gengduo"></i>5000元时，交易合同的状态开启，但雇主可以主动关闭交易合同。
                </p>
                <p className="notice">
                    注：交易合同将在每笔订单中签订，当发生交易纠纷的时候，将作为争议处理的依据。
                </p>
            </div>
            <Btn showModal={this.showModal} next={this.state.next} upDiv={this.upDiv}/>
            <Model title={this.state.title} visible={this.state.visible} modelHtml={this.modelHtml} hideModal={this.hideModal} status={this.state.status} modelSuccessHtml={this.modelSuccessHtml}/>

        </div>
        );
    }
}


