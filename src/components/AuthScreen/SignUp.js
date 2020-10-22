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

const SignUp = () => {
  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const [name, setname] = useState();
  const [img, setimg] = useState(null);
  const firebase = useFirebase();
  const autherr = useSelector((d) => d.firebase.authError);
  const handlesubmit = (e) => {
    //e.preventDefault();
    firebase
      .createUser(
        {
          email: email,
          password: pwd
        },
        {
          email: email,
          username: name,
          photourl: null
        }
      )
      .then((d) => {
        console.log(d, "data");
      })
      .catch((e) => {
        console.log(e, "err");
      });
  };

  return (
    <form
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
      <img alt={"imag"} src={img} height={50} style={{ paddingLeft: 20 }} />
      <div style={{ margin: "auto", marginTop: 50, width: 100 }}>
        <input
          type="button"
          value="create"
          style={{ width: "100%", height: 30 }}
          onClick={handlesubmit}
        />
      </div>
    </form>
  );
};

export default SignUp;
