import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Background from "./Components/Background";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import FriendsContainer from "./Components/Content/Friends/FriendsContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/Navbar/NavBarContainer";

const App = (props) => {
    return (
        <div className="app">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className="content">
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
                <Route path='/friends' render={() =>
                    <FriendsContainer/>}/>
            </div>
            <div className="background">
                <Background/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
