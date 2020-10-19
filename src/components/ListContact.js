import React from "react";
import Contact from "./Contact";
const ListContact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      list of contacts
      <Contact />
    </div>
  );
};
export default ListContact;
