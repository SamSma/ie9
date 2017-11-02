import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
export default  class App extends Component {
    show=(e)=>{
        e.preventDefault();
        this.props.showModal();
    }
    render() {
        return (
            <div className="searchBot t-center">
                <Link to="/industry/skill" className="h-btn">取消</Link>

                <button onClick={this.show} className="h-btn sel">下一步</button>
            </div>
        );
    }
}

