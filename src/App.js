import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Score from "./screens/Score";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/score">
          <Score />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
