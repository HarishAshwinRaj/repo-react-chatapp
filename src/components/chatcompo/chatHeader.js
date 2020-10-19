import React from "react";

const ChatHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <div>bac </div>
      <div>
        <img
          src={"https://picsum.photos/id/1005/50/50"}
          alt={"img"}
          style={{
            borderRadius: 200
          }}
        />
      </div>
      <div>chats name</div>
    </div>
  );
};
export default ChatHeader;
