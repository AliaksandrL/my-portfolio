import React from "react";
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/Todolist.jpg'


const Projects = () => {
    const social = {
        backgroundImage: `url(${todoImage})`,
    }
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    }
    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"} description={"sed do eiusmod tempor..."}/>
                    <Project style={todolist} title={"Todo list"}
                             description={"Lorem ipsum dolor sit amet, consectetur..."}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;