import React from "react";
import MaterialIcon from "material-icons-react";

let timer = setTimeout(() => {
  return null;
}, 1000);
const SearchBar = ({ text, setquery }) => {
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
        onChange={(e) => {
          clearTimeout(timer);
          const v = e.target.value;
          console.log(v, "v");
          timer = setTimeout(() => {
            console.log("illl fired");
            setquery(v);
          }, 1000);
        }}
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
