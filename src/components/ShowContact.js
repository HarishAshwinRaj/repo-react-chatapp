import React, { useState } from "react";
import Contact from "./contacts/Contact";
import Header from "./Header";
import AddContact from "./contacts/addContacts";
import SearchBar from "./contacts/searchBar";
const ShowContact = ({ width, height }) => {
  const [contact, setContact] = useState([
    { name: "contacts", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts1", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts2", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts3", img: `https://picsum.photos/id/1005/30/30` },
    { name: "contacts4", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts", img: `https://picsum.photos/id/1005/50/50` },
    { name: "contacts", img: `https://picsum.photos/id/1005/50/50` }
  ]);
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
        <SearchBar text="search contacts" />
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
        <AddContact />
      </div>
    </div>
  );
};
export default ShowContact;
