import React, { useEffect, useState } from "react";
import db from "../../firebase";

export const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  console.log(orders);
  useEffect(() => {
    db.collection("table1")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <div>
        <div>
          <h1>Table 1</h1>
          {orders.map((order) => {
            return (
              <div>
                <h1>{order.username}</h1>
                {order.order.map((item) => {
                  return (
                    <div>
                      <h3>
                        {item.name} {item.numberOfPlates * item.price}{" "}
                        {item.numberOfPlates}
                      </h3>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
