import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "../../styles/admin.scss";
export const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  console.log(orders);
  useEffect(() => {
    db.collection("table1")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
            },
          ])
        );
      });
  }, []);

  const updateOrder = (id) => {
    db.collection("table1")
      .doc(id)
      .update({ completed: true })
      .then(() => {
        console.log("Updated");
      });
  };

  return (
    <>
      <div className="admin">
        <h1 className="admin__table">Table 1</h1>
        <div className="admin__wrapper">
          {orders.map((order) => {
            return (
              <div>
                <h1>{order[0].username}</h1>
                {order[0].order.map((item) => {
                  return (
                    <div>
                      {item.name} {item.numberOfPlates * item.price}{" "}
                      {item.numberOfPlates}
                    </div>
                  );
                })}
                {!order[0].completed && (
                  <button onClick={() => updateOrder(order[0].id)}>Yes</button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
