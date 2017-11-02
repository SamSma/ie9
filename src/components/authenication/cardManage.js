import React, {Component} from 'react';
import "./cardmanage.less";
export default  class CardManage extends Component {
    render() {
        return (
            <div className="cardmanage">
                <h5>添加银行卡</h5>
                <div className="clear">
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left card">
                        <div className="cardTop">

                        </div>
                        <button className="delBtn">
                            删除
                        </button>
                    </div>
                    <div className="h-left add card">
                        <h4 className="t-center fu">
                            +
                        </h4>
                        <p>
                            添加银行卡
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


