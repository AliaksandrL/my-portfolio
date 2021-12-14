import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import menuBurger from "../../assets/menuBurger.png"


const BurgerNav = () => {

    const [menuIsOpen, setBurgerMenu] = useState(false);

    let onBurgerBtnClick = () => {
        setBurgerMenu(!menuIsOpen);
    }
    console.log(menuIsOpen)
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick}>
                <img className={menuIsOpen ? `${style.burgerBtn} ${style.burgerMenuOpen}` : style.burgerBtn} src={menuBurger}/>
            </div>
        </div>
    );
}

export default BurgerNav;