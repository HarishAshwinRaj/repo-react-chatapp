import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddCircle from "@material-ui/icons/AddCircle";
const Contact = ({ name, type, id, img, add, setadd, comp }) => {
  //const firestore = useFirestore();
  const history = useHistory();
  return (
    <div
      key={id}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
        paddingRight: "5px",
        paddingLeft: "5px",
        borderRadius: "15px",
        height: "50px",
        marginBottom: 5
      }}
      onClick={() => {
        history.push("/home/" + type + "/" + id);
      }}
    >
      <div
        style={{
          marginRight: "20px",
          textAlign: "center",
          paddingTop: 4
        }}
      >
        <img
          src={img}
          alt={"imgg"}
          style={{
            height: 50,
            width: 50,
            borderRadius: "100px"
          }}
        />
      </div>
      <div style={{}}>{name}</div>

      <div style={{ position: "absolute", right: 30 }}>
        {comp && comp({ name, id, img })}
      </div>
    </div>
  );
};
export default Contact;
