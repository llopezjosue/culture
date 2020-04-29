import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Categories from "./component/Categories";
import Peinture from "./component/Peinture";
import Questions2 from "./component/questions/Questions2";
import Questions3 from "./component/questions/Questions3";
import Questions4 from "./component/questions/Questions4";
import Resultat from "./component/questions/Resultat";
import Info1 from "./component/questions/Infos1";
import Info2 from "./component/questions/Infos2";
import Info3 from "./component/questions/Infos3";
import Info4 from "./component/questions/Infos4";
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
          <Route exact path="/categories/peinture/resultat" component={Resultat} />
          <Route exact path="/categories/peinture/info1" component={Info1} />
          <Route exact path="/categories/peinture/info2" component={Info2} />
          <Route exact path="/categories/peinture/info3" component={Info3} />
          <Route exact path="/categories/peinture/info4" component={Info4} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
