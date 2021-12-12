import React from "react";
import style from './Footer.module.scss';
import Title from "../common/components/title/Title";
import telegramIcon from "../assets/telegram2.svg"
import vkIcon from '../assets/vk.svg'
import facebookIcon from '../assets/facebook.svg'
import LinkedInIcon from "../assets/linkedin.svg"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={"Sasha Lipski"}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="https://www.linkedin.com/in/sasha-lipski-250b68189/">
                            <img src={LinkedInIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="https://t.me/SashaL1990">
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={vkIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={facebookIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer;