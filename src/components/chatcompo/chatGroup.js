import React from "react";
import moment from "moment";
const f = Date.now();
const ChatGroup = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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
            color: "white",
            backgroundColor: "red",
            paddingLeft: 30
          }}
        >
          posters name
        </div>
        <div
          style={{
            margin: 10,
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            fontSize: 15
          }}
        >
          chat as a group goes here
          <div
            style={{
              borderRadius: 3,
              padding: 3,
              marginTop: 3,
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

export default ChatGroup;
