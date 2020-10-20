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
          padding: 0,
          borderRadius: 7,
          maxWidth: "75%"
        }}
      >
        <div
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "column",
            fontSize: 15
          }}
        >
          chat as a individual goes here chat as a individual goes here chat as
          a
          <div
            style={{
              borderRadius: 3,
              padding: 3,
              fontSize: 10,
              backgroundColor: "white",
              color: "blue",
              alignSelf: "flex-end"
            }}
          >
            {moment(f).format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatIndividual;
