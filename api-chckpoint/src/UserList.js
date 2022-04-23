import React from "react";
import User from "./User";

const UserList = ({ listOfUsers }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // boxSizing: "border-box",
      }}
    >
      {listOfUsers.map((user, key) => (
        <User user={user} key={key} />
      ))}
    </div>
  );
};

export default UserList;
