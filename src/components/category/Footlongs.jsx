import React from "react";
import FootlongsData from "../../data/FootlongsData.js";
import MenuItem from "../MenuItem";
const Footlongs = ({ menuItems, setMenuItems, setTotalPrice, totalPrice,filter }) => {
    console.log(FootlongsData);
  return (
    <>
      {FootlongsData.map((item) => (
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

export default Footlongs;
