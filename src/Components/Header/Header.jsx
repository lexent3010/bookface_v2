import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://i.ibb.co/Hx4qhXZ/VR-Group-logo-svg.png" alt="logo"/>
                <span>VReacte</span>
            </div>
        </div>
    )
};

export default Header;