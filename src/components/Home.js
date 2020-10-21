import React from "react";
import ListContact from "./ListContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";
import AuthComponent from "./AuthScreen/AuthComponent";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  const auth = useSelector((d) => d.firebase.auth);
  const profile = useSelector((d) => d.firebase.profile);
  const { width, height } = useWindowDim();
  const firebase = useFirebase();
  firebase.logout();
  if (!!isLoaded(auth)) {
    if (!isEmpty(auth)) {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Router>
            <Switch>
              <Route exact path="/auth">
                <AuthComponent width={width} />
              </Route>
              {width > 700 ? (
                <Route path={["/:type/:chatid", "/"]}>
                  <div>
                    <div style={{ width: width / 3 }}>
                      <ListContact width={width / 3} />
                    </div>
                    <div style={{ width: (2 * width) / 3 }}>
                      <ChatComponent width={(2 * width) / 3} height={height} />
                    </div>
                  </div>
                </Route>
              ) : (
                <div style={{ width: width }}>
                  <Route exact path="/">
                    <ListContact width={width} />
                  </Route>
                  <Route path="/:type/:chatid">
                    <ChatComponent width={width} height={height} />
                  </Route>
                </div>
              )}
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <AuthComponent width={width} />
        </div>
      );
    }
  } else {
    console.log("loading for it ");
    return <div>loading .... </div>;
  }
};

export default Home;
