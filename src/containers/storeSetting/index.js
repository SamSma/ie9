import React, {Component} from 'react';
import Header from "../../components/baseshop/BaseHeader";
import BaseBg from "../../components/baseshop/BaseBg";
import BaseBody from "../../components/baseshop/BaseBody";

export default  class Industry extends Component {
    render() {
        return (
            <div>
               <Header/>
                <BaseBg/>
                <BaseBody/>
            </div>
        );
    }
}
