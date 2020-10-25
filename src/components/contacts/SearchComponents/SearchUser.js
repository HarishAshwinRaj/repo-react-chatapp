import React, { useEffect, useState } from "react";
import Contact from "../Contact";
import moment from "moment";
import SearchBar from "../searchBar";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import EmptyContact from "../emptyContact";
import Add from "@material-ui/icons/Add";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { v4 as uuid } from "uuid";
const RequestButton = ({ name, img, id, chat }) => {
  const firestore = useFirestore();

  const [auth, profile] = useSelector((d) => [
    d.firebase.auth,
    d.firebase.profile
  ]);
  const createchats = () => {
    const f = uuid();
    let chatname = {};
    chatname[auth.uid] = { username: name, photourl: img };
    chatname[id] = { username: profile.username, photourl: profile.photourl };
    console.log(chatname, "chatname");
    firestore
      .collection("chats")
      .doc(f)
      .set({
        chatname: chatname,
        type: "i",
        chatid: f,
        members: [auth.uid, id],
        lastmessagetime: firestore.FieldValue.serverTimestamp()
      })
      .then((d) => {
        firestore
          .collection("users")
          .doc(auth.uid)
          .update({
            chatList: firestore.FieldValue.arrayUnion(f),
            contacts: firestore.FieldValue.arrayUnion(name)
          })
          .then(() => {
            firestore
              .collection("users")
              .doc(id)
              .update({
                chatList: firestore.FieldValue.arrayUnion(f),
                contacts: firestore.FieldValue.arrayUnion(profile.username)
              })
              .then(() => {
                firestore
                  .collection("chats")
                  .doc(f)
                  .collection("messages")
                  .add({
                    messagetime: firestore.FieldValue.serverTimestamp(),
                    messageBody:
                      "chat created at " +
                      moment(Date.now()).format("L") +
                      " " +
                      moment(Date.now()).format("LT"),
                    sentBy: "auto",
                    readBy: [auth.uid, id]
                  })
                  .then(() => {
                    console.log("createdchat success");
                  });
              });

            //  setadd(false);
          });
      });
  };

  return (
    <div
      onClick={() => {
        createchats();
      }}
    >
      <Add style={{ color: "aqua" }} />
    </div>
  );
};

const SearchUser = ({ width, height, uid }) => {
  const profile = useSelector((D) => D.firebase.profile);

  const [addquery, setaddQuery] = useState("");
  //for search query
  console.log(profile.contacts);
  useFirestoreConnect([
    {
      collection: "users",
      where: [
        [
          "username",
          "not-in",
          isLoaded(profile.contacts) && profile.contacts.length != 0
            ? profile.contacts
            : ["pil"]
        ],

        ["username", ">=", addquery && addquery],

        [
          "username",
          "<",
          addquery &&
            addquery.slice(0, addquery.length - 1) +
              String.fromCharCode(
                addquery
                  .slice(addquery.length - 1, addquery.length)
                  .charCodeAt(0) + 1
              )
        ]
      ],

      limit: 10,
      storeAs: "newsugg"
    }
  ]);

  const [contact, setContact] = useState([]);
  const [add, setadd] = useState(false);
  const [newfr, f] = useSelector((d) => [
    d.firestore.ordered.newsugg,
    d.firestore.ordered
  ]);

  useEffect(() => {
    function contactchec() {
      console.log(newfr, addquery, f, "fill");
      if (!!addquery) {
        console.log(newfr, "through");

        if (!!newfr) {
          const b = newfr.filter((t) => t.id != uid);
          setContact(b);
        } else {
          setContact([]);
        }
      }
    }
    contactchec();
  }, [addquery, newfr]);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        paddingRight: 8,
        display: "flex",
        flexDirection: "column",
        width: width
      }}
    >
      <div style={{ padding: 10, backgroundColor: "aqua", marginBottom: 10 }}>
        <SearchBar text="search  users" setquery={setaddQuery} />
      </div>
      <div style={{ height: height - 100, overflowY: "scroll" }}>
        {!!contact &&
          contact.map(({ username, photourl, id }) => (
            <Contact
              name={username}
              img={photourl}
              id={id}
              comp={RequestButton}
            />
          ))}
        {!contact && <EmptyContact />}
      </div>
    </div>
  );
};
export default SearchUser;
