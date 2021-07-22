import React, { useState } from "react";
// import '../styles/menuitem.scss '
import "../styles/menuitem.scss";
const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  // const [toggle, setToggle] = useState(false);
  console.log(menuItems);
  const handlePlus = () => {
    let objIndex = menuItems.findIndex((obj) => obj.id === id);
    let newItem = [...menuItems];
    let object = { id: id, name: name, numberOfPlates: itemNumber + 1 };
    newItem[objIndex] = object;
    setMenuItems(newItem);
    setItemNumber(itemNumber + 1);
  };

  function handleDeleteClick(id) {
    const removeItem = menuItems.filter((menuItem) => {
      return menuItem.id !== id;
    });
    setItemNumber(0);
    setMenuItems(removeItem);
  }
  const handleMinus = () => {
    if (itemNumber === 1) {
      handleDeleteClick(id);
    } else {
      let objIndex = menuItems.findIndex((obj) => obj.id === id);
      let newItem = [...menuItems];
      let object = { id: id, name: name, numberOfPlates: itemNumber - 1 };
      newItem[objIndex] = object;
      setMenuItems(newItem);
      setItemNumber(itemNumber - 1);
    }
  };

  const handlePlusButton = () => {
    // let objIndex = menuItems.findIndex((item) => item.id === id);
    // let newMenuItems = [...menuItems];
    // let updatedItem = { id: id, name: name, numberOfPlates: 1 };
    // newMenuItems[objIndex] = updatedItem;
    // setMenuItems(newMenuItems);

    // let objIndex = menuItems.findIndex((obj) => obj.id === id);

    //Log object to Console.
    // console.log("Before update: ", menuItems[objIndex])
    // let newItem = [...menuItems];
    //Update object's name property.
    // let object = { id: id, name: name, numberOfPlates: 1 };
    // newItem[objIndex] = object;

    //Log object to console again.
    // setMenuItems(newItem);
    setItemNumber(1);
    setMenuItems([...menuItems, { id: id, name: name, numberOfPlates: 1 }]);
  };
  return (
    <div className="menuitems">
      <img
        className="menuitems__img"
        src="https://www.simplyrecipes.com/thmb/WFAZWL7N-orBG_wnB52Zun4xxhk=/3111x3111/smart/filters:no_upscale()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
        alt=""
      />
      <h3>{name}</h3>
      <hr/>

      {/* {itemNumber > 0 ? (
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
      {itemNumber ? (
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
      ) : null} */}
      {itemNumber > 0 ? (
        <div  className="menuitems__button2">
          <button className="menuitems__button3" onClick={handleMinus}>
            <img className="menuitems__img2" src="https://img.icons8.com/material-outlined/24/000000/minus.png" />
          </button>
         <h2>  {itemNumber}</h2>
          <button className="menuitems__button4" onClick={handlePlus}>
            <img className="menuitems__img3" src="https://img.icons8.com/android/24/000000/plus.png" />
          </button>
        </div>
      ) : (
        <button  onClick={handlePlusButton}>
          <img className="menuitems__img4" src="https://img.icons8.com/material-rounded/48/000000/plus--v2.png" />
        </button>
      )}
    </div>
  );
};

export default MenuItem;
