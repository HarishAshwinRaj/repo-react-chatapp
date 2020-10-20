import React from "react";
import SignUp from "./SignUp";
const AuthComponent = ({ width }) => {
  return (
    <div style={{ height: "100%", width: width }}>
      <div
        style={{
          height: "60vh",
          minHeight: 250,
          width: width > 700 ? width / 3 : width / 1.2,
          margin: "auto",
          marginTop: width * 0.1,
          maxMarginTop: 100
        }}
      >
        <SignUp width={width} />
      </div>
    </div>
  );
};
export default AuthComponent;
