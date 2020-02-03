import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className="header">
            <img src="https://i.ibb.co/ts8MWrJ/bf-logo.png" alt="logo"/>
            <span>BookFace</span>
        </div>
    )
};

export default Header;