import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "../../styles/admin.scss";
export const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [orders2, setOrders2] = useState([]);
  const [orders3, setOrders3] = useState([]);
  const [orders4, setOrders4] = useState([]);
  const [orders5, setOrders5] = useState([]);
  const [orders6, setOrders6] = useState([]);
  const [orders7, setOrders7] = useState([]);
  const [orders8, setOrders8] = useState([]);
  const [orders9, setOrders9] = useState([]);

  const [newOrder, setNewOrder] = useState(0);
  const [newOrder2, setNewOrder2] = useState(0);
  const [newOrder3, setNewOrder3] = useState(0);
  const [newOrder4, setNewOrder4] = useState(0);
  const [newOrder5, setNewOrder5] = useState(0);
  const [newOrder6, setNewOrder6] = useState(0);
  const [newOrder7, setNewOrder7] = useState(0);
  const [newOrder8, setNewOrder8] = useState(0);
  const [newOrder9, setNewOrder9] = useState(0);
  console.log(newOrder);
  const checkNewOrder = (orders) => {
    if (orders.length > 0) {
      let count = 0;
      for (let i = 0; orders.length > i; i++) {
        if (!orders[i][0].completed) {
          count++;
        }
      }
      return count;
    }
  };

  useEffect(() => {
    setNewOrder(checkNewOrder(orders));
    setNewOrder2(checkNewOrder(orders2));
    setNewOrder3(checkNewOrder(orders3));
    setNewOrder4(checkNewOrder(orders4));
    setNewOrder5(checkNewOrder(orders5));
    setNewOrder6(checkNewOrder(orders6));
    setNewOrder7(checkNewOrder(orders7));
    setNewOrder8(checkNewOrder(orders8));
    setNewOrder9(checkNewOrder(orders9));
  }, [
    orders,
    orders2,
    orders3,
    orders4,
    orders5,
    orders6,
    orders7,
    orders8,
    orders9,
  ]);
  useEffect(() => {
    db.collection("table1")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
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
  useEffect(() => {
    db.collection("table2")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders2(
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
  useEffect(() => {
    db.collection("table3")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders3(
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
  useEffect(() => {
    db.collection("table4")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders4(
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
  useEffect(() => {
    db.collection("table5")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders5(
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
  useEffect(() => {
    db.collection("table6")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders6(
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
  useEffect(() => {
    db.collection("table7")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders7(
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
  useEffect(() => {
    db.collection("table8")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders8(
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
  useEffect(() => {
    db.collection("table9")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders9(
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
    db.collection("table1").doc(id).update({ completed: true });
  };
  const updateOrder2 = (id) => {
    db.collection("table2").doc(id).update({ completed: true });
  };
  const updateOrder3 = (id) => {
    db.collection("table3").doc(id).update({ completed: true });
  };
  const updateOrder4 = (id) => {
    db.collection("table4").doc(id).update({ completed: true });
  };
  const updateOrder5 = (id) => {
    db.collection("table5").doc(id).update({ completed: true });
  };
  const updateOrder6 = (id) => {
    db.collection("table6").doc(id).update({ completed: true });
  };
  const updateOrder7 = (id) => {
    db.collection("table7").doc(id).update({ completed: true });
  };
  const updateOrder8 = (id) => {
    db.collection("table8").doc(id).update({ completed: true });
  };
  const updateOrder9 = (id) => {
    db.collection("table9").doc(id).update({ completed: true });
  };

  return (
    <>
      <div className="admin">
        <div className="admin__wrapper">
          <div className="admin__table1main">
            <h1 className="admin__table">Table 1 {newOrder}</h1>
            {orders.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 2 {newOrder2}</h1>
            {orders2.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder2(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 3 {newOrder3}</h1>
            {orders3.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder3(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 4 {newOrder4}</h1>
            {orders4.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder4(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 5 {newOrder5}</h1>
            {orders5.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder5(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 6 {newOrder6}</h1>
            {orders6.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder6(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 7 {newOrder7}</h1>
            {orders7.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder7(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 8 {newOrder8}</h1>
            {orders8.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder8(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="admin__table1main">
            <h1 className="admin__table">Table 9 {newOrder9}</h1>
            {orders9.map((order) => {
              return (
                <div
                  className={
                    order[0].completed ? "admin__green" : "admin__red"
                  }>
                  <h1 className="h1">
                    {" "}
                    <span>User Name : </span> {order[0].username}
                  </h1>

                  {order[0].order.map((item) => {
                    return (
                      <div>
                        <h1>
                          <span>Product Name : </span> {item.name}
                        </h1>
                        <h1>
                          {" "}
                          <span>Price :</span>{" "}
                          {item.numberOfPlates * item.price}
                        </h1>
                        <h1>
                          <span>Number Of Plates :</span> {item.numberOfPlates}
                        </h1>
                      </div>
                    );
                  })}
                  {!order[0].completed && (
                    <button
                      className="button__y"
                      onClick={() => updateOrder9(order[0].id)}>
                      <h1>Yes</h1>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
