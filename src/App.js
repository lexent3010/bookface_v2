import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Background from "./Components/Background";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Navbar
                store={props.store}
                /*state={props.state.users}*//>
            <div className="content">
                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}
                        /*state={props.state.profilePage}
                        newPost={props.newPost}
                        updateNewPostText={props.updateNewPostText}*/
                    />}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        store={props.store}
                        /*state={props.state.dialogsPage}*/
                    />}/>
            </div>
            <div className="background">
                <Background/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
