import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Categories from "./component/Categories";
import Peinture from "./component/Peinture";
import Questions2 from "./component/questions/Questions2";
import Questions3 from "./component/questions/Questions3";
import Questions4 from "./component/questions/Questions4";
import Resultat from "./component/questions/Resultat";
import Info1 from "./component/questions/Info1";
import Info2 from "./component/questions/Info2";
import Info3 from "./component/questions/Info3";
import Info4 from "./component/questions/Info4";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //////////////////// COMPTEUR TEMPS ////////////////////////
  const [dateStart, setDateStart] = useState();

  const getDateStart = () => {
    const moment = require("moment");
    let dateNow = moment().format("YYYY-MM-DD-hh-mm-ss");
    dateNow = moment(dateNow.split("-"));
    setDateStart(dateNow);
    console.log("start app getdatestart" + dateStart);
  };

  useEffect(() => {
    if (!dateStart) {
      getDateStart();
    }
  });
  /////////////////////////////////////////////////////////

  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/peinture">
            <Peinture getDateStart={getDateStart} dateStart={dateStart} />
          </Route>
          <Route exact path="/categories/peinture/question-2" component={Questions2} />
          <Route exact path="/categories/peinture/question-3" component={Questions3} />
          <Route exact path="/categories/peinture/question-4" component={Questions4} />
          <Route exact path="/categories/peinture/info1" component={Info1} />
          <Route exact path="/categories/peinture/info2" component={Info2} />
          <Route exact path="/categories/peinture/info3" component={Info3} />
          <Route exact path="/categories/peinture/info4" component={Info4} />
          <Route exact path="/categories/peinture/resultat">
            <Resultat dateStart={dateStart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
  