import React from "react";
import PizzaData from "../../data/PizzaData.js";
import MenuItem from "../MenuItem";
const Pizza = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter }) => {
  console.log(PizzaData);
  return (
    <>
      {PizzaData.map((item) => (
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

export default Pizza;
