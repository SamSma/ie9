import React, {Component} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Attr from "./skillAttr";
import Lei from "./skillEditLei";
import Detail from "./skillDetail";
import Add from "./skillAdd";
export default  class SkillBody extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/storesetting/skill/add" component={Add} />
                    <Route path="/storesetting/skill/attr" component={Attr} />
                    <Route path="/storesetting/skill/lei" component={Lei} />
                    <Route path="/storesetting/skill/detaill" component={Detail} />
                </Switch>
            </div>
        );
    }
}


