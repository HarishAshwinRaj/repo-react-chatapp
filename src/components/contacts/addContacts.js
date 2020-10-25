import React from "react";
import Add from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
const AddContact = ({ set }) => {
  const history = useHistory();
  return (
    <div
      style={{
        borderRadius: 30,
        width: 30,
        height: 30,
        backgroundColor: "yellow",
        textAlign: "center"
      }}
      onClick={() => {
        history.push("/users/Search");
      }}
    >
      <Add color="black" />
    </div>
  );
};

export default AddContact;
