import React from "react";

const Contact = ({ img, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
        paddingRight: "5px",
        paddingLeft: "5px",
        borderRadius: "15px",
        height: "50px",
        marginBottom: 5
      }}
    >
      <div
        style={{
          marginRight: "20px",
          textAlign: "center",
          paddingTop: 4
        }}
      >
        <img
          src={img}
          alt={"img"}
          style={{
            borderRadius: "100px"
          }}
        />
      </div>
      <div style={{}}>{name}</div>
    </div>
  );
};
export default Contact;
