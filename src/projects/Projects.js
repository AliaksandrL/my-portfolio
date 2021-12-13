import React from "react";
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.jpeg'
import socialImage from './../assets/image/social-media-small-businesses-use.jpg'


const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    }
    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"} description={"Social network: research project, sharpening skills"} href_first={'https://aliaksandrl.github.io/react-social-network/'}/>
                    <Project style={todolist} title={"Todo list"}
                             description={"To do list for every day on the week"} href_first={'https://aliaksandrl.github.io/todolist-ts/'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;