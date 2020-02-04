import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
        <div className="content">
            <Profile/>
        </div>
      <Footer/>
    </div>
  );
};

export default App;
