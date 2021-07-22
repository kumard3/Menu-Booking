import React, { useState } from "react";

const MenuItem = ({ id, menuItems, setMenuItems, name }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log(menuItems);

  return (
    <>
      <h3>{name}</h3>

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
