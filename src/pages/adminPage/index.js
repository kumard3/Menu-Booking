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
      {/* {orders.length > 0 ? <h1>{orders[0].username}</h1> : "Recieving Data"} */}
      <div>
        <div>
          <h1>Table 1</h1>
          {orders.map((order) => {
            return (
              <div>
                <h1>{order.username}</h1>
                {order.order.map(item => {
                  return (
                  <div>
                    
                  </div>
                  )
                } )}
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
