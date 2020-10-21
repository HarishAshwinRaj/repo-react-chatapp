import React, { useState } from "react";

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
  return (
    <form
      style={{
        backgroundColor: "red",
        width: "100%",
        padding: 5,
        paddingLeft: 20
      }}
    >
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
        />
      </div>
    </form>
  );
};

export default SignIn;
