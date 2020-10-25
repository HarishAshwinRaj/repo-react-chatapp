import React, { useState, useEffect } from "react";
import Home from "./Home";

import AuthComponent from "./AuthScreen/AuthComponent";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const CApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/:logtype" component={AuthComponent} />

        <Route
          path="/"
          render={({ ...props }) => {
            return <Home {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default CApp;
