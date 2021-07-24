import React from "react";
import AllCategoryData from "../../data/AllCategoryData";
import MenuItem from "./MenuItem";
const All = ({ menuItems, setMenuItems }) => {
  return (
    <>
      {AllCategoryData.map((item) => (
j        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
};

export default All;
