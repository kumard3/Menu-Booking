import React, { useState } from "react";
import "../styles/menuitems.scss";

const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log(menuItems);
<<<<<<< HEAD
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
=======
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
>>>>>>> UI-Temporary
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
<<<<<<< HEAD
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
=======
    </>
>>>>>>> UI-Temporary
  );
};
export default MenuItem;
