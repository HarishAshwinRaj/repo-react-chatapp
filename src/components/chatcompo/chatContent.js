import React from "react";
import ChatIndividual from "./chatIndividual";
import ChatGroup from "./chatGroup";

const ChatContent = ({ type }) => {
  return (
    <div
      style={{
        padding: 10
      }}
    >
      chats list appear here
      {type === "i" ? <ChatIndividual /> : <ChatGroup />}
    </div>
  );
};

export default ChatContent;
