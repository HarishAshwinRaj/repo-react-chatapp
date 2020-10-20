import React from "react";
import { useParams } from "react-router-dom";
import ChatContent from "./chatcompo/chatContent";
import ChatHeader from "./chatcompo/chatHeader";
const ChatComponent = () => {
  const { chatid, type } = useParams();
  return (
    <div style={{}}>
      <ChatHeader type={type} />
      <ChatContent type={type} chatid={chatid} />
    </div>
  );
};

export default ChatComponent;
