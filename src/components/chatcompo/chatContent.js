import React from "react";
import ChatIndividual from "./chatIndividual";
import ChatGroup from "./chatGroup";

const ChatContent = ({ type }) => {

  return (
    <div>
      chats list appear here
      {(type === 'i')?
      (
        <ChatIndividual/>
      ):(
        <ChatGroup />
      )
    
      }
    </div>
  );
};

export default ChatContent;
