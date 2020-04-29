import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Categories from "./component/Categories";
import Peinture from "./component/Peinture";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/peinture" component={Peinture} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
