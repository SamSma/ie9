import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
export default  class App extends Component {
    show=(e)=>{

        e.preventDefault();
        this.props.showModal();
    }
    next=(e)=>{
        e.preventDefault();

        this.props.nextDiv();
    }
    up=(e)=>{
        e.preventDefault();
        this.props.upDiv();
    }

    render() {
        return (
            <div className="searchBot t-center">
                <Link to="/industry/skill" className="h-btn">取消</Link>
                {
                  this.props.next ? <button onClick={this.next} className="h-btn ">下一步</button>: <button onClick={this.up} className="h-btn ">上一步</button>
                }
                <button onClick={this.show} className="h-btn sel">保存</button>
            </div>
        );
    }
}


