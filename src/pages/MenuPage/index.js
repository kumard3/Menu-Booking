import React, { useState } from "react";
import Modal from "react-modal";
import firebase from "firebase";
import db from "../../firebase";
import "../../styles/menuPage.scss";
import Nav from "../../components/Nav";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import All from "../../components/category/All";
import Chicken from "../../components/category/Chicken";
import Burger from "../../components/category/Burger";
import Sandwich from "../../components/category/Sandwich";
import Pasta from "../../components/category/Pasta";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// Modal.setAppElement("#root");
export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const submitOrder = () => {
    db.collection(`table${table}`)
      .add({
        order: menuItems,
        username: name,
        table: table,
        completed: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      // .then(() => scrollToTop())
      // .then(() => toastifySuccess())
      // .then(() => toggleModal())
      .then(() => handleClickOpen());
    // .then(() => refreshPage());
  };
  // function refreshPage() {
  //   setTimeout(function () {
  //     window.location.reload(false);
  //   }, 50000);
  // }
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length === 0) {
      alert("Add any meal.");
    } else if (name === "") {
      alert("Please enter your name.");
    } else {
      submitOrder();
    }
  };
  // const toastifySuccess = () => {
  //   toast("Hurray! Order sent.", {
  //     position: "top-right",
  //     autoClose: 50000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback success",
  //     toastId: "notifyToast",
  //   });
  // };

  return (
    <>
      <div className="menupage">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            {"Hurray! Your order has been submitted."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
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
          <div className="catagory">
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("all")}>
              All
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("chicken")}>
              Chicken
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("burger")}>
              Burger
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("sandwich")}>
              Sandwich
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("pasta")}>
              Pastas
            </button>
            <button className="catagory__wrapper">Mutton</button>
          </div>
        </section>
        <h1 className="text-2xl">Menu</h1>
        <main className="menupage__product">
          {(() => {
            if (category === "all") {
              return <All menuItems={menuItems} setMenuItems={setMenuItems} />;
            } else if (category === "chicken") {
              return (
                <Chicken menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "burger") {
              return (
                <Burger menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "sandwich") {
              return (
                <Sandwich menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "pasta") {
              return (
                <Pasta menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else {
              return <div>Add ANother</div>;
            }
          })()}
        </main>
        <button className="submit" onClick={checkMenu}>
          Submit Order
        </button>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};
