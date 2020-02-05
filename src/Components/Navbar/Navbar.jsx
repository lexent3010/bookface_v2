import React from 'react';
import s from './Navbar.module.css'


const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.background}></div>
            <div className={s.menu}>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Friends</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </div>
        </div>
    )
};

export default Navbar ;