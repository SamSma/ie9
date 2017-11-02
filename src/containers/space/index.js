import React, {Component} from 'react';

import Header from '../../components/space/header';
import Banner from '../../components/space/banner';
import Content from '../../components/space/content';
import Bottom from '../../components/bottom';

export default class Space extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Content />
                <Bottom />
            </div>
        );
    }
}