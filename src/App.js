import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile";

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
};

export default App;
