import "./caseBody.less";
import React, {Component} from 'react';
import Caseright from "./caseright"
import CaseNav from "./caseNav"

export default  class caseBody extends Component {
    render() {
        return (
            <div className="case-body bg-header">
                <div className="w12">
                    <CaseNav nav={this.props.nav}/>
                    <Caseright/>
                </div>
            </div>
        );
    }
}