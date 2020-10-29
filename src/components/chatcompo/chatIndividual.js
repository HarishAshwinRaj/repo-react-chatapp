import React from "react";
import moment from "moment";
import ChatAuto from "./chatAuto";

const ChatIndividual = ({
  t = false,
  messageBody,
  messagetime,
  sentBy,
  id,
  uid
}) => {
  if (sentBy === "auto") {
    return <ChatAuto messageBody={messageBody} id={id} />;
  }

  const flexdir = sentBy === uid ? "flex-end" : "flex-start";
  return (
    <div
      id={id}
      key={id}
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
          {messageBody}
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
            {messagetime && moment(messagetime.toDate()).format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatIndividual;
