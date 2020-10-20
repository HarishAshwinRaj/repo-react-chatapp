import React from "react";

const ChatInput = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "90vh",
        height: "10vh",
        backgroundColor: "green",
        width: "100%"
      }}
    >
      <div>text appea</div>
      <input
        type="text"
        placeholder="texette"
        style={{
          backgroundColor:'white'
        }}
      />
    </div>
  );
};
export default ChatInput;
