import React, { useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
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
    <>
      <div className="flex flex-col items-center w-screen h-screen">
        <header className="flex justify-center items-center">
          <h1 className="text-2xl">Table {table}</h1>
        </header>
        <section className="flex w-full justify-around items-center  ">
          {" "}
          <label htmlFor="customerName">Name</label>
          <input
            className="border-blue-500"
            type="text"
            value={name}
            required
            onChange={handleName}
          />
        </section>
        <main className="w-full h-full flex flex-col items-center">
          {" "}
          <h1 className="text-2xl">Menu</h1>
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
        </main>

        <button
          className="w-full h-28 bg-yellow-400 flex items-center justify-center"
          onClick={checkMenu}>
          Submit Order
        </button>
      </div>
    </>
  );
};
