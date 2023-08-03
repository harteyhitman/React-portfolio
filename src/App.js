import React from "react";
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Bigtext from "./components/Bigtext";
import DescText from "./components/DescText";
import ScrollableContainer from "./components/ScrollableContainer";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import CommunityContribution from "./components/CommunityContribution";
import Gmail from "./components/Gmail";
const App = () => {
  return (
    
      <div className="App">
        <Navbar />
        <Bigtext />
        <DescText />
        <ScrollableContainer />
        <Tools />
        <Projects />
        <CommunityContribution />
        <Gmail />
      </div>
  );
};

export default App;
