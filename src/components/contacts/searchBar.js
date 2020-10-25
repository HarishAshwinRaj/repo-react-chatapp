import React from "react";
import Search from "@material-ui/icons/Search";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { useHistory } from "react-router-dom";
let timer = setTimeout(() => {
  return null;
}, 1000);
const SearchBar = ({ text, setquery }) => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          padding: 5,
          borderRadius: 20
        }}
        onClick={() => {
          history.push("/home");
        }}
      >
        <ArrowBack />
      </div>
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
        <Search />
      </div>
    </div>
  );
};
export default SearchBar;
