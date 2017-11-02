import React, {Component} from 'react';
import { Pagination } from 'antd';
import "./index.less";
export default  class Page extends Component {

    render() {
        return (

                <Pagination {...this.props} />

        );
    }
}


