import React from "react";
import MaterialIcon from "material-icons-react";
import { useFirebase } from "react-redux-firebase";
const Header = ({ h = true }) => {
  const fire = useFirebase();
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
      <h1 style={{ margin: 0, padding: 0 }}>chat app</h1>
      {h && (
        <div>
          <MaterialIcon
            onClick={() => {
              fire.logout();
            }}
            icon="account_circle"
            backgroundColor="aqua"
            size="large"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
