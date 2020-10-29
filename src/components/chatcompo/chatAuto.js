import React from "react";
import moment from "moment";
const f = Date.now();
const ChatAuto = ({ messageBody, id }) => {
  return (
    <div
    id ={id}
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
         
          padding: 0,
          borderRadius: 7,
          maxWidth: "75%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: 15
          }}
        >
          {messageBody}
        
        </div>
      </div>
    </div>
  );
};

export default ChatAuto;
