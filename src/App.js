import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Background from "./Components/Background";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import FriendsContainer from "./Components/Content/Friends/FriendsContainer";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path='/profile' render={() =>
                    <Profile/>}/>
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
