import React from "react";
import moment from "moment";
const f = Date.now();
const ChatIndividual = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 7,
          maxWidth: "75%"
        }}
      >
        chat as a individual goes here chat as a individual goes here chat as a
        individual goes here chat as a individual goes here chat as a individual
        goes here chat as a individual goes here chat as a individual goes here
        chat as a individual goes here
      </div>
      <div>{moment(f).format("LT")}</div>
    </div>
  );
};

export default ChatIndividual;
