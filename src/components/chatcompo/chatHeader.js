import React from "react";
import useWindowDim from "../../custHoos/usewindow";
import MaterialIcon, { colorPalette } from "material-icons-react";

const ChatHeader = ({ width }) => {
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
      <span>
        <MaterialIcon icon={"arrow_back"} color="blue" />
      </span>
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 20
        }}
      >
        <img
          src={"https://picsum.photos/id/1005/50/50"}
          alt={"img"}
          style={{
            borderRadius: 200
          }}
        />
      </div>
      <div
        style={{
          flex: "100%"
        }}
      >
        chats name
      </div>
      <div
        style={{
          alignSelf: "center",
          flex: "10%",
          marginRight: 30
        }}
      >
        <MaterialIcon icon={"more_vert"} color="blue" />
      </div>
    </div>
  );
};
export default ChatHeader;
