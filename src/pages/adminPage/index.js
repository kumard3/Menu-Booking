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
    <> {orders.length > 0 ? <h1>{orders[0].username}</h1> : "Recieving Data"}</>
  );
};
