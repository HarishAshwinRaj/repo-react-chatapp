import React from "react";

const EmptyContact = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "blue",
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
      ></div>
      <div style={{}}>no users found</div>
    </div>
  );
};
export default EmptyContact;
