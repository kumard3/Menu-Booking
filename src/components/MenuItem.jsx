import React, { useState } from "react";

const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [toggleCartButton, setToggleCartButton] = useState(true);
  console.log(menuItems);
  function handleDeleteClick(id) {
    const removeItem = menuItems.filter((menuItem) => {
      return menuItem.id !== id;
    });
    setItemNumber(0);
    setMenuItems(removeItem);
    setToggleCartButton(!toggleCartButton);
  }

  return (
    <>
      <h3>{name}</h3>
      <input
        type="number"
        value={itemNumber}
        onChange={(e) => setItemNumber(e.target.value)}
      />
      {toggleCartButton ? (
        <button
          onClick={() => {
            setToggleCartButton(!toggleCartButton);
            setMenuItems([
              ...menuItems,
              { id: id, name: name, numberOfPlates: itemNumber },
            ]);
          }}>
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
    </>
  );
};

export default MenuItem;
