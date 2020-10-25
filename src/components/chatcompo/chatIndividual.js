import React from "react";
import moment from "moment";
const f = Date.now();
const ChatIndividual = ({ t = false }) => {
  const flexdir = t ? "flex-end" : "flex-start";
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: flexdir,
        marginBottom: 10
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
              padding: 5,
              marginTop: 5,
              fontSize: 10,
              width: 45,
              backgroundColor: "white",
              color: "blue",
              alignSelf: flexdir
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
