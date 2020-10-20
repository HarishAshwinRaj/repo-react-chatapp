import React from "react";
import Contact from "./Contact";
const ListContact = ({ width }) => {
  return (
    <div
      style={{
        margin: 10,
        paddingRight: 8,
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        width: width,
        height: "98vh",
        overflowY: "scroll"
      }}
    >
      <>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </>
    </div>
  );
};
export default ListContact;
