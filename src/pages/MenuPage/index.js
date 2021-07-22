import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [finalMeal, setFinalMeal] = useState({});
  console.log(finalMeal);
  const testButton = (event) => {
    event.preventDefault();
    db.collection(`table${table}`).add({
      order: finalMeal,
      username: "anish",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <>
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
