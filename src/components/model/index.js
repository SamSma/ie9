import React, {Component} from 'react';
import { Modal } from 'antd';
import "./index.less"
export default  class MedelDiv extends Component {

    render() {
        let {
            title,
            visible,
            modelHtml,
            hideModal,
            status,
            modelSuccessHtml
        } =this.props;

        return (

            <div>
                <Modal maskStyle="true" footer={null} title={title}  visible={visible} onCancel={hideModal} >
                    {
                        status===1 ? modelSuccessHtml() : modelHtml()
                    }
                </Modal>
            </div>
        );
    }
}


