import React, { useEffect, useState } from "react";
import Contact from "./Contact";

import AddContact from "./addContacts";

import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import EmptyContact from "./emptyContact";
const Batch = ({ n = 10 }) => {
  return (
    <div style={{ display: "flex", alignItem: "center" }}>
      <div
        style={{
          color: "red",
          backgroundColor: "white",
          padding: 5,
          borderRadius: 10
        }}
      >
        {n}
      </div>
      <div
        style={{
          padding: 5,
          color: "white"
        }}
      >
        unread
      </div>
    </div>
  );
};
const ShowContact = ({ width, height, uid }) => {
  const profile = useSelector((D) => D.firebase.profile);
  console.log(profile, "profiles", profile.chatList);
  useFirestoreConnect([
    {
      collection: "chats",
      where: [
        [
          "chatid",
          "in",
          isLoaded(profile.chatList) ? profile.chatList : ["kill"]
        ]
      ],
      storeAs: "contacts"
    }
  ]);
  //const [cont, setcont] = useState([]);
  const [add, setadd] = useState(false);
  const [cont] = useSelector((d) => [d.firestore.ordered.contacts]);
  console.log("conts ", cont);

  return (
    <div>
      <div style={{ height: height - 100, overflowY: "scroll", marginTop: 20 }}>
        {!!cont &&
          cont.map(({ chatname, id, type }) =>
            type == "i" ? (
              <Contact
                name={chatname[uid] ? chatname[uid].username : "nul"}
                img={chatname[uid] ? chatname[uid].photourl : "nil"}
                id={id}
                type={type}
                comp={Batch}
              />
            ) : (
              <Contact
                name={chatname.username}
                img={chatname.photourl}
                id={id}
                type={type}
                comp={Batch}
              />
            )
          )}
        {cont && cont.length == 0 && <EmptyContact />}
      </div>
      <div
        style={{
          width: width,
          position: "fixed",
          bottom: 20,
          left: width - 50
        }}
      >
        <AddContact set={setadd} />
      </div>
    </div>
  );
};
export default ShowContact;
