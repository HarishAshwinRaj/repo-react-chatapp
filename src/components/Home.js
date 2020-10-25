import React, { useState, useEffect } from "react";
import ContactComponent from "./ContactComponent";
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
import SearchContacts from "./contacts/SearchComponents/SearchContacts";
import SearchUsers from "./contacts/SearchComponents/SearchUser";

const Home = ({ match, history }) => {
  //let history = useHistory();
  const auth = useSelector((d) => d.firebase.auth);

  const { width, height } = useWindowDim();

  if (!!isLoaded(auth)) {
    if (!!isEmpty(auth)) {
      history.push("/auth/login");
    }

    return (
      <Switch>
        <Route
          path={["/home/:type/:chatid", "/home", "/"]}
          render={({ match, history }) => {
            console.log("match props", match);
            if (width > 800) {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: width / 3 }}>
                    <ContactComponent
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
              );
            } else {
              return (
                <div style={{ width: width }}>
                  <Switch>
                    <Route path="/contacts/Search">
                      <SearchContacts
                        width={width}
                        height={height}
                        uid={auth.uid}
                      />
                    </Route>
                    <Route path="/users/Search">
                      <SearchUsers
                        width={width}
                        height={height}
                        uid={auth.uid}
                      />
                    </Route>
                    <Route path="/home/:type/:chatid">
                      <ChatComponent
                        width={width}
                        height={height}
                        uid={auth.uid}
                      />
                    </Route>
                    <Route path={["/home", "/"]}>
                      <ContactComponent
                        width={width}
                        height={height}
                        uid={auth.uid}
                      />
                    </Route>
                  </Switch>
                </div>
              );
            }
          }}
        />
        {/*
        </Route>
        <div style={{ width: width }}>
          <Route exact path={["/home", "/"]}>
            
          </Route>
          <Route path="/home/:type/:chatid">
          </Route>
        </div>
      */}
      </Switch>
    );
  } else {
    console.log("loading for it ");
    return <div>loading .... </div>;
  }
};

export default Home;
