import "./caseright.less";
import info from "../../common/images/case/2.jpg";
import React, {Component} from 'react';
import { Cascader } from 'antd';
import phone from "../../common/images/case/phone.jpg"
import mail from "../../common/images/case/mail.jpg"
export default  class caseright extends Component {
    render() {
        const options = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];

        function onChange(value) {
            console.log(value);
        }
        return (
            <div className="h-right case-right">
               <div className="user">
                   <div className="info-h2">
                       <h2>基本信息</h2>
                   </div>
                   
                   <div className="u-info">
                       <div className="info-left">
                           <div className="info-top">
                           <img src={info} alt="tupian" className="h-left"/>
                           
                           <span>
                           <h3>米虫</h3>
                           <p>下午好~</p>
                           <a>修改个人信息 ></a>
                           </span>
                           </div>
                           <div className="change">
                               <a>修改头像</a>
                           </div>
                       </div>
                       <div className="info-right h-right">
                           <div className="phone">
                               <div className="icon"><img src={phone} alt="tupian"/></div>
                               <h4>手机绑定 :<b>198****321</b></h4>
                               <p>直接使用“手机号码”登录忽米网，并受到中标，支付等提醒</p>
                           </div>
                           <div className="mail">
                               <div className="icon2"><img src={mail} alt="tupian"/></div>
                               <div className="mail-top">
                                   <h5>邮箱绑定 ：<i>未绑定</i></h5>
                                   <a>未绑定</a>
                               </div>
                               <p>直接使用“邮箱”登录忽米网，并受到中标，支付等提醒</p>
                           </div>
                        
                       </div>
                   </div>

               </div>
               <div className="add">
                   <div className="add-h2">
                        <h2>邮寄地址</h2>
                   </div>
                   <div className="add-table">
                        <div className="name size pos">
                            <p className="h-left">收件人姓名：</p>
                            <input className="h-right in"type="text" placeholder="请填写收件人姓名"/>
                        </div>
                        <div className="address size pos">
                            <p className="h-left send">寄送区域：</p>
                            <Cascader className="h-left w-h"options={options} onChange={onChange} placeholder="请选择省份" />
                            <Cascader className="h-left w-h" options={options} onChange={onChange} placeholder="请选择省份" />
                            <Cascader className="h-left w-h" options={options} onChange={onChange} placeholder="请选择省份" />
                        </div>
                        <div className="de-add size pos">
                            <p className="h-left">详细地址：</p>
                            <input className="h-right in" type="text" placeholder="请填写详细街道地址，不含省市区"/>
                        </div>
                        <div className="code size pos">
                            <p className="h-left">邮政编码：</p>
                            <input className="h-right in" type="text" placeholder="请填写邮政编码"/>
                        </div>
                        <div className="num size pos">
                            <p className="h-left">联系电话：</p>
                            <input className="h-right in" type="text" placeholder="请填写联系电话"/>
                        </div>
                        <a className="h-right del-add">删除地址</a>                                                 
                   </div>
                   <div className="save">
                       <a className="new-add">新增地址</a>
                       <a className="save-add">保存</a>

                   </div>
                  
               </div>
            </div>
        );
    }
}