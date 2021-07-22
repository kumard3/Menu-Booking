import React, { useState } from "react";

const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log(menuItems);
  // function handleDeleteClick(id) {
  //   const removeItem = menuItems.filter((menuItem) => {
  //     return menuItem.id !== id;
  //   });
  //   setItemNumber(0);
  //   setMenuItems(removeItem);
  //   setToggleCartButton(!toggleCartButton);
  // }

  return (
    <>
      <h3>{name}</h3>
      {/* <input
        type="number"
        value={itemNumber}
        onChange={(e) => setItemNumber(e.target.value)}
      /> */}
      {/* {toggleCartButton ? (
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
      )} */}
      {/* {itemNumber > 0 ? (
        <div>
          <button onClick={() => setItemNumber(itemNumber - 1)}> - </button>{" "}
          {itemNumber}
          <button onClick={() => setItemNumber(itemNumber + 1)}>+</button>
        </div>
      ) : (
        <button
          onClick={() => setItemNumber(itemNumber + 1)}
          className="bg-white">
          Add +
        </button>
      )} */}
      {itemNumber > 0 ? (
        <div>
          {" "}
          <h3>Qty - </h3>
          <button onClick={() => setItemNumber(itemNumber - 1)}>-</button>
          {itemNumber}
          <button onClick={() => setItemNumber(itemNumber + 1)}>+</button>
        </div>
      ) : (
        <button
          onClick={() => setItemNumber(itemNumber + 1)}
          className="bg-white">
          Add +
        </button>
      )}
      {itemNumber && (
        <button
          onClick={() => {
            setToggle(true);
            setMenuItems([
              ...menuItems,
              { id: id, name: name, numberOfPlates: itemNumber },
            ]);
          }}>
          {toggle ? "Added" : "Add to order list"}
        </button>
      )}
    </>
  );
};

export default MenuItem;
