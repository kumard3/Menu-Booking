import React from "react";
import "./style/navadmin.scss";
function NavAdmin() {
  return (
    <div className="navadmin">
      <div className="navadmin__left">
        <h1>Admin Panel </h1>
      </div>
      <div className="navadmin__right">
        <h1>User Profile </h1>
      </div>
    </div>
  );
}

export default NavAdmin;
