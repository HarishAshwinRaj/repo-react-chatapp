import React from "react";
import { useParams } from "react-router-dom";
import ChatContent from "./chatcompo/chatContent";
import ChatHeader from "./chatcompo/chatHeader";
const ChatComponent = () => {
  const { chatid, i } = useParams();
  return (
    <div
      style={{
        padding: 10
      }}
    >
      <ChatHeader />
      <ChatContent />
    </div>
  );
};

export default ChatComponent;
