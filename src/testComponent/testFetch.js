import React from "react";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  useFirestore,
  useFirebase
} from "react-redux-firebase";
const TestFetch = () => {
  useFirestoreConnect([
    {
      collection: "chats",
      doc: "RXCHTxi8HWzkddLEUkLQ",
      subcollections: [{ collection: "messages" }],
      orderBy: ["msgTime", "desc"],
      limitToLast: 2,
      storeAs: "messages"
    }
  ]);
  const fill = useFirestore();
  const f = useFirebase();
  const SEL = useSelector((d) => d.firebase.authError);
  const fire = () => {
    //f.logout();
    f.createUser(
      { email: "hell@hell.com", password: "HELLHELL" },
      { name: "hell" }
    );
  };

  return (
    <div>
      test component {JSON.stringify(SEL)}
      <button
        onClick={() => {
          fire();
        }}
      >
        clic
      </button>
    </div>
  );
};

export default TestFetch;
