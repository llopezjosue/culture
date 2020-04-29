import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './component/Home';
import Categories from './component/Categories';
import Peinture from './component/Peinture';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
