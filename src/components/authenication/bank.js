import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import success from "../../common/images/auth/success.png";
import "./bank.less";
export default  class Bank extends Component {
    state= {
        time:5,
        curpage :1 ,
        visibleOne : "block",
        visibleTwo : "none",
        visibleThree : "none",
    }
    psotInfo =(e)=>{
        e.preventDefault();
        let num= 5;
        let that =   e.target;
        that.innerHTML =num;
        that.disabled = true;
        that.style.background ="#D9D9D9";
        let time = null;
        time = setInterval(()=>{
            num--;
            that.innerHTML =num;
            if(num===0){
                that.disabled = false;
                that.innerHTML="发送验证码";
                clearInterval(time);
                that.style.background ="#3477C5";
            }
        },1000)
    }
    decrease=()=>{
         let time= null;
         time = setInterval(()=>{
            this.setState({
                time: --this.state.time
            })
             if(this.state.time ===0){
                 clearInterval(time);
                 this.props.history.push("/");
             }
        },1000)
    }

    change=(e)=>{
        e.preventDefault();
        let curpage = ++this.state.curpage;
        this.setState({
            curpage
        })
        if(this.state.curpage === 2){
            this.setState({
                visibleOne : "none",
                visibleTwo : "block",
                visibleThree :"none",
            })
        }else if(this.state.curpage === 3){
            this.setState({
                visibleOne : "none",
                visibleTwo : "none",
                visibleThree :"block",
            })
            this.decrease();
        }
    }

    changeDivThree=(e)=>{
      e.preventDefault();
      this.props.history.push("/");
    }
    render() {
        return (
            <div className="bankSafe">
                <div  style={{display:this.state.visibleOne}} className="bank sel">
                    <div className="bankNav">
                        <span   className="t-center on">
                            身份验证
                        </span>
                        <span   className="t-center">
                            修改支付密码
                        </span>
                        <span  className="t-center">
                            修改成功
                        </span>
                    </div>
                    <div className="main ">
                        <div  className="w395 mb">
                            <input placeholder="请输入当前手机号"/>
                        </div>
                        <div  className="w395 mb clear">
                             <div className="h-left bankLeft">
                                 <input ref="tell" placeholder="验证码"/>
                             </div>
                            <div className="h-right bankRight">
                               <button  onClick={this.psotInfo} className="h-btn">发送验证码</button>
                            </div>
                        </div>
                        <div  className="w395 ">
                            <button onClick={this.change} className="h-btn">验证</button>
                        </div>
                    </div>
                </div>
                <div style={{display:this.state.visibleTwo}} className="bank ">
                    <div className="bankNav">
                            <span className="t-center ">
                                身份验证
                            </span>
                                <span className="t-center on">
                                修改支付密码
                            </span>
                                <span className="t-center">
                                修改成功
                            </span>
                        </div>
                    <div className="main">
                            <div className="w40 clear mbl">
                                <div className="twoLeft h-left t-right">
                                   *  旧密码 :
                                </div>
                                <div className="twoRight h-right">
                                    <input type="text"/>
                                    <label className="tipple">请输入您的支付密码</label>
                                </div>
                            </div>
                            <div className="w40 clear mbl">
                                <div className="twoLeft h-left t-right">
                                    *  新密码：
                                </div>
                                <div className="twoRight h-right">
                                    <input type="password"/>
                                    <label className="tipple">请输入8-16位字符，不能是纯数字</label>
                                </div>
                            </div>
                            <div className="w40 clear mbl">
                                <div className="twoLeft h-left t-right">
                                    * 确认密码：
                                </div>
                                <div className="twoRight h-right">
                                    <input type="password"/>
                                    <label className="tipple">请输入8-16位字符，不能是纯数字</label>

                                </div>
                            </div>
                            <div className="w40 clear mbl">
                                <div className="twoLeft h-left t-right">

                                </div>
                                <div className="twoRight h-right">
                                    <button onClick={this.change} className="h-btn">完成</button>
                                </div>
                            </div>
                        </div>
                </div>
                <div style={{display:this.state.visibleThree}} className="bank">
                    <div className="bankNav">
                        <span className="t-center ">
                            身份验证
                        </span>
                        <span className="t-center ">
                            修改支付密码
                        </span>
                        <span className="t-center on">
                            修改成功
                        </span>
                    </div>
                    <div className="main">
                       <div className="mainSuccess">
                           <img src={success} alt="success"/>
                           <span className="info">
                              重置成功，{this.state.time}秒返回<Link className="myZhang" to="/">我的账户</Link>
                           </span>
                           <button onClick={this.changeDivThree} className="h-btn">确认</button>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}


