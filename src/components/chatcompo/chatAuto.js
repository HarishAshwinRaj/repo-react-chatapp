import React from "react";
import moment from "moment";
const f = Date.now();
const ChatAuto = ({}) => {
  return (
    <div
      style={{
        color: "black ",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            flexDirection: "row",
            fontSize: 15
          }}
        >
          {"auto"}
          <div
            style={{
              borderRadius: 3,
              padding: 5,
              marginTop: 5,
              fontSize: 10,

              backgroundColor: "white",
              color: "green",
              alignSelf: "center"
            }}
          >
            {moment(f).format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAuto;
