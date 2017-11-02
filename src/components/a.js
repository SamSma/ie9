import React, {Component} from 'react';

export default  class A extends Component {
    state ={
        num : 5
    }
    render() {
    console.log(this.props)

        return (
            <div>
                {
                  this.state.num
                }
            </div>
        );
    }
}


