import React, { useState } from "react";

import firebase from "firebase";
import db from "../../firebase";
import "../../styles/menuPage.scss";
import Nav from "../../components/Nav";

import All from "../../components/category/All";
import Chicken from "../../components/category/Chicken";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState("");

  const [category, setCategory] = useState("all");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const submitOrder = () => {
    db.collection(`table${table}`)
      .add({
        order: menuItems,
        username: name,
        table: table,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => refreshPage());
  };
  function refreshPage() {
    alert("Your order has been recieved.");
    window.location.reload(false);
  }

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length === 0) {
      alert("Order any meal.");
    } else if (name === "") {
      alert("Please enter your name.");
    } else {
      submitOrder();
    }
  };
  // const toastifySuccess = () => {
  //   toast("Order Placed", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback success",
  //     toastId: "notifyToast",
  //   });
  // };

  // const submitdone = () => {
  //   toastifySuccess();
  // };
  // const [name, setName] = useState("");
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const submitOrder = () => {
  //   db.collection(`table${table}`).add({
  //     order: menuItems,
  //     username: name,
  //     table: table,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  // };

  // const checkMenu = (event) => {
  //   event.preventDefault();
  //   if (menuItems.length > 0 && name !== "") {
  //     submitOrder();
  //   } else {
  //     alert("Order any meal.");
  //   }
  // };

  return (
    <>
      <div className="menupage">
        <header className="menupage__header ">
          <Nav table={table} />
        </header>
        <section className="menupage__section ">
          {" "}
          <label htmlFor="customerName">User Name</label>
          <input
            className="menupage__input "
            type="text"
            value={name}
            placeholder="Please enter your name"
            required
            onChange={handleName}
          />
        </section>
        <section className="menupage__catagory">
          <h1>Category </h1>
          <div className="flex justify-evenly">
            <button onClick={() => setCategory("all")}>All</button>
            <button onClick={() => setCategory("chicken")}>Chicken</button>
            <button>Mutton</button>
          </div>
        </section>
        <h1 className="text-2xl">Menu</h1>
        <main className="menupage__product"></main>

        {(() => {
          if (category === "all") {
            return <All menuItems={menuItems} setMenuItems={setMenuItems} />;
          } else if (category === "chicken") {
            return (
              <Chicken menuItems={menuItems} setMenuItems={setMenuItems} />
            );
          } else {
            return <div>cAdd ANother</div>;
          }
        })()}

        <button className="submit" onClick={checkMenu}>
          Submit Order
        </button>
      </div>
    </>
  );
};
