import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import Screenshot from "./Screenshot";
import Home from "./Home";
import ShortUrl from "./ShortUrl";

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/screenshot" exact component={Screenshot} />
              <Route path="/shortUrl" exact component={ShortUrl} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
