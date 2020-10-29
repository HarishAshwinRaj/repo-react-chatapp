import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  useFirestore,
  useFirebase,
  isLoaded
} from "react-redux-firebase";
import moment from 'moment';
//import usePageMessage from "../custHoos/usePagination"

function usePageMessage(lastread, change, chatid) {
  const [start, setStart] = useState(lastread);
  const [order, setOrder] = useState("desc");
    useEffect(() => {
     if(change!=="Stall"){
    if (change === "below") {
      console.log('below')
      setOrder("asc");
      setStart(message[message.length-1].messagetime)
    }
    else if(change ==="above"){
      console.log('above')
      setOrder("desc");
      setStart(message[0].messagetime)
    }
    else if(change === 'initial'){
     
      setOrder("desc");
      setStart(lastread)
    }
     }
  }, [change,lastread]);
  useFirestoreConnect([
    {
      collection: "chats",
      doc: chatid,
      subcollections: [{ collection: "messages" }],
      orderBy: ["messagetime", order],
      startAt:[start??''],
      limit: 3,
      storeAs: "messages"
    }
  ]);
  const [message, setmessage] = useState([]);
  const [prev, setprev] = useState("");
  const mess = useSelector((d) => d.firestore.ordered.messages);


useEffect(()=>{
console.log('no of time',mess);
if(change === "initial"){
setmessage(mess?mess.slice().reverse():mess)}
if(mess&&mess.length!=0&&mess.length>=2&&mess[1].id!==prev){
if(change ==="above"){
setmessage(m=>[...mess.slice(1).reverse(),...m])
}
else if(change ==="below"){
setmessage(m=>[...m,...mess.slice(1)])
}

}
},[mess])


return message;
}






const chatid = "f58e14f0-795f-43db-8c50-860ef5710e27"
let t = 0;
const TestFetch = () => {
  useFirestoreConnect([{
    collection:'chats',
    doc:"f58e14f0-795f-43db-8c50-860ef5710e27",
    storeAs:"chat"
  }])
  const ch =  useSelector(d=>d.firestore.ordered.chat);
const  [fil,setfil] = useState()
useEffect(()=>{
  //console.log(ch,"its ch");
if(isLoaded(ch)&&ch.length!== 0&&t <2){
  //console.log(ch,"its ch 3");
  setChange("initial")
  console.log("its ch3",fil&&moment(fil.toDate()).format('LT'),t);
  t++;
  setfil(ch[0].lastreadmsg["KXvBQeTzItQbBIl5mkWLlJFiiCU2"])
}
})


  const [change,setChange] = useState('initial');
 const mess = usePageMessage(fil,change,chatid);
 useEffect(()=>{
   console.log(mess,"mess changed")
   setChange("stall")
 },[mess])

  return (
    <div>
      test component {JSON.stringify(mess&&mess.map(m =>moment(m.messagetime.toDate()).format('LT')))}
      <button
        onClick={() => {
          setChange("above")
        }}
      >
        above
      </button>
      <button
        onClick={() => {
        setChange("below")
        }}
      >
        below
      </button>
    </div>
  );
};

export default TestFetch;
