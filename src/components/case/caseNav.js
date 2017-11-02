import React, {Component} from 'react';
import "./caseNav.less"
import {
    Link
} from "react-router-dom";
export default  class CaseNav extends Component {
    render() {
        return (
            <div className="left-nav">
                {this.props.nav.map((value,index)=>{
                    return<Link to={value.route} className="nav-d" key={index} value={value} index={index}>
                        <img src={value.icon} className="icon" alt="tupian"/>{value.title}</Link>
                })}


            </div>
        );
    }
}
