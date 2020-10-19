import React from "react";
import ListContact from "./ListContact";
import ChatComponent from "./ChatComponent";
import useWindowDim from "../custHoos/usewindow";

const Home = () => {
  const { width, height } = useWindowDim();
  console.log(width, "width");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: width < 700 ? width : width / 3 }}>
        <ListContact />
      </div>
      {width > 700 && <ChatComponent />}
    </div>
  );
};

export default Home;
