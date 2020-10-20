import React from "react";
import Contact from "./Contact";
const ListContact = ({ width }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        width: width,
        height: "98vh",
        overflowY: "scroll"
      }}
    >
      list of contacts [<Contact />, <Contact />,<Contact />,<Contact />,
      <Contact />,<Contact />,<Contact />,<Contact />,<Contact />, ]
    </div>
  );
};
export default ListContact;
