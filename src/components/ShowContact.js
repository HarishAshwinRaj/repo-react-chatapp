import React, { useEffect, useState } from "react";
import Contact from "./contacts/Contact";
import Header from "./Header";
import AddContact from "./contacts/addContacts";
import SearchBar from "./contacts/searchBar";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
const ShowContact = ({ width, height, uid, username }) => {
  useFirestoreConnect([
    {
      collection: "users",
      doc: uid,
      subcollections: [{ collection: "chatlist" }],
      orderBy: ["lastmessageTime", "desc"],
      limit: 3,
      storeAs: "contacts"
    }
  ]);
  const [query, setQuery] = useState("");
  const [addquery, setaddQuery] = useState("");
  //for search query
  useFirestoreConnect([
    {
      collection: "users",
      where: [
        ["username", ">=", addquery],

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
  const [cont, newfr] = useSelector((d) => [
    d.firestore.ordered.contacts,
    d.firestore.ordered.newsugg
  ]);

  useEffect(() => {
    console.log(newfr, cont, "fill");
    if (add === true) {
      setContact([]);
    } else {
    }
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
      <Header />
      <div style={{ padding: 10, backgroundColor: "aqua", marginBottom: 10 }}>
        <SearchBar
          text={add ? "add a new contact" : "search in Contacts"}
          setquery={setaddQuery}
        />
      </div>
      <div style={{ height: height - 100, overflowY: "scroll" }}>
        {contact.map(({ name, img }) => (
          <Contact name={name} img={img} />
        ))}
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
