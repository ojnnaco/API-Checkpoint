import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div
        className="card text-dark bg-info mb-3"
        style={{ maxWidth: "15rem", margin: "0 auto" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: "#B20600", color: "yellow" }}
        >
          {" "}
          Username: {user.username}
        </div>
        <div className="card-body" style={{ backgroundColor: "#FF5F00" }}>
          <h5 className="card-title">{user.name}</h5>
          <p style={{ fontSize: "70%" }}>{user.phone}</p>
          <hr />
          <a
            href={user.website}
            className="card-text"
            style={{ marginRight: 70, color: "white" }}
          >
            Visit website
          </a>
          <a
            href={`mailto: ${user.email}`}
            className="card-text"
            style={{ color: "white" }}
          >
            Send Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
