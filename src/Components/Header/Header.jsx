import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://i.ibb.co/Hx4qhXZ/VR-Group-logo-svg.png" alt="logo"/>
                <span>VReacte</span>
            </div>
        </header>
    )
};

export default Header;