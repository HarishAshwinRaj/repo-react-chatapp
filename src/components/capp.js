import React, { useState, useEffect } from "react";
import Home from "./Home";
import useWindowDim from "../custHoos/usewindow";
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
  let history = useHistory();
  const auth = useSelector((d) => d.firebase.auth);
  const profile = useSelector((d) => d.firebase.profile);
  const { width, height } = useWindowDim();

  return (
    <Router>
      <Switch>
        <Route exact path="/auth/:logtype">
          <AuthComponent width={width} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default CApp;
