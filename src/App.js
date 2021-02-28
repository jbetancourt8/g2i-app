import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Quiz from "./screens/Quiz";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
