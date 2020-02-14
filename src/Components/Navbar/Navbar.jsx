import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.background}>

            </div>
            <div className={s.menu}>
                <div><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
                <div><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
                <div><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
                <div><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
                <br/>
                <div><NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink></div>
                <Friends state={props.state}/>
            </div>
        </div>
    )
};

export default Navbar ;