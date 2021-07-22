import React, { useState } from "react";
import "../styles/menuitems.scss";

const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [toggleCartButton, setToggleCartButton] = useState(true);
  console.log(menuItems);
  function handleDeleteClick(id) {
    const removeItem = menuItems.filter((menuItem) => {
      return menuItem.id !== id;
    });
    setMenuItems(removeItem);
    setToggleCartButton(!toggleCartButton);
  }
  const handleClick1 = () => {
  
    setItemNumber(itemNumber + 1)
  }
  return (
    <div className="menuitems">
      <img
        className="menuitems__img"
        src="https://www.simplyrecipes.com/thmb/WFAZWL7N-orBG_wnB52Zun4xxhk=/3111x3111/smart/filters:no_upscale()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
        alt=""
      />
      <h3>{name}</h3>
      <div className="menuitems__add">
        <input
          className="menuitems__input"
          type="number"
          value={itemNumber}
          onChange={(e) => setItemNumber(e.target.value)}
        />
        <button className="menuitems__button" onClick={handleClick1} > add </button>
      </div>
      {toggleCartButton ? (
        <button
        className="menuitems__button1"
          onClick={() => {
            setToggleCartButton(!toggleCartButton);
            setMenuItems([
              ...menuItems,
              { id: id, name: name, numberOfPlates: itemNumber },
            ]);
          }}
        >
          Add to cart
        </button>
      ) : (
        <button onClick={() => handleDeleteClick(id)}>Remove from cart</button>
      )}
      {/* <button
        onClick={() =>
          setMenuItems([
            ...menuItems,
            { name: name, numberOfPlates: itemNumber },
          ])
        }>
        Add to cart
      </button> */}
    </div>
  );
};
export default MenuItem;
