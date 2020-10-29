import React, { useState, useEffect, useRef } from "react";
import ChatIndividual from "./chatIndividual";
import ChatInput from "./chatInput";
import ChatGroup from "./chatGroup";
import { usePageMessage } from "../../custHoos/usePagination";
import { useFirestore } from "react-redux-firebase";

const ChatContent = ({
  chatid,
  uid,
  type,
  height,

  width,
  lastread
}) => {
  const f = useRef(null);
const firestore = useFirestore();
const [lr,setlr] = useState(lastread[uid])
  const [message, setChange, addMess] = usePageMessage(
    lr,
    "initial",
    chatid
  );

  const constb = (prop) => {
    const rem =lastread;
    console.log( " 'reme ", rem);
    rem[uid] = prop;
    console.log(rem, "rem");
    firestore
      .collection("chats")
      .doc(chatid)
      .update({
        lastreadmsg: rem
      })
      .then(() => {
        console.log("hifi");
        setlr(prop);
      });
  };
  useEffect(() => {
    console.log(message, "mess changed");
    //setChange("stall")
    return () => {
      if (message && message.length !== 0) {
        constb(message[message.length - 1].messagetime);
      }
    };
  }, [message]);

  const handlescroll = () => {
    const cu = f.current;
    console.log(
      cu.scrollHeight,
      cu.clientHeight,
      cu.scrollTop,
      "scrollers hande wor"
    );
    if (cu.scrollHeight - cu.clientHeight === Math.floor(cu.scrollTop)) {
      console.log("below reached");
      setChange("below");
    } else if (cu.scrollTop === 0) {
      console.log("top reached");
      setChange("above");
    }
  };

  return (
    <div>
      <div
        ref={f}
        style={{
          padding: 10,
          height: height - 120,
          overflowY: "scroll"
        }}
        onScroll={() => {
          handlescroll();
        }}
      >
        {message &&
          (type === "i"
            ? message.map(({ ...mes }) => <ChatIndividual uid={uid} {...mes} />)
            : message.map(({ ...mes }) => <ChatGroup uid={uid} {...mes} />))}
     <div
     style ={{height:200}}
     ></div>
      </div>
      <ChatInput
        width={width}
        chatid={chatid}
        uid={uid}
        addMess={addMess}
        f={f}
      />
    </div>
  );
};

export default ChatContent;
