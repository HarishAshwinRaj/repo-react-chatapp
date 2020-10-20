import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

const ChatInput = ({ width }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        height: "20px",
        width: width,

        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          padding: 10,
          backgroundColor: "green",
          borderRadius: 10,
          width: "64%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: 30
        }}
      >
        <input
          type="text"
          placeholder="texette"
          style={{
            height: "90%",

            width: "80%",
            backgroundColor: "white"
          }}
        />
        <div
          onClick={() => {
            console.log("pressed button");
          }}
          style={{
            backgroundColor: "white",
            margin: 5,
            borderRadius: 30,
            textAlign: "center",
            padding: 5
          }}
        >
          <MaterialIcon icon="send" color="green" />
        </div>
      </div>
    </div>
  );
};
export default ChatInput;
