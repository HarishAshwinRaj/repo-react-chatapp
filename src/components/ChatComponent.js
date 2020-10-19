import React from "react";
import { useParams } from "react-router-dom";
const ChatComponent = () => {
  const { chatid } = useParams();
  return <div>chats display here{chatid}</div>;
};

export default ChatComponent;
