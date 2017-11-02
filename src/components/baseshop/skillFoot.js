import React, {Component} from 'react';
export default  class App extends Component {
    render() {
        return (
            <div>
                <div className="skillCustom clear">
                    自定义类目：高效定制开发
                    <div className="skillRight h-right">
                        <span> 管理 </span> | <span>添加</span>
                    </div>
                </div>
                <div className="skillTi">
                    <h6>
                        温馨提示
                    </h6>
                    <ul>
                        <li className="c">
                            你的店铺只能在入驻的类目下面展示。
                        </li>
                        <li className="c">
                            合理设置技能有助于官网更精准的为您派单。
                        </li>
                        <li className="c">
                            类目入驻或修改后，三个月后才能再次进行修改，请谨慎选择。
                        </li>
                        <li>
                            <span className="y">如果没有合适的类目，你可尝试添加自定义类目，我们会为您进行审核。</span><span className="x">添加“自定义类目”规则指导</span>
                        </li>
                    </ul>
                </div>
                <div className="c pl" >
                    我对技能管理有话说，<span className="x">对忽米吐槽吧</span>
                </div>
            </div>
        );
    }
}


