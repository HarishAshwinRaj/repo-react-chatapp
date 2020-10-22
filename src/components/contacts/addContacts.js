import React from "react";
import MaterialIcon from "material-icons-react";
const AddContact = ({ set }) => {
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
        set((d) => !d);
      }}
    >
      <MaterialIcon icon="add" color="black" />
    </div>
  );
};

export default AddContact;
