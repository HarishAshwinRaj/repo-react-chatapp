import React from "react";
import ListContact from "./ListContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";
import AuthComponent from "./AuthScreen/AuthComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = () => {
  const { width, height } = useWindowDim();
  console.log(width, "width");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Router>
        <Switch>
          <Route exact path="/auth">
            <AuthComponent width={width} />
          </Route>
          {width > 700 ? (
            <Route path={["/:type/:chatid", "/"]}>
              <>
                <div style={{ width: width / 3 }}>
                  <ListContact width={width / 3} />
                </div>
                <div style={{ width: (2 * width) / 3 }}>
                  <ChatComponent width={(2 * width) / 3} height={height} />
                </div>
              </>
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
};

export default Home;
