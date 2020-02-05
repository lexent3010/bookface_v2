import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Background from "./Components/Background";

const App = (props) => {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
        <div className="content">
            <Profile/>
        </div>
        <div className="background">
            <Background/>
        </div>
      <Footer/>
    </div>
  );
};

export default App;
