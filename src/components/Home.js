import React, { useState, useEffect } from "react";
import ShowContact from "./ShowContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";

import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const auth = useSelector((d) => d.firebase.auth);

  const { width, height } = useWindowDim();

  if (!!isLoaded(auth)) {
    if (!!isEmpty(auth) && history) {
      history.push("/auth/create");
    }
    return (
      <Router>
        <Switch>
          {width > 700 ? (
            <Route path={["/home/:type/:chatid", "/home",'/']}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: width / 3 }}>
                  <ShowContact
                    width={width / 3}
                    height={height}
                    uid={auth.uid}
                  />
                </div>
                <div style={{ width: (2 * width) / 3 }}>
                  <ChatComponent
                    width={(2 * width) / 3}
                    height={height}
                    uid={auth.uid}
                  />
                </div>
              </div>
            </Route>
          ) : (
            <div style={{ width: width }}>
              <Route exact path={["/home",'/']}>
                <ShowContact width={width} height={height} uid={auth.uid} />
              </Route>
              <Route path="home/:type/:chatid">
                <ChatComponent width={width} height={height} uid={auth.uid} />
              </Route>
            </div>
          )}
        </Switch>
      </Router>
    );
  } else {
    console.log("loading for it ");
    return <div>loading .... </div>;
  }
};

export default Home;
