import React from "react";
import SandwichsData from "../../data/SandwichData.js";
import MenuItem from "../MenuItem";
const Sandwich = ({ menuItems, setMenuItems }) => {
    console.log(SandwichsData);
  return (
    <>
      {SandwichsData.map((item) => (
        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      ))}
    </>
  );
};

export default Sandwich;
