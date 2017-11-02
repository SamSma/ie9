import React, {Component} from 'react';
import { Tabs } from 'antd';
import AuthMain from "./authMain";
import "./authBody.less";


const TabPane = Tabs.TabPane;

export default  class authBody extends Component {
     callback=(key)=> {
        this.props.changeNav(key);
    }
    render() {
        return (
            <div className="AuthBody">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="我的账户" key="1">
                            <AuthMain />
                        </TabPane>
                        <TabPane tab="交易记录" key="2"><AuthMain /> </TabPane>
                        <TabPane tab="资金明细" key="3"><AuthMain /></TabPane>
                        <TabPane tab="安全设置" key="4"><AuthMain /></TabPane>
                    </Tabs>
            </div>
        );
    }
}


