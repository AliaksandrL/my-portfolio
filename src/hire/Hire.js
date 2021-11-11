import React from "react";
import style from './Hire.module.scss';

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${style.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I am available for Freelance</h2>
                <a href="" className={style.hireBtn}>Нанять меня</a>
            </div>
        </div>
    )
}

export default Hire;