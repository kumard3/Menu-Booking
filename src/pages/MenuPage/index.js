import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";
import firebase from "firebase";
import db from "../../firebase";
// import '.../styles/menupage.scss';
import "../../styles/menupage.scss";

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
      </div>
    </>
  );
};
