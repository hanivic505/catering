import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import Home from "./containers/home";
import Detail from "./containers/detail";

import ErrorPage from "./error";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className={`container-fluid ${styles.wrapper}`}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Catering
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.wrapper}>
          <Scrollbar style={{ width: "100%", height: "100%" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={Detail} />
              <Route component={ErrorPage} />
            </Switch>
          </Scrollbar>
        </div>
      </div>
    </Router>
  );
};

export default App;
