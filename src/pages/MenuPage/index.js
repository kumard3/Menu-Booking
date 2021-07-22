import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [finalMeal, setFinalMeal] = useState({});
  const [name, setName] = useState();
  console.log(finalMeal);
  const testButton = (event) => {
    event.preventDefault();
    db.collection(`table${table}`).add({
      order: finalMeal,
      username: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <>
      <label htmlFor="customerName">Name</label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Menu</h1>
      <MenuItem
        id={0}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        name={"Chicken"}
      />
      <MenuItem
        id={1}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        name={"Mutton"}
      />
      <button onClick={() => setFinalMeal({ table: table, order: menuItems })}>
        Submit order
      </button>
      <button onClick={testButton}>Test Button</button>
    </>
  );
};
