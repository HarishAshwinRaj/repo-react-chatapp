import React from "react";
import ChatIndividual from "./chatIndividual";
import ChatGroup from "./chatGroup";

const ChatContent = ({ type, height }) => {
  return (
    <div
      style={{
        padding: 10,
        height: height - 120,
        overflowY: "scroll"
      }}
    >
      chats list appear here
      {type === "i" ? (
        <>
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
          <ChatIndividual />
        </>
      ) : (
        <ChatGroup />
      )}
    </div>
  );
};

export default ChatContent;
