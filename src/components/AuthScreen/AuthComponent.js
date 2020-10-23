import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "../Header";
import { useHistory, useParams } from "react-router-dom";
const AuthComponent = ({ width }) => {
  const history = useHistory();
  const { logtype } = useParams("auth/:logtype");

  return (
    <div style={{ height: "100%", width: width }}>
      <Header />
      <div
        style={{
          height: "60vh",
          minHeight: 250,
          width: width > 700 ? width / 3 : width / 1.2,
          margin: "auto",
          marginTop: 50
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            width: width > 700 ? width / 3 : width / 1.2,

            height: 40,
            marginBottom: 10
          }}
        >
          <div
            style={{
              marginLeft: 20,
              backgroundColor: "blue",
              textAlign: "center",
              height: "90%",
              paddingTop: 10,
              color: "white",
              width: "50%"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "aqua";
              e.target.style.color = "blue";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "blue";
              e.target.style.color = "white";
            }}
            onClick={(e) => {
              e.target.style.backgroundColor = "white";
              history.push("/auth/create");
            }}
          >
            SignUp
          </div>
          <div
            style={{
              marginLeft: 5,
              backgroundColor: "blue",
              textAlign: "center",
              height: "90%",
              paddingTop: 10,
              color: "white",
              width: "50%"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "aqua";
              e.target.style.color = "blue";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "blue";
              e.target.style.color = "white";
            }}
            onClick={(e) => {
              e.target.style.backgroundColor = "white";
              history.push("/auth/login");
            }}
          >
            SignIn
          </div>
        </div>
        {logtype === "login" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};
export default AuthComponent;
