import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";
import db from "../../firebase";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [finalMeal, setFinalMeal] = useState({});
  console.log(finalMeal);

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
    </>
  );
};
