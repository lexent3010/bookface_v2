import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://i.ibb.co/vZgVKRd/bf-logo.png" alt="logo"/>
                <span>BookFace</span>
            </div>
        </div>
    )
};

export default Header;