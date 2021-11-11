import React from "react";
import style from './Skills.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"Js"} description={"...there should be text here..."}/>
                    <Skill title={"Redux"} description={"...there should be text here...there should be text here..."}/>
                    <Skill title={"React"}
                           description={"...there should be text here...there should be text here...there should be text here..."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
