import React from "react";
import style from './Nav.module.scss';
import Title from "../../common/components/title/Title";

const Nav = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={"Sasha Lipski"}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={"telegramIcon"} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={"facebookIcon"} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={"linkedinIcon"} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={"vkIcon"} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Nav;