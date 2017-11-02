import React, { Component } from 'react';
import { Table,Icon } from 'antd';

import "./honorManage.less";

const columns = [{
    title: '封面图片',
    dataIndex: 'tab1',
}, {
    title: '新闻标题',
    dataIndex: 'tab2',
    width:100
}, {
    title: '新闻内容',
    dataIndex: 'tab3',
    width: 160
}, {
    title: '最后编辑时间',
    dataIndex: 'tab4',
    width:150
}, {
    title: '审核状态',
    dataIndex: 'tab5',
}, {
    title: '操作',
    dataIndex: 'tab6',
}];

//表格数据
const data = [];
for (let i = 0; i < 4; i++) {
    data.push({
        key: i,
        tab1: <img className="certImg" src={require("../../common/images/baseshop/defaultImg.png")} alt="tupian" />,
        tab2: `设计周展品资料下载中设计周展品资料下载中`,
        tab3: `有没有因为路程的原因，错失了北京国际设计周的43个会场展览？不需要担心，我们会每日更新各个会场的惊艳展品资料。点击下述链接，即可获取展品资料哦~~~http://m.lkker.com/document_download/bond/asdqweasd`,
        tab4: `2017-09-29 19:47:50`,
        tab5: `已发布`,
        tab6: <div className="tabBtnGroup">
            <a href=""><Icon type="edit" /></a>
            <a href=""><Icon type="delete" /></a>
        </div>,
    });
}

export default class NewsManage extends Component{
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
                            <span className="basicTilWz">新闻管理</span>
                            <div className="newsCon">
                                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                                <div className="tabOperatBtn">
                                    <a href="" className="delBtn">批量删除</a>
                                    <a href="" className="addBtn">添加新闻</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}