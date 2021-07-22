import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import db from "./../firebase";
const Nav = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const submitOrder = () => {
    db.collection(`table${table}`).add({
      order: menuItems,
      username: name,
      table: table,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length > 0 && name !== "") {
      submitOrder();
    } else {
      alert("Order any meal.");
    }
  };
  return (
    <div className="nav">
    <h1 className="text-2xl" >LOGO </h1>
    <h1 className="text-2xl">Table {table}</h1>
    </div>
  );
};

export default Nav;
