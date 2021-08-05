import React from "react";
import FriedChickenData from "../../data/FriedChickenData.js";
import MenuItem from "../MenuItem";
const FriedChicken = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter }) => {
    console.log(FriedChickenData);
  return (
    <>
      {FriedChickenData.map((item) => (
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

export default FriedChicken;
