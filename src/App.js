import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Background from "./Components/Background";
import Messages from "./Components/Content/Messages/Messages";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
        <div className="content">
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Messages}/>
        </div>
        <div className="background">
            <Background/>
        </div>
      <Footer/>
    </div>
  );
};

export default App;
