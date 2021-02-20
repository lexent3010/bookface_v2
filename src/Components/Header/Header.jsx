import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://i.ibb.co/Hx4qhXZ/VR-Group-logo-svg.png" alt="logo"/>
                <span>VReacte</span>
            </div>
            <div className={s.auth}>{props.isLogin ?
                <div>{props.login}</div> : <NavLink to="/login">please login</NavLink>}</div>
        </header>
    )
};

export default Header;