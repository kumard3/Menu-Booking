import React from "react";
import WrapData from "../../data/WrapData.js";
import MenuItem from "../MenuItem";
const Wrap = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter}) => {
    console.log(WrapData);
  return (
    <>
      {WrapData.map((item) => (
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

export default Wrap;
