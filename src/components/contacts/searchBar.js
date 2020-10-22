import React from "react";
import MaterialIcon from "material-icons-react";
const SearchBar = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <input
        placeholder={text}
        style={{ width: "90%", paddingLeft: 20, height: 30 }}
      />
      <div
        style={{
          marginLeft: 10,
          backgroundColor: "white",
          padding: 5,
          borderRadius: 20
        }}
      >
        {" "}
        <MaterialIcon icon="search" color="aqua" />
      </div>
    </div>
  );
};
export default SearchBar;