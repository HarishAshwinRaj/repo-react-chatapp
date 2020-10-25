import React, { useEffect, useState } from "react";
import Contact from "./contacts/Contact";
import Header from "./Header";
import AddContact from "./contacts/addContacts";
import SearchBar from "./contacts/searchBar";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import EmptyContact from "./contacts/emptyContact";
const SearchScreen = ({ width, height, uid }) => {
  const profile = useSelector((D) => D.firebase);

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
  useFirestoreConnect([
    {
      collection: "chats",

      where: [
        [
          "chatid",
          "in",
          isLoaded(profile.chatlist) ? profile.chatlist : ["7klKNktu1"]
        ],
        ["username", ">=", query],

        [
          "username",
          "<",
          query &&
            query.slice(0, query.length - 1) +
              String.fromCharCode(
                addquery.slice(query.length - 1, query.length).charCodeAt(0) + 1
              )
        ]
      ],

      limit: 10,
      storeAs: "sContact"
    }
  ]);

  const [contact, setContact] = useState([]);
  const [add, setadd] = useState(false);
  const [scont, newfr, f] = useSelector((d) => [
    d.firestore.ordered.sContact,
    d.firestore.ordered.newsugg,
    d.firestore.ordered
  ]);

  useEffect(() => {
    function contactchec() {
      console.log(newfr, scont, query, addquery, f, "fill");
      if (!!query || !!addquery) {
        console.log(newfr, "through");

        if (!!newfr) {
          const b = newfr.filter((t) => t.id != uid);
          setContact(b);
        } else {
          setContact([]);
        }
      } else {
        setContact(scont);
      }
    }
    contactchec();
  }, [addquery, newfr, query, scont]);

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
        {!!contact &&
          contact.map(({ username, photourl, id }) => (
            <Contact name={username} img={photourl} id={id} />
          ))}
        {!contact && <EmptyContact />}
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
export default SearchScreen;
