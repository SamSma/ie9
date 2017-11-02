import React, {Component} from 'react';
import { Tabs, Steps, Button, Row, Col, DatePicker } from 'antd';

import Header from "../../components/authenication/authHead";
import Footer from "../../components/bottom"
import "../../components/authenication/authBody.less";
import "./authEnte.less"

const TabPane = Tabs.TabPane;
const Step = Steps.Step;

const steps = [{
    title: '认证手机号码'
}, {
    title: '上传企业信息',
}, {
    title: '上传法人信息',
}, {
    title: '确认信息',
}, {
    title: '认证结果',
}];



export default class AuthEnte extends Component{
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
                            <input type='text'onInput={this.inputChange}/>
                            <a href=''>发送验证码</a>
                        </div>
                    </div>
        }else if(this.state.current === 1){
            return <div className="stepTwo">
                        <Row>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>企业名称：</span>
                            </Col>
                            <Col span={20}>
                                <input type="text" placeholder="请输入营业名称"/>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>企业执照注册号：</span>
                            </Col>
                            <Col span={20}>
                                <input type="text" placeholder="请输入营执照业注册号"/>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>企业执照所在地：</span>
                            </Col>
                            <Col span={20}>
                                <select>
                                    <option>--请选择省份--</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <select>
                                    <option>--请选择城市--</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <select>
                                    <option>--请选择地区--</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>常用地址：</span>
                            </Col>
                            <Col span={20}>
                                <input className="longInput" type="text" placeholder="请输入常用地址"/>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>营业年限：</span>
                            </Col>
                            <Col span={20} className="stepTwoYynx">
                                <input type="radio" name="yynx" />
                                <DatePicker />
                                <input type="radio" name="yynx" />
                                <span>长期</span>
                                <p>若证件有效期为长期，请勾选长期。例如：有效期为2016.11.16-长期，则勾选长期。</p>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>经营范围：</span>
                            </Col>
                            <Col span={20}>
                                <input type="text" placeholder="请输入经营范围"/>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>组织机构代码证：</span>
                            </Col>
                            <Col span={20}>
                                <input type="text" placeholder="请输入组织机构代码证"/>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>组织机构代码证扫描件：</span>
                            </Col>
                            <Col span={20} className="cardUpload">
                                <div className="cardUploadCon">
                                    <img src={require("../../common/images/auth/uploadImg.png")} alt="上传组织机构代码证扫描件"/>
                                    <input type="file"/>
                                </div>
                                <div className="cardInfoPrompt">
                                    <p>证件要求</p>
                                    <ul>
                                        <li>必须为清晰、完整的<span className="mainColor">彩色</span>原件扫描件或数码照</li>
                                        <li>仅支持.jpg .bmp .png .gif的图片格式，图片大小不超过3M</li>
                                        <li>必须在有效期内且年检查齐全（当年成立的公司无年检章）</li>
                                        <li>必须为中国大陆工商局颁发</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>营业执照副本扫描件：</span>
                            </Col>
                            <Col span={20} className="cardUpload">
                                <div className="cardUploadCon">
                                    <img src={require("../../common/images/auth/uploadImg.png")} alt="上传营业执照副本扫描件"/>
                                    <input type="file"/>
                                </div>
                                <div className="cardInfoPrompt">
                                    <p>证件要求</p>
                                    <ul>
                                        <li>请上传由中国大陆工商局颁发的，在有效期内且年检章齐全（当年成立的公司无年检章）的证件图片</li>
                                        <li>请提供清晰、完整的<span className="mainColor">彩色</span>原件扫描件或数码照</li>
                                        <li>证件必须是彩色原件电子版，可以是扫描件或者数码拍摄照片</li>
                                        <li>仅支持.jpg .bmp .png .gif的图片格式，图片大小不超过3M</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>;
        }else if(this.state.current === 2){
            return <div className="stepThree">
                        <div className="stepThreePrompt">
                            <span className="tilLine"></span>
                            <span className="tilWz">请上传法人身份证正照片，若法人为外籍人员<a href="">请点这里</a></span>
                        </div>
                        <Row>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>身份证正面照：</span>
                            </Col>
                            <Col span={20} className="cardUpload">
                                <div className="cardUploadCon">
                                    <img src={require("../../common/images/auth/uploadImg.png")} alt="上传身份证正面照"/>
                                    <input type="file"/>
                                </div>
                                <div className="cardInfoPrompt">
                                    <span>示例：</span>
                                    <img src={require("../../common/images/auth/cardFrontSample.png")} alt="身份证正面照示例"/>
                                    <ul>
                                        <li>请上传本人身份证正面头部照片</li>
                                        <li>必须看清证件信息，且证件信息不能被遮挡</li>
                                        <li>仅支持.jpg .bmp .png .gif的图片格式</li>
                                        <li>图片大小不超过2M，长宽4096px以内</li>
                                        <li>您提供的照片忽米网将予以保护，不会用于其他用途</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={4}>
                                <span className="asterisk">*</span>
                                <span>身份证反面照：</span>
                            </Col>
                            <Col span={20} className="cardUpload">
                                <div className="cardUploadCon">
                                    <img src={require("../../common/images/auth/uploadImg.png")} alt="上传身份证正面照"/>
                                    <input type="file"/>
                                </div>
                                <div className="cardInfoPrompt">
                                    <span>示例：</span>
                                    <img src={require("../../common/images/auth/cardBackSample.png")} alt="身份证正面照示例"/>
                                    <ul>
                                        <li>必须看清证件信息，且证件信息不能被遮挡</li>
                                        <li>仅支持.jpg .bmp .png .gif的图片格式</li>
                                        <li>图片大小不超过2M，长宽4096px以内</li>
                                        <li>您提供的照片忽米网将予以保护，不会用于其他用途</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>;
        }else if(this.state.current === 3){
            return <div className="stepFour">
                        <img src={require("../../common/images/auth/authTx.png")} alt="头像"/>
                        <p>
                            姓名：
                            <span>张三</span>
                            <a href="" className="stepUpdateBtn">修改</a>
                        </p>
                        <p>
                            身份证号码：
                            <span>524618******26056891</span>
                            <a href="" className="stepUpdateBtn">修改</a>
                        </p>
                        <p>
                            有效期：
                            <span>2019-12-12至2029-12-11</span>
                        </p>
                    </div>;
        }else if(this.state.current === 4){
            return <div className="stepFive">
                        <img src={require("../../common/images/auth/authSuccess.png")} alt="企业认证成功"/>
                        <p>企业认证成功</p>
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

                    <div className="steps-content autEnteCon">
                        {this.stepCon()}

                    </div>
                    <div className="steps-action">
                        {
                            this.state.current === 3
                            &&
                            <Button className="prevBtn" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                重新上传
                            </Button>
                        }
                        {
                            this.state.current < steps.length - 1
                            &&
                            <Button id="nextBtn" disabled className={this.state.current === 3 ? 'nextBtn stepThreeBtn' : 'nextBtn'} type="primary" onClick={() => this.next()}>下一步</Button>
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