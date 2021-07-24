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
          {/* {orders.map((order) => {
            if (!order.recieved) {
              return (
                <div className="admin__data">
                  <h1 className="admin__h1">{order.username}</h1>
                  {order.order.map((item) => {
                    return (
                      <div className="admin__items">
                        <h3>
                          {item.name} {item.numberOfPlates * item.price}{" "}
                          {item.numberOfPlates}
                        </h3>
                      </div>
                    );
                  })}
                  <button>Yes</button>
                </div>
              );
            } else {
              return (
                <div className="admin__data">
                  <h1 className="admin__h1">{order.username}</h1>
                  {order.order.map((item) => {
                    return (
                      <div className="admin__items">
                        <h3>
                          {item.name} {item.numberOfPlates * item.price}{" "}
                          {item.numberOfPlates}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              );
            }
          })} */}
          {orders.map((order) => {
            if (order[0].completed) {
              return (
                <div>
                  {order[0].order.map((item) => {
                    return (
                      <div>
                        {item.name} {item.numberOfPlates * item.price}{" "}
                        {item.numberOfPlates}
                      </div>
                    );
                  })}
                </div>
              );
            } else {
              return (
                <div>
                  {order[0].order.map((item) => {
                    return (
                      <div>
                        {item.name} {item.numberOfPlates * item.price}{" "}
                        {item.numberOfPlates}
                      </div>
                    );
                  })}
                  <button onClick={() => updateOrder(order[0].id)}>Yes</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
