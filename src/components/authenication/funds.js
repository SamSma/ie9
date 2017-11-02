import React, { Component } from "react";
import { DatePicker, Table } from 'antd';
import './funds.less';
const { RangePicker } = DatePicker;
const dataSource = [{
        key: '1',
        date: '11.11.11',
        remarks: 32,
        receipt: '$12',
        charge: '$11',
        balance: '$13'
    },
    {
        key: '2',
        date: '11.11.11',
        remarks: 32,
        receipt: '$12',
        charge: '$11',
        balance: '$13'
    },
    {
        key: '3',
        date: '11.11.11',
        remarks: 32,
        receipt: '$12',
        charge: '$11',
        balance: '$13'
    },
    {
        key: '4',
        date: '11.11.11',
        remarks: 32,
        receipt: '$12',
        charge: '$11',
        balance: '$13'
    },
    {
        key: '5',
        date: '11.11.11',
        remarks: 32,
        receipt: '$12',
        charge: '$11',
        balance: '$13'
    },
];

const columns = [{
        title: '日期',
        dataIndex: 'date',
    },
    {
        title: '摘要',
        dataIndex: 'remarks',
    },
    {
        title: '收款',
        dataIndex: 'receipt',
    },
    {
        title: '扣款',
        dataIndex: 'charge',
    },
    {
        title: '余额',
        dataIndex: 'balance',
    },
];
export default class Funds extends Component {
    render (){
        return (
            <div>
                <div className="fundsTitleBox">
                    <span>资金明细</span>
                    <span>账户变动明细</span>
                </div>
                <div className="fundsSelectTimeBox">
                    <span>选择年月</span>
                    <RangePicker size="large" />
                </div>
                <div className="fundsContent">
                    <Table dataSource={dataSource} columns={columns} footer={() =>
                        <table className="fundsTableFooter">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>本月合计</td>
                                    <td className="greenWord">0.00</td>
                                    <td className="orangeWord">-0.00</td>
                                    <td>0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    }/>
                </div>
            </div>
        )
    }
}