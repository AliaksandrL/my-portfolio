import React from "react";
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type="submit" className={style.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;