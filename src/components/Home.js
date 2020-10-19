import React from "react";
import ListContact from "./ListContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = () => {
  const { width, height } = useWindowDim();
  console.log(width, "width");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Router>
        {width > 700 ? (
          <Route path="/">
            <>
              <div style={{ width: width / 3 }}>
                <ListContact />
              </div>
              <ChatComponent />
            </>
          </Route>
        ) : (
          <div style={{ width: width }}>
            <Route exact path="/">
              <ListContact />
            </Route>
            <Route path="/:chatid">
              <ChatComponent />
            </Route>
          </div>
        )}
      </Router>
    </div>
  );
};

export default Home;
