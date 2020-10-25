import React, { useEffect, useState } from "react";
import ShowContact from "./contacts/ShowContact";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const ContactComponent = ({ ...props }) => {
  const { width } = props;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        paddingRight: 8,
        display: "flex",
        flexDirection: "column",
        width: width
      }}
    >
      <Header />
      <ShowContact {...props} />
    </div>
  );
};
export default ContactComponent;
