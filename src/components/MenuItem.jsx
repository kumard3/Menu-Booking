import React, { useState } from "react";

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
    <>
      <h3>{name}</h3>

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
        <div>
          <button onClick={handleMinus}>-</button>
          {itemNumber}
          <button onClick={handlePlus}>+</button>
        </div>
      ) : (
        <button onClick={handlePlusButton}>Add +</button>
      )}
    </>
  );
};

export default MenuItem;
