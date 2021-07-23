import React, { useState } from "react";

const MenuItem = ({ id, menuItems, setMenuItems, name, price }) => {
  const [itemNumber, setItemNumber] = useState(0);

  console.log(menuItems);
  const handlePlus = () => {
    let objIndex = menuItems.findIndex((obj) => obj.id === id);
    let newItem = [...menuItems];
    let object = {
      id: id,
      name: name,
      numberOfPlates: itemNumber + 1,
      price: price,
    };
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
      let object = {
        id: id,
        name: name,
        numberOfPlates: itemNumber - 1,
        price: price,
      };
      newItem[objIndex] = object;
      setMenuItems(newItem);
      setItemNumber(itemNumber - 1);
    }
  };

  const handlePlusButton = () => {
    setItemNumber(1);
    setMenuItems([
      ...menuItems,
      { id: id, name: name, numberOfPlates: 1, price: price },
    ]);
  };
  return (
    <>
      <div className="w-full flex items-center justify-around mt-5">
        {" "}
        <h3 className="text-white text-lg">{name}</h3>
        <h3 className="text-white text-lg">Rs. {price} </h3>
        {itemNumber > 0 ? (
          <div className=" w-20 flex justify-around items-center text-xl">
            <button className="bg-white w-4 rounded" onClick={handleMinus}>
              -
            </button>
            <h2 className="text-white mx-2">{itemNumber}</h2>
            <button className="bg-white w-4 rounded" onClick={handlePlus}>
              +
            </button>
          </div>
        ) : (
          <button
            className="bg-green-500 rounded-md w-14 text-xl"
            onClick={handlePlusButton}>
            Add +
          </button>
        )}
      </div>
    </>
  );
};

export default MenuItem;
