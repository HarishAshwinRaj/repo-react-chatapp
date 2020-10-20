import React from "react";

const Contact = () => {
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
        height: "70px",
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
          src={`https://picsum.photos/id/1005/50/50`}
          alt={"img"}
          style={{
            borderRadius: "100px"
          }}
        />
      </div>
      <div style={{}}>contact</div>
    </div>
  );
};
export default Contact;
