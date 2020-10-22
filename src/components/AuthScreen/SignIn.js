import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
const SingleInput = ({ name, ...props }) => {
  return (
    <div>
      <h5
        style={{
          margin: 0,
          fontSize: 15,
          textTransform: "capitalize",
          marginTop: 15,
          marginBottom: 5
        }}
      >
        {name}
      </h5>
      <input
        style={{
          width: "90%",
          margin: "auto",
          height: 30,
          borderRadius: 10,
          paddingLeft: 20
        }}
        placeholder={name}
        type="text"
        {...props}
      />
    </div>
  );
};

const SignIn = () => {
  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const firebase = useFirebase();
  const autherr = useSelector((d) => d.firebase.authError);
  const handlesubmit = (e) => {
    //e.preventDefault();
    firebase
      .login({
        email: email,
        password: pwd
      })
      .then((d) => {
        console.log(d, "data");
      })
      .catch((e) => {
        console.log(e, "err");
      });
  };
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "100%",
        padding: 5,
        paddingLeft: 20
      }}
      onSubmit={handlesubmit}
    >
      <div style={{ padding: 10 }}> {autherr && autherr.message}</div>
      <SingleInput
        name="email"
        onChange={(t) => {
          setemail(t.target.value);
        }}
      />
      <SingleInput
        name="password"
        type="password"
        onChange={(t) => {
          setpwd(t.target.value);
        }}
      />
      <div style={{ margin: "auto", marginTop: 50, width: 100 }}>
        <input
          type="button"
          value="login"
          style={{ width: "100%", height: 30 }}
          onClick={handlesubmit}
        />
      </div>
    </div>
  );
};

export default SignIn;
