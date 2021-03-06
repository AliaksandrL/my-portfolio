import React from "react";
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";


const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<a href="">Main</a>*/}
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Main</Link>
            {/*<a href="">Skills</a>*/}
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Skills</Link>
            {/*<a href="#projects">Projects</a>*/}
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Projects</Link>
            {/*<a href="">Contacts</a>*/}
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Contacts</Link>
        </div>
    );
}

export default Nav;