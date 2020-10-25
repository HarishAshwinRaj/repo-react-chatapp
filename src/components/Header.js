import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import Search from "@material-ui/icons/Search";
import MoreVert from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
const Header = ({ h = true }) => {
  const fire = useFirebase();
  const history = useHistory();
  const [auth, profile] = useSelector((d) => [
    d.firebase.auth,
    d.firebase.profile
  ]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 60,
        color: "white",
        backgroundColor: "blue",
        alignItems: "center"
      }}
    >
      <div
        style={{
          paddingLeft: 15,
          width: "70%"
        }}
      >
        <h1 style={{ margin: 0, padding: 0 }}>chat app</h1>
      </div>
      {!!isLoaded(auth) && !isEmpty(auth) && (
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {!!isLoaded(profile) &&
            (!profile.photourl ? (
              <AccountCircleIcon
                onClick={() => {
                  fire.logout();
                  history.push("/auth/login");
                }}
                color="aqua"
                size="large"
              />
            ) : (
              <img
                src={profile.photourl}
                alt={"imgg"}
                onClick={() => {
                  fire.logout();
                  history.push("/auth/login");
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: "100px"
                }}
              />
            ))}

          <Search
            onClick={() => {
              history.push("/contacts/Search");
            }}
            color="aqua"
            icon="search"
            size="medium"
          />
          <MoreVert onClick={() => {}} color="aqua" size="medium" />
        </div>
      )}
    </div>
  );
};

export default Header;
