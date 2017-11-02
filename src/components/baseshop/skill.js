import React, {Component} from 'react';
import SkillBody from "./skillBody";
import SkillHead from "./skillHead";
import SkillBot from "./skillFoot";

import "./skill.less";
export default  class Skill extends Component {
    render() {
        return (
            <div className="skill">
                <SkillHead />
                <SkillBody />
                <SkillBot />
            </div>
        );
    }
}


