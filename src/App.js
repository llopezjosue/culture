import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Categories from "./component/Categories";
import Peinture from "./component/Peinture";
import Questions2 from "./component/questions/Questions2";
import Questions3 from "./component/questions/Questions3";
import Questions4 from "./component/questions/Questions4";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/peinture" component={Peinture} />
          <Route exact path="/categories/peinture/question-2" component={Questions2} />
          <Route exact path="/categories/peinture/question-3" component={Questions3} />
          <Route exact path="/categories/peinture/question-4" component={Questions4} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
