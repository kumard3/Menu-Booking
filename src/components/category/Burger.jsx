import React from "react";
import BurgerData from "../../data/BurgerData.js";
import MenuItem from "../MenuItem";
const Burger = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter }) => {
  return (
    <>
      {BurgerData.map((item) => (
        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
          img={item.img}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          nonVeg={item.nonveg}
          filter={filter}
        />
      ))}
    </>
  );
};

export default Burger;
