import React from "react";
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import react from "../assets/react-js.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import redux from "../assets/redux.svg";
import css from "../assets/css.svg";
import dotnet from "../assets/microsoft-dot-net.svg";
import mysql from "../assets/mysql.svg";


const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={style.container}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"React"} description={"...there should be text here...there should be text here..."} icon={react}/>
                    <Skill title={"JavaScript"} description={"...there should be text here...there should be text here..."} icon={js}/>
                    <Skill title={"TypeScript"} description={"...there should be text here...there should be text here..."} icon={ts}/>
                    <Skill title={"Redux"} description={"...there should be text here...there should be text here..."} icon={redux}/>
                    <Skill title={"CSS3"} description={"...there should be text here...there should be text here..."} icon={css}/>
                    <Skill title={".NET Framework"} description={"...there should be text here...there should be text here..."} icon={dotnet}/>
                    <Skill title={"MySQL"} description={"...there should be text here...there should be text here..."} icon={mysql}/>
                    {/*<Skill title={"React"}*/}
                    {/*       description={"...there should be text here...there should be text here...there should be text here..."}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Skills;
