import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";
import FriendsBarContainer from "./FriendsBar/FriendsBarContainer";


const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <div className={s.background}>

            </div>
            <div className={s.menu}>
                <div><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
                <div><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
                <div><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
                <div><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
                <div><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
                <br/>
                <div><NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink></div>
                <FriendsBarContainer/>
            </div>
        </nav>
    )
};

export default Navbar ;