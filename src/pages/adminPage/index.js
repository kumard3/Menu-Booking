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
        setOrders(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      {/* {orders.length > 0 ? <h1>{orders[0].username}</h1> : "Recieving Data"} */}
      <div className="admin">
        <h1 className="admin__table">Table 1</h1>
        <div className="admin__wrapper">
          {orders.map((order) => {
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
          })}
        </div>
      </div>
    </>
  );
};
