import React from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import MaterialIcon from "material-icons-react";
const Contact = ({ name, id, img, add, setadd }) => {
  const firestore = useFirestore();
  const [auth, profile] = useSelector((data) => [
    data.firebase.auth,
    data.firebase.profile
  ]);
  const createchats = () => {
    let chatname = {};
    chatname[auth.uid] = { username: name, photourl: img };
    chatname[id] = { username: profile.username, photourl: profile.photourl };
    console.log(chatname, "chatname");
    firestore
      .collection("chats")
      .doc(id + auth.uid)
      .set({ chatname: chatname, type: "i", members: [auth.uid, id] })
      .then((d) => {
        firestore
          .collection("users")
          .doc(auth.uid)
          .collection("chatslist")
          .doc(id + auth.uid)
          .set({
            chatid: id + auth.uid,
            username: name,
            photourl: img,
            lastmessagetime: firestore.Timestamp.now()
          })
          .then(() => {
            firestore
              .collection("users")
              .doc(id)
              .collection("chatslist")
              .doc(id + auth.uid)
              .set({
                id: id + auth.id,
                username: profile.username,
                photourl: profile.photourl,
                lastmessagetime: firestore.Timestamp.now()
              })
              .then(() => {
                console.log("createdchat success");
                setadd(false);
              });

            //  setadd(false);
          });
      });
  };

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
      {add && (
        <div
          style={{ position: "absolute", right: 30 }}
          onClick={() => {
            createchats();
          }}
        >
          <MaterialIcon icon="add_circle" color="white" size="medium" />
        </div>
      )}
    </div>
  );
};
export default Contact;
