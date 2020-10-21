import React, { useState } from "react";

const SingleInput = ({ name, ...props }) => {
  return (
    <div>
      <h5>{name} </h5>
      <input placeholder={name} type="text" {...props} />
    </div>
  );
};

const SignUp = () => {
  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const [name, setname] = useState();
  const [img, setimg] = useState(null);
  return (
    <form style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
      <SingleInput
        name="email"
        onChange={(t) => {
          setemail(t.target.value);
        }}
      />
      <SingleInput
        name="pwd"
        type="password"
        onChange={(t) => {
          setpwd(t.target.value);
        }}
      />
      <SingleInput
        name="name"
        onChange={(t) => {
          setname(t.target.value);
        }}
      />
      <SingleInput
        name="image"
        type="file"
        onChange={(t) => {
          setimg(URL.createObjectURL(t.target.files[0]));
        }}
      />
      <img alt={"imag"} src={img} />
    </form>
  );
};

export default SignUp;
