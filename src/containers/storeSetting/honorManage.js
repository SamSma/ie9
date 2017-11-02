import React, { Component } from 'react';
import { Tabs,Table,Icon } from 'antd';
import { Link } from 'react-router-dom';

import "./honorManage.less";

const TabPane = Tabs.TabPane;

const columns = [{
    title: '证书',
    dataIndex: 'tab1',
}, {
    title: '证书介绍',
    dataIndex: 'tab2',
    width:100
}, {
    title: '证书获取时间',
    dataIndex: 'tab3',
}, {
    title: '证书图片',
    dataIndex: 'tab4',
}, {
    title: '发布时间',
    dataIndex: 'tab5',
}, {
    title: '审核状态',
    dataIndex: 'tab6',
}, {
    title: '操作',
    dataIndex: 'tab7',
}];

//表格数据
const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i,
        tab1: `工业设计证书`,
        tab2: `设计周展品资料下载中设计周展品资料下载中`,
        tab3: `2017-09`,
        tab4: <img className="certImg" src={require("../../common/images/baseshop/defaultImg.png")} alt="tupian" />,
        tab5: `2017-09-29 19:47:50`,
        tab6: `已发布`,
        tab7: <div className="tabBtnGroup">
            <a href=""><Icon type="edit" /></a>
            <a href=""><Icon type="delete" /></a>
        </div>,
    });
}

export default class HonorManage extends Component{
    state = {
        selectedRowKeys: [], //储存表格选中项
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render(){
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return(
            <div>
                <div className="basicInfoCon">
                    <div className="basicPanel">
                        <div className="basicMainTil">
                            <span className="basicTilLine"></span>
                            <span className="basicTilWz">荣誉资历管理</span>
                        </div>
                        <div className="honorCon">
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                            <div className="honorList">
                                <img src={require("../../common/images/baseshop/honorImg.png")} alt="荣誉管理"/>
                                <p>if设计奖</p>
                                <input type="checkbox"/>
                            </div>
                        </div>
                    </div>
                    <div className="basicPanel">
                        <div className="basicMainTil">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="荣誉证书资质" key="1">
                                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                                    <div className="tabOperatBtn">
                                        <a href="" className="delBtn">批量删除</a>
                                        <Link to="/storesetting/CertUpload" className="addBtn">添加荣誉资质</Link>
                                    </div>
                                </TabPane>
                                <TabPane tab="奖项" key="2">奖项</TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}