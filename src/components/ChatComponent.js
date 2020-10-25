import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty, useFirestoreConnect } from "react-redux-firebase";
import { useParams, useHistory } from "react-router-dom";
import ChatContent from "./chatcompo/chatContent";
import ChatHeader from "./chatcompo/chatHeader";
import ChatInput from "./chatcompo/chatInput";
const ChatComponent = ({ width, height }) => {
  const { chatid, type } = useParams("/home/:type/:chatid");
  const history = useHistory();
  const auth = useSelector((d) => d.firebase.auth);
  useFirestoreConnect([
    { collection: "chats", doc: chatid, storeAs: "ViewChat" }
  ]);

  const chat = useSelector((d) => d.firestore.ordered.ViewChat);

  if (isLoaded(auth) && isLoaded(chat)) {
    if (isEmpty(auth)) {
      history.push("/auth/login");
    }
    console.log(isLoaded(chat), "loggerer");
    if (
      (chat[0] && !chat[0].members.includes(auth.uid)) ||
      (chat && !chat[0])
    ) {
      console.log("not a member should not make", chat);
      return (
        <div
          style={{
            color: "blue",
            maxHeight: 60,
            fontSize: 40,
            margin: "auto",
            textAlign: "center"
          }}
        >
          not a participant cant view
        </div>
      );
    }
    return (
      <div style={{}}>
        {chatid && type ? (
          <>
            <ChatHeader
              chat={chat[0]}
              history={history}
              uid={auth.uid}
              width={width}
            />
            <ChatContent type={type} chatid={chatid} height={height} />
            <ChatInput width={width} />
          </>
        ) : (
          <div
            style={{
              color: "blue",
              maxHeight: 60,
              fontSize: 40,
              margin: "auto",
              textAlign: "center"
            }}
          >
            select a chat to preview
          </div>
        )}
      </div>
    );
  } else {
    return <div>loading ....</div>;
  }
};

export default ChatComponent;
