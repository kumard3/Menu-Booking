import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";
// import '.../styles/menupage.scss';
import "../../styles/menupage.scss";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState();

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
    if (menuItems.length > 0) {
      submitOrder();
    } else {
      alert("Order any meal.");
    }
  };

  return (
    <>
<<<<<<< HEAD
      <label htmlFor="customerName">Name</label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Menu</h1>
      <input type="text" name="search" />
      <div className="catagory">
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
        <h3 className="catagory__name">Roti</h3>
      </div>

      <div div className="menupage">
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
      </div>
      <div className="submit">
        <button
          onClick={() => setFinalMeal({ table: table, order: menuItems })}
        >
          Submit order
        </button>
        <button onClick={testButton}>Test Button</button>
=======
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
            onChange={(e) => setName(e.target.value)}
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
>>>>>>> UI-Temporary
      </div>
    </>
  );
};
