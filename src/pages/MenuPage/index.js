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
    if (menuItems.length === 0) {
      alert("Order any meal.");
    } else if (name === "") {
      alert("Please enter your name.");
    } else {
      submitOrder();
      alert("Your order has been submitted.");
      setMenuItems([]);
      setName("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen">
        <header className="flex justify-center items-center">
          <h1 className="text-2xl text-white mb-4">Table {table}</h1>
        </header>
        <section className="flex w-full justify-around items-center mb-4  ">
          {" "}
          <label htmlFor="customerName" className="text-white text-lg">
            Name
          </label>
          <input
            className="border-blue-500 rounded"
            type="text"
            value={name}
            required
            onChange={handleName}
          />
        </section>
        <main className="w-full h-full flex flex-col items-center">
          {" "}
          <h1 className="text-2xl text-white">Menu</h1>
          <MenuItem
            id={0}
            menuItems={menuItems}
            setMenuItems={setMenuItems}
            name={"Chicken"}
            price={100}
          />
          <MenuItem
            id={1}
            menuItems={menuItems}
            setMenuItems={setMenuItems}
            name={"Mutton"}
            price={150}
          />
        </main>

        <button
          className="w-full h-28 bg-yellow-400 flex items-center justify-center text-gray-50 text-3xl"
          onClick={checkMenu}>
          Submit Order
        </button>
      </div>
    </>
  );
};
