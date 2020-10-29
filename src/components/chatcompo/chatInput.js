import React, { useState } from "react";
import Send from "@material-ui/icons/Send";
import { useFirestore } from "react-redux-firebase";
import { v4 as uuid } from "uuid";
import moment from "moment";
const ChatInput = ({ width, uid, chatid, addMess, f }) => {
  const [messagebody, setmessage] = useState("");
  const fire = useFirestore();
  const handler = () => {
    console.log(messagebody, "inside handler");
    const g = fire.Timestamp.now();
    const h = uuid();
    addMess({
      id: h,
      messageBody: messagebody,
      messagetime: g,
      sentBy: uid
    });
    fire
      .collection("chats")
      .doc(chatid)
      .collection("messages")
      .doc(h)
      .set({
        messageBody: messagebody,
        messagetime: g,
        sentBy: uid
      })
      .then(() => {
        fire
          .collection("chats")
          .doc(chatid)
          .update({
            lastmessagetime: g
          })
          .then(() => {
            console.log("messages success");
            
            f.current.scrollTop =
              f.current.scrollHeight - f.current.clientHeight;
          });
      });
  };
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
          value={messagebody}
          style={{
            height: "90%",
            width: "80%",
            backgroundColor: "white"
          }}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <div
          onClick={() => {
            console.log("pressed button");
            handler();
          }}
          style={{
            backgroundColor: "white",
            margin: 5,
            borderRadius: 30,
            textAlign: "center",
            padding: 5
          }}
        >
          <Send style={{ color: "green[500]" }} />
        </div>
      </div>
    </div>
  );
};
export default ChatInput;
