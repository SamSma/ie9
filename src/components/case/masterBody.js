
import React, {Component} from 'react';
import CaseNav from "./caseNav";
import MasterRight from "./masterRight";
import "./masterBody.less";

export default  class masterBody extends Component {

    render() {


        return (
            <div className="w12 of-h p-t">
                <CaseNav nav={this.props.nav}/>
                <MasterRight/>

            </div>
        );
    }
}
