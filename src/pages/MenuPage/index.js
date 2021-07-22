import React, { useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";
import "../../styles/menupage.scss";
import Nav from "../../components/Nav";
import Catagory from "../../components/Catagory";
import Submit from "../../components/Submit";
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
      <div className="menupage">
        <header className="menupage__header ">
          <Nav table={table} />
        </header>
        <section className="menupage__section ">
          {" "}
          <label htmlFor="customerName">User Name</label>
          <input
            className="menupage__input "
            type="text"
            value={name}
            placeholder="Please enter your name"
            required
            onChange={handleName}
          />
        </section>
        <section className="menupage__catagory">
          <h1>Catagory </h1>
          <Catagory />
        </section>
        <h1 className="text-2xl">Menu</h1>
        <main className="menupage__product">
          {" "}
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

        <button className="submit" onClick={checkMenu}>
          Submit Order
        
        </button>
      </div>
    </>
  );
};
