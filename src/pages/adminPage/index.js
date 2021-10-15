import React, { useEffect, useState, useRef } from "react";
import db from "../../firebase";
import "../../styles/admin.scss";
import { useReactToPrint } from "react-to-print";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavAdmin from "../../components/Admin/NavAdmin";
import SidebarNav from "../../components/Admin/SidebarNav";
import { OrdersPage } from "./pages/OrdersPage";
import DashBoard from "./pages/DashBoard";


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
  // console.log(orders);
  const [newOrder, setNewOrder] = useState(0);
  const [newOrder2, setNewOrder2] = useState(0);
  const [newOrder3, setNewOrder3] = useState(0);
  const [newOrder4, setNewOrder4] = useState(0);
  const [newOrder5, setNewOrder5] = useState(0);
  const [newOrder6, setNewOrder6] = useState(0);
  const [newOrder7, setNewOrder7] = useState(0);
  const [newOrder8, setNewOrder8] = useState(0);
  const [newOrder9, setNewOrder9] = useState(0);

  const [show, setShow] = React.useState(false);
  const [newOnlineOrders, setNewOnlineOrders] = useState(0);
  const [onlineOrders, setOnlineOrders] = useState([]);
  const [storedata, setStoredData] = useState({});

  const [collapsed, setCollapsed] = useState(false);

  const componentRef = useRef({});

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
  const [incompletedOrders, setIncompletedOrders] = useState(
    newOrder +
      newOrder2 +
      newOrder3 +
      newOrder4 +
      newOrder5 +
      newOrder6 +
      newOrder7 +
      newOrder8 +
      newOrder9 +
      newOnlineOrders
  );
  const [totalOrders, setTotalOrders] = useState(
       orders.length  +
      orders2.length +
      orders3.length +
      orders4.length +
      orders5.length +
      orders6.length +
      orders7.length +
      orders8.length +
      orders9.length +
      onlineOrders.length
  );

  function totalOrder() {
    setTotalOrders(
      orders.length  +
      orders2.length +
      orders3.length +
      orders4.length +
      orders5.length +
      orders6.length +
      orders7.length +
      orders8.length +
      orders9.length +
      onlineOrders.length
    );
  }
  function IncompletedOrder() {
    setIncompletedOrders(
      newOrder +
        newOrder2 +
        newOrder3 +
        newOrder4 +
        newOrder5 +
        newOrder6 +
        newOrder7 +
        newOrder8 +
        newOrder9 +
        newOnlineOrders
    );
  }
  console.log(orders.length);
  const handlePassInfoShow = (data) => {
    setShow(true);
    setIsOpen(true);
    setStoredData(data);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

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
    setNewOnlineOrders(checkNewOrder(onlineOrders));
    IncompletedOrder();
    totalOrder();
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
    onlineOrders,
    IncompletedOrder,
    totalOrder,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
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
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("home-delivery")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOnlineOrders(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              address: doc.data().address,
              contact: doc.data().contact,
              totalprice: doc.data().totalPrice,
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
  const updateOnlineOrder = (id) => {
    db.collection("home-delivery").doc(id).update({ completed: true });
  };
  // const print = () => {
  //   window.print();
  // }

  return (
    <>
      <Router>
        <div className="adminPannel">
          <SidebarNav trigger={null} collapsible collapsed={setCollapsed} />
          <NavAdmin />
          <Switch>
            <Route path="/admin/orders">
              <OrdersPage
                orders={orders}
                orders2={orders2}
                orders3={orders3}
                orders4={orders4}
                orders5={orders5}
                orders6={orders6}
                orders7={orders7}
                orders8={orders8}
                orders9={orders9}
                onlineOrders={onlineOrders}
                handlePassInfoShow={handlePassInfoShow}
                storedata={storedata}
                newOrder={newOrder}
                newOrder2={newOrder2}
                newOrder3={newOrder3}
                newOrder4={newOrder4}
                newOrder5={newOrder5}
                newOrder6={newOrder6}
                newOrder7={newOrder7}
                newOrder8={newOrder8}
                newOrder9={newOrder9}
                updateOrder={updateOrder}
                updateOrder2={updateOrder2}
                updateOrder3={updateOrder3}
                updateOrder4={updateOrder4}
                updateOrder5={updateOrder5}
                updateOrder6={updateOrder6}
                updateOrder7={updateOrder7}
                updateOrder8={updateOrder8}
                updateOrder9={updateOrder9}
                updateOnlineOrder={updateOnlineOrder}
                setStoredData={setStoredData}
                total={incompletedOrders}
                newOnlineOrders={newOnlineOrders}
                onlineOrders={onlineOrders}
                IncompletedOrder={IncompletedOrder}
              />
            </Route>
            <Route path="/admin/dashboard">
              <DashBoard total={incompletedOrders} totalOrders={totalOrders}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
