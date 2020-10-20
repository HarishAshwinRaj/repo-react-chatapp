import React from "react";
import Contact from "./Contact";
import Header from "./Header";

const ListContact = ({ width }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: 10,
          marginLeft: 5,
          paddingRight: 8,
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          width: width,
          height: "95%",
          overflowY: "scroll"
        }}
      >
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
export default ListContact;
