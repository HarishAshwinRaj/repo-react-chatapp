import React from "react";
import { useParams } from "react-router-dom";
import ChatContent from "./chatcompo/chatContent";
import ChatHeader from "./chatcompo/chatHeader";
import ChatInput from "./chatcompo/chatInput";
const ChatComponent = ({ width, height }) => {
  const { chatid, type } = useParams();
  return (
    <div style={{}}>
      <ChatHeader type={type} width={width} />
      <ChatContent type={type} chatid={chatid} height={height} />
      <ChatInput width={width} />
    </div>
  );
};

export default ChatComponent;
