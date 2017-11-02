import React, { Component } from "react";
import { DatePicker, Tabs, Table } from 'antd';
import "./tradeRecords.less";
import "../pagination/index.less";
const { RangePicker } = DatePicker;
const TabPane = Tabs.TabPane;
const dataSource = [{
        key: '1',
        createtime: '胡彦斌',
        name: 32,
        object: '西湖区湖底公园1号',
        money: '$11',
        status: '提现'
    },
    {
        key: '2',
        createtime: '胡彦斌',
        name: 32,
        object: '西湖区湖底公园1号',
        money: '$11',
        status: '提现'
    },
    {
        key: '3',
        createtime: '胡彦斌',
        name: 32,
        object: '西湖区湖底公园1号',
        money: '$11',
        status: '提现'
    },
    {
        key: '4',
        createtime: '胡彦斌',
        name: 32,
        object: '西湖区湖底公园1号',
        money: '$11',
        status: '提现'
    },
    {
        key: '5',
        createtime: '胡彦斌',
        name: 32,
        object: '西湖区湖底公园1号',
        money: '$11',
        status: '提现'
    },
];

const columns = [{
        title: '创建时间',
        dataIndex: 'createtime',
    },
    {
        title: '名称/交易号',
        dataIndex: 'name',
    },
    {
        title: '对方',
        dataIndex: 'object',
    },
    {
        title: '金额',
        dataIndex: 'money',
    },
    {
        title: '状态',
        dataIndex: 'status',
    },
];
export default class Traderecords extends Component {
    render (){
        return (
            <div>
                <div className="selectTimeBox">
                    <span>创建日期</span>
                    <RangePicker size="large"/>
                </div>
                <div className="tradeTypeBox">
                    <span>交易类型</span>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="交易" key="1">
                            <Table dataSource={dataSource} columns={columns} />
                        </TabPane>
                        <TabPane tab="提现" key="2">
                            <Table dataSource={dataSource} columns={columns} />
                        </TabPane>
                        <TabPane tab="退款" key="3">
                            <Table dataSource={dataSource} columns={columns} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}