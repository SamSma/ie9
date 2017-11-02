import React,{ Component } from 'react';
import { Icon } from 'antd';

import './index.less';

export default class Header extends Component {
    render(){
        return (
            <header>
                <div className="header">
                    <div className="f-left">
                        <span>欢迎来到忽米网</span>
                        <a href="">APP</a>
                        <a href="">忽米国际</a>
                        <a href="">公众号</a>
                    </div>
                    <div className="f-right">
                        <a href="">我是雇主<Icon type="down" /></a>
                        <a href="">我的服务商<Icon type="down" /></a>
                        <span>
                            <a href="">登录</a>|<a href="">注册</a>
                        </span>
                        <b>4000236666</b>
                    </div>
                </div>
            </header>
        )
    }
}