import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Sasha Lipski</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2021 Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer;