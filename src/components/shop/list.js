import React, {Component} from 'react';
import {
    Row, Col
} from "antd";
import Pages from "../pagination";
import "./list.less";

export default  class List extends Component {
    onChange = (page) => {
        this.props.getPageData(page);
    }
    render() {

        return (
            <div className="list">
                <Row gutter={24}>

                        {
                            this.props.img.map((v,index)=>{
                               return   <Col key={index} className="gutter-row " span={6}> <div   className="gutter-box bodyList">
                                             <img src={`${v}`} alt=""/>
                                             <div className="listContent">
                                                 <h5>安防监控</h5>
                                                 <p>
                                                     栅格常常需要和间隔进行配合,栅格常常需要和间隔进行配合,栅格常常...
                                                 </p>
                                             </div>
                                        </div>
                                        </Col>
                            })
                        }


                </Row>
                <div className="t-center">
                    <Pages current={this.props.current} onChange={this.onChange} total={this.props.total} />
                </div>
            </div>

        );
    }
}


