import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import success from "../../common/images/auth/success.png";
import "./bank.less";
export default  class Tel extends Component {
    state= {
        curpage :1 ,
        visibleOne : "block",
        visibleTwo : "none",
        visibleThree : "none",
        visibleFour : "none",
    }
    psotInfo =(e)=>{
        e.preventDefault();
        let num= 5;
        let that =   e.target;
        that.innerHTML =num;
        that.disabled = true;
        that.style.background ="#D9D9D9";
        var time = null;
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
                visibleFour :"none"
            })
        }else if(this.state.curpage === 3){
            this.setState({
                visibleOne : "none",
                visibleTwo : "none",
                visibleThree :"block",
                visibleFour :"none"
            })
        }else if(this.state.curpage === 4){
            this.setState({
                visibleOne : "none",
                visibleTwo : "none",
                visibleThree :"none",
                visibleFour :"block"
            })
        }
    }

    changeDivThree=(e)=>{
        e.preventDefault();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="bankSafe">
                <div style={{display:this.state.visibleOne}} className="bank tel ">
                   <div className="t-center">
                        <img src={require("../../common/images/auth/tel.jpg")} alt="tel"/>
                       <p className="tishi">
                           绑定手机号
                       </p>
                    </div>
                   <div className="main w395">
                       <div  className=" mb">
                           <input placeholder="请输入当前手机号"/>
                       </div>
                       <div  className=" mb clear">
                           <div className="h-left bankLeft">
                               <input placeholder="验证码"/>
                           </div>
                           <div className="h-right bankRight">
                               <button  onClick={this.psotInfo} className="h-btn">发送验证码</button>
                           </div>
                       </div>
                       <div >
                           <button onClick={this.change} className="h-btn">验证</button>
                       </div>
                   </div>
                </div>
                <div style={{display:this.state.visibleTwo}} className="bank ">
                    <h5>修改绑定手机</h5>
                    <div className="bankNav">
                        <span className="t-center on">
                            核实手机号码
                        </span>
                        <span className="t-center">
                            验证新号码
                        </span>
                        <span className="t-center">
                            修改成功
                        </span>
                    </div>
                    <div className="main ">
                        <div className="w395 mb">
                           <span className="telShow">手机号:</span>133****1234
                        </div>
                        <div  className="w395 mb clear">
                            <div className="h-left bankLeft">
                                <input placeholder="验证码"/>
                            </div>
                            <div className="h-right bankRight">
                                <button  onClick={this.psotInfo} className="h-btn">发送验证码</button>
                            </div>
                        </div>
                        <div className="w395 mb">
                            <button onClick={this.change} className="h-btn">下一步</button>
                        </div>
                        <div className="tishi">
                            <p>
                                常见问题：
                            </p>
                            <p>
                                ①无法获取短信验证码怎么办？

                            </p>
                            <p>
                                短信到达需要1~2分钟，若您长时间未收到确认短信，建议您重发验证码
                            </p>
                            <p>
                                ②手机好卡遗失，无法使用手机接收短信验证码怎么办？
                            </p>
                            <p>
                                您可以通过申请 <Link to="/"> 人工审核 </Link>来取消原有手机的认证信息，然后重新进行认证。
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display:this.state.visibleThree}} className="bank ">
                    <div className="bankNav">
                         <span className="t-center ">
                            核实手机号码
                        </span>
                        <span className="t-center on">
                            验证新号码
                        </span>
                        <span className="t-center">
                            修改成功
                        </span>
                    </div>
                    <div className="main ">
                        <div className="w395 mb">
                            <input type="text" placeholder="请输入当前手机号码"/>
                        </div>
                        <div  className="w395 mb clear">
                            <div className="h-left bankLeft">
                                <input  placeholder="验证码"/>
                            </div>
                            <div className="h-right bankRight">
                                <button  onClick={this.psotInfo} className="h-btn">发送验证码</button>
                            </div>
                        </div>
                        <div className="w395 mb">
                            <button onClick={this.change} className="h-btn">验证</button>
                        </div>

                    </div>
                </div>
                <div style={{display:this.state.visibleFour}} className="bank">
                    <div className="bankNav">
                        <span className="t-center ">
                            核实手机号码
                        </span>
                        <span className="t-center ">
                            验证新号码
                        </span>
                        <span className="t-center on">
                            修改成功
                        </span>
                    </div>
                    <div className="main">
                        <div className="mainSuccess">
                            <img src={success} alt="success"/>

                            <span onClick={this.changeDivThree} className="over">修改完成</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


