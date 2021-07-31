import React from "react";
import PastaData from "../../data/PastaData.js";
import MenuItem from "../MenuItem";
const Pasta = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter }) => {
    console.log(PastaData);
  return (
    <>
      {PastaData.map((item) => (
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

export default Pasta;
