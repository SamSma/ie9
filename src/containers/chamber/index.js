import React, {Component} from 'react';
import ShopHead from "../../components/shop/shopHead";//头
import ShopNav from "../../components/shop/shopNav";//导航
import ShopBody from "../../components/shop/shopBody";//主体
import Bottom from "../../components/bottom";//尾部
export default  class Chamber extends Component {
    state={
        current :1,//当前页
        total : 50 ,//共多少页
        pageSize:12//每页多少条
    }
    getPageData=(index)=>{//分页
        console.log(index);
        this.setState({
            current: index
        });
    }
    changeTag=(key)=>{//切换tag
        console.log("key",key)
        this.setState({
            current :1,
        });
    }
    render() {
        return (
            <div>
                <ShopHead />
                <ShopNav />
                <ShopBody current={this.state.current}  pageSize={this.state.pageSize} total={this.state.total} getPageData={this.getPageData}  changeTag={this.changeTag}/>
                <Bottom />
            </div>
        );
    }
}


