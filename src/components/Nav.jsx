import React from "react";

const Nav = ({ table }) => {
  return (
    <div className="nav">
      <h1 className="nav__logo">LOGO </h1>
      <h1 className="nav__table">Table {table}</h1>
    </div>
  );
};

export default Nav;
