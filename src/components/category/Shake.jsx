import React from "react";
import ShakeData from "../../data/ShakesData.js";
import MenuItem from "../MenuItem";
const Shake = ({ menuItems, setMenuItems }) => {
    console.log(ShakeData);
  return (
    <>
      {ShakeData.map((item) => (
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

export default Shake;
