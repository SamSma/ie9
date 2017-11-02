import React, {Component} from 'react';
export default  class Detail extends Component {
    render() {
        return (
            <div className="skillAdd br san bg mb ">
                <h5 className="f brx">
                    工业设计>产品设计> <span className="x">手板制作</span>
                </h5>
                <div className="skillDetail">
                    <div className="dLeft t-center">
                        <p>技能属性</p>
                        <p>技能属性</p>
                        <p>技能属性</p>
                    </div>
                    <div className="dRight">
                        <h6 className="f">
                            行业：
                        </h6>
                        <div className="showLei">
                            <span>餐饮行业</span>   <span>餐饮行业</span>   <span>餐饮行业</span>
                        </div>
                        <p>
                            该类目的交易合同状态：

                        </p>
                        <p>
                            当订单金额 小于 50 ，元时不签订交易合同

                        </p>
                        <p>
                            当订单金额大于等于500元时，必须要签订交易合同

                        </p>
                        <p>
                            当50元大于等于订单金额 ，小于500元时，交易合同的状态开启，但雇主可以主动关闭交易合同
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


