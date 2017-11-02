import React, {Component} from 'react';
import { Tabs,Steps, Button } from 'antd';

import Header from "../../components/authenication/authHead";
import Footer from "../../components/bottom"
import "../../components/authenication/authBody.less";
import "./authPersonal.less"

const TabPane = Tabs.TabPane;
const Step = Steps.Step;

const steps = [{
    title: '认证手机号码'
}, {
    title: '上传身份证照片',
}, {
    title: '确认信息',
}, {
    title: '人脸识别',
}, {
    title: '认证结果',
}];



export default class AuthPersonal extends Component{
    callback=(key)=> {
        this.props.changeNav(key);
    }

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            disabled: 0,
        };
    }

    stepCon = () => {
        if(this.state.current === 0){
            return <div className="stepOne">
                        <p>手机号：<span>133***1589</span></p>
                        <div className='validInput'>
                            <input type='text' onInput={this.inputChange}/>
                            <a href=''>发送验证码</a>
                        </div>
                    </div>
        }else if(this.state.current === 1){
            return <div className="stepTwo">
                        <div className="cardInfo">
                            <div className="cardPic">
                                <img src={require("../../common/images/auth/cardFront.png")} alt="身份证正面照"/>
                                <a href="" className="cardUploadBtn">点击<br/>上传</a>
                                <input type="file" className="cardInputFile" />
                            </div>
                            <div className="cardInfoPrompt">
                                <p>请上传本人身份证正面头部照片</p>
                                <ul>
                                    <li>必须看清证件信息，且证件薪资不能遮挡</li>
                                    <li>支持.jpg,bmp,png,gif格式</li>
                                    <li>图片大小不超过2M，长款4096以内</li>
                                    <li>你提供的照片忽米网将予以保护，不会用做其他用途</li>
                                </ul>
                            </div>
                            <p className="cardInfoTil">上传身份证正面照</p>
                        </div>
                        <div className="cardInfo">
                            <div className="cardPic">
                                <img src={require("../../common/images/auth/cardBehind.png")} alt="身份证背面照"/>
                                <a href="" className="cardUploadBtn">点击<br/>上传</a>
                                <input type="file" className="cardInputFile" />
                            </div>
                            <div className="cardInfoPrompt">
                                <p>请上传本人身份证背面头部照片</p>
                                <ul>
                                    <li>支持.jpg,bmp,png,gif格式</li>
                                    <li>图片大小不超过2M，长款4096以内</li>
                                    <li>你提供的照片忽米网将予以保护，不会用做其他用途</li>
                                </ul>
                            </div>
                            <p className="cardInfoTil">上传身份证背面照</p>
                        </div>
                    </div>;
        }else if(this.state.current === 2){
            return <div className="stepThree">
                        <img src={require("../../common/images/auth/authTx.png")} alt="头像"/>
                        <p>
                            姓名：
                            <span>张三</span>
                            <a href="" className="stepUpdateBtn">修改</a>
                        </p>
                        <p>
                            身份证号码：
                            <span>524618******26056890</span>
                            <a href="" className="stepUpdateBtn">修改</a>
                        </p>
                        <p>
                            有效期：
                            <span>2019-12-12至2029-12-11</span>
                        </p>
                    </div>;
        }else if(this.state.current === 3){
            return <div className="stepFour">
                        <img src={require("../../common/images/auth/authValid.png")} alt="身份验证服务"/>
                        <p>身份验证服务</p>
                        <img src={require("../../common/images/banner/logo.png")} alt=""/>
                        <p className="authSupport">技术支持：北京了嘤科技</p>
                    </div>;
        }else if(this.state.current === 4){
            return <div className="stepFive">
                        <img src={require("../../common/images/auth/authSuccess.png")} alt="个人认证成功"/>
                        <p>个人认证成功</p>
                    </div>;
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    inputChange = (e) =>{
        if(e.target.value.replace(/(^\s*)|(\s*$)/g, "") !== ""){
            this.setState({
                disabled:1
            });
            document.getElementById("nextBtn").removeAttribute("disabled");
            document.getElementById("nextBtn").onclick = () => {
                    this.next();
            }
        }else{
            this.setState({
                disabled:0
            });
            document.getElementById("nextBtn").setAttribute("disabled","disabled");
        }
    }


    render(){
        const { current } = this.state;
        return (
            <div>
                <Header />
                <div className="AuthBody">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="我的账户" key="1"></TabPane>
                        <TabPane tab="交易记录" key="2"></TabPane>
                        <TabPane tab="资金明细" key="3"></TabPane>
                        <TabPane tab="安全设置" key="4"></TabPane>
                    </Tabs>
                </div>
                <div className="AuthMain">
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>

                    <div className="steps-content authPersonalCon">
                        {this.stepCon()}

                    </div>
                    <div className="steps-action">
                        {
                            this.state.current === 2
                            &&
                            <Button className="prevBtn" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                重新上传
                            </Button>
                        }
                        {
                            this.state.current < steps.length - 1
                            &&
                            <Button id="nextBtn" disabled className={this.state.current === 2 ? 'nextBtn stepThreeBtn' : 'nextBtn'} type="primary" onClick={() => this.next()}>下一步</Button>
                        }
                        {
                            this.state.current === steps.length - 1
                            &&
                            <Button type="primary" className="nextBtn" >确认</Button>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}