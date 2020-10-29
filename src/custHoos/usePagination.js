import { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
export function usePageMessage(lastread, change, chatid) {
  const [start, setStart] = useState(lastread);
  const [order, setOrder] = useState("desc");
  const [ch, setch] = useState(change);

  useEffect(() => {
    if (ch !== "Stall") {
      if (ch === "below") {
        console.log("below");
        setOrder("asc");
        setStart(message[message.length - 1].messagetime);
      } else if (ch === "above") {
        console.log("above");
        setOrder("desc");
        setStart(message[0].messagetime);
      } else if (ch === "initial") {
        setOrder("desc");
        setStart(lastread);
      }
    }
  }, [ch, lastread]);
  useFirestoreConnect([
    {
      collection: "chats",
      doc: chatid,
      subcollections: [{ collection: "messages" }],
      orderBy: ["messagetime", order],
      startAt: [start ?? ""],
      limit: 10,
      storeAs: "messages"
    }
  ]);
  const [message, setmessage] = useState([]);
  const [prev, setprev] = useState("");
  const mess = useSelector((d) => d.firestore.ordered.messages);

  useEffect(() => {
    console.log("no of time", mess);
    if (ch === "initial") {
      setmessage(mess ? mess.slice().reverse() : mess);
    }
    if (mess && mess.length != 0 && mess.length >= 2 && mess[1].id !== prev) {
      setprev(mess[1].id);
      console.log(prev, "prevvvvvvvv");
      if (ch === "above") {
        setmessage((m) => [...mess.slice(1).reverse(), ...m]);
      } else if (ch === "below") {
        setmessage((m) => [...m, ...mess.slice(1)]);
      }
      setch("stall");
    }
  }, [mess, ch]);
  const gil = (mes) => {
    if(prev !==mes.id){
    console.log(mes.messagetime, "shift");
    setmessage((m) => [...m, mes]);
    setprev(mes.id);
    setch("below");}
  };

  return [message, setch, gil];
}
