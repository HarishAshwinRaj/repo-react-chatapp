import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "red",
        padding: "5px",
        borderRadius: "15px"
      }}
    >
      <div
        style={{
          marginRight: "20px"
        }}
      >
        <img
          src={`https://picsum.photos/id/1005/50/50`}
          style={{
            borderRadius: "200px"
          }}
        />
      </div>
      <div style={{}}>contact</div>
    </div>
  );
};
export default Contact;
