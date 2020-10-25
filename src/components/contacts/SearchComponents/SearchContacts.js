import React, { useEffect, useState } from "react";
import Contact from "../Contact";
import Header from "../../Header";

import SearchBar from "../searchBar";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import EmptyContact from "../emptyContact";
const SearchContacts = ({ width, height, uid }) => {
  const profile = useSelector((D) => D.firebase);

  const [query, setQuery] = useState("");
  //for search query

  useFirestoreConnect([
    {
      collection: "chats",
      where: [
        [`chatname.${uid}.username`, ">=", query && query],

        [
          `chatname.${uid}.username`,
          "<",
          query &&
            query.slice(0, query.length - 1) +
              String.fromCharCode(
                query.slice(query.length - 1, query.length).charCodeAt(0) + 1
              )
        ]
      ],

      limit: 10,
      storeAs: "sContact"
    }
  ]);

  const [contact, setContact] = useState([]);
  const [add, setadd] = useState(false);
  const [scont, f] = useSelector((d) => [
    d.firestore.ordered.sContact,

    d.firestore.ordered
  ]);

  useEffect(() => {
    function contactchec() {
      console.log(scont, query, f, "fill");
      if (!!query) {
        console.log(scont, "through contacts");

        if (!!scont) {
          const b = scont.filter((t) => t.id != uid);
          setContact(b);
        } else {
          setContact([]);
        }
      }
    }
    contactchec();
  }, [query, scont]);

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
        <SearchBar text={"search in Contacts"} setquery={setQuery} />
      </div>
      <div style={{ height: height - 100, overflowY: "scroll" }}>
        {!!contact &&
          contact.map(({ chatname, id, type }) =>
            type == "i" ? (
              <Contact
                name={chatname[uid] ? chatname[uid].username : "nul"}
                img={chatname[uid] ? chatname[uid].photourl : "nil"}
                id={id}
              />
            ) : (
              <Contact
                name={chatname.username}
                img={chatname.photourl}
                id={id}
              />
            )
          )}

        {!contact && <EmptyContact />}
      </div>
    </div>
  );
};
export default SearchContacts;
