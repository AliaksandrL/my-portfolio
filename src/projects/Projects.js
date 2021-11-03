import React from "react";
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css';
import Project from "./project/Project";



const Projects = () => {
 return (
     <div className={style.projectsBlock}>
         <div className={`${styleContainer.container} ${style.projectsContainer}`}>
             <h2 className={style.title}>Projects</h2>
             <div className={style.projects}>
                 <Project title={"Social network"} description={"sed do eiusmod tempor..."}/>
                 <Project title={"Todo list"} description={"Lorem ipsum dolor sit amet, consectetur..."}/>
             </div>
         </div>
     </div>
 )
}

export default Projects;