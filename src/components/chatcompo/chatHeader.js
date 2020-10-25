import React from "react";
import useWindowDim from "../../custHoos/usewindow";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MoreVert from "@material-ui/icons/MoreVert";
const ChatHeader = ({ width, history, chat, uid }) => {
  console.log(chat, "lopop");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
        paddingLeft: 20,
        paddingTop: 7,
        marginLeft: 2,
        zIndex: 10,
        width: width - 22
      }}
    >
      <span
        onClick={() => {
          history.push("/home");
        }}
      >
        <ArrowBack />
      </span>
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 20
        }}
      >
        <img
          src={
            chat.type == "i"
              ? chat.chatname[uid].photourl
              : chat.chatname.photourl
          }
          alt={"img"}
          style={{
            borderRadius: 200,
            height: 50,
            width: 50
          }}
        />
      </div>
      <div
        style={{
          flex: "100%"
        }}
      >
        {chat.type == "i"
          ? chat.chatname[uid].username
          : chat.chatname.username}
      </div>
      <div
        style={{
          alignSelf: "center",
          flex: "10%",
          marginRight: 30
        }}
      >
        <MoreVert color="blue" />
      </div>
    </div>
  );
};
export default ChatHeader;
