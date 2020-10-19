import React from "react";
import { useParams } from "react-router-dom";
import ChatContent from "./chatcompo/chatContent";
import ChatHeader from "./chatcompo/chatHeader";
const ChatComponent = () => {
  const { chatid, type } = useParams();
  return (
    <div
      style={{
        padding: 10
      }}
    >
      chat type is {type} id is{chatid}
      <ChatHeader />
      <ChatContent type={type} />
    </div>
  );
};

export default ChatComponent;
