import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={"Contacts"}/>
                <Fade>
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder={"Name"} cols="30"/>
                    <input type="email" className={style.formArea} placeholder={"e-mail"}/>
                    <textarea className={style.messageArea} placeholder={"Message"}/>
                    <button type="submit">Send message</button>
                </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;