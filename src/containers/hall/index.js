import React, {Component} from 'react';
import Head from "../../components/authenication/authHead";
import Body from "../../components/authenication/authBody";
export default  class Hall extends Component {
    changeNav = (key)=>{//导航Id
        console.log(key);
    }
    render() {
        return (
            <div>
                <Head />
                <Body changeNav={this.changeNav} />
            </div>
        );
    }
}


