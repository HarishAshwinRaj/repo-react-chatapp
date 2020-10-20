import React from "react";
import ListContact from "./ListContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = () => {
  const { width } = useWindowDim();
  console.log(width, "width");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Router>
        {width > 700 ? (
          <Route path={["/:type/:chatid", "/"]}>
            <>
              <div style={{ width: width / 3 }}>
                <ListContact />
              </div>
              <div style={{ width: (2 * width) / 3 }}>
                <ChatComponent />
              </div>
            </>
          </Route>
        ) : (
          <div style={{ width: width }}>
            <Route exact path="/">
              <ListContact />
            </Route>
            <Route path="/:type/:chatid">
              <ChatComponent />
            </Route>
          </div>
        )}
      </Router>
    </div>
  );
};

export default Home;
