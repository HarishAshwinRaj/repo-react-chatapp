import React from "react";
import ShowContact from "./ShowContact";
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
  //const firebase = useFirebase();
  // firebase.logout();
  if (!!isLoaded(auth)) {
    if (!isEmpty(auth)) {
      console.log(profile);
      return (
        <div style={{}}>
          <Router>
            <Switch>
              <Route exact path="/auth">
                <AuthComponent width={width} />
              </Route>
              {width > 700 ? (
                <Route path={["/:type/:chatid", "/"]}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: width / 3 }}>
                      <ShowContact
                        width={width / 3}
                        height={height}
                        uid={auth.uid}
                        username={profile.username}
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
                  <Route exact path="/">
                    <ShowContact
                      width={width}
                      height={height}
                      uid={auth.uid}
                      username={profile.username}
                    />
                  </Route>
                  <Route path="/:type/:chatid">
                    <ChatComponent
                      width={width}
                      height={height}
                      uid={auth.uid}
                    />
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
