import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";


const BurgerNav = () => {

    const [menuIsOpen, setBurgerMenu] = useState(false);

    let onBurgerBtnClick = () => {
        setBurgerMenu(!menuIsOpen);
    }
    console.log(menuIsOpen)
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <a href="">Contacts</a>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}></div>
        </div>
    );
}

export default BurgerNav;