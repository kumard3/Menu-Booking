import React from "react";
import MenuItem from "../../components/MenuItem";

export const MenuPage = ({ menuItems, setMenuItems }) => {
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
    </>
  );
};
