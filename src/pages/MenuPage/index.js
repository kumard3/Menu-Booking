import React, { useState } from "react";

import firebase from "firebase";
import db from "../../firebase";
import "../../styles/menuPage.scss";
import Nav from "../../components/Nav";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import All from "../../components/category/All";

import Burger from "../../components/category/Burger";
import Sandwich from "../../components/category/Sandwich";
import Pasta from "../../components/category/Pasta";
import Pizza from "../../components/category/Pizza";
import FriedChicken from "../../components/category/FriedChicken";
import Wraps from "../../components/category/Wraps";
import Footlongs from "../../components/category/Footlongs";
import Shake from "../../components/category/Shake";
import Drawer from "react-bottom-drawer";


import Group1 from "../../assets/Group1.svg";
import Group2 from "../../assets/Group2.svg";
import Group3 from "../../assets/Group3.svg";
import Group4 from "../../assets/Group4.svg";
import Group5 from "../../assets/Group5.svg";
import Group6 from "../../assets/Group6.svg";
import Group7 from "../../assets/Group7.svg";
import Group8 from "../../assets/Group8.svg";

export const MenuPage = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const [errorname, setErrorName] = useState(false);
  const [isVisible, setIsVisible] = React.useState(!true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };
  const handleClickError = () => {
    setError(true);
  };

  const handleCloseError = () => {
    setError(false);
  };
  const handleClickErrorName = () => {
    setErrorName(true);
  };

  const handleCloseErrorName = () => {
    setErrorName(false);
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

      .then(() => handleClickOpen());
  };

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length === 0) {
      // alert("Add any meal.");
      handleClickError();
    } else if (name === "") {
      // alert("Please enter your name.");
      handleClickErrorName();
    } else {
      submitOrder();
    }
  };

  return (
    <>
      <div className="menupage">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Hurray! Your order has been submitted."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={error}
          onClose={handleCloseError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add any meal."}</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseError} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={errorname}
          onClose={handleCloseErrorName}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please enter your name."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseErrorName} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <header className="menupage__header ">
          <Nav table={table} />
        </header>
        <section className="menupage__section ">
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
              onClick={() => setCategory("all")}
            >
              All
            </button>

          <button className="catagory__wrapper"  onClick={() => setCategory("pizza")}>
          <img  
           src={Group1}/>
          </button>
  
  
     
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("pasta")}
            >
             <img src={Group3}/>
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("wraps")}
            >
            <img src={Group4}/>
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("footlongs")}
            >
            <img src={Group5}/>
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("burger")}
            >
              <img src={Group2} />
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("sandwich")}
            >
            <img src={Group6}/>
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("shake")}
            >
            <img src={Group7}/>
            </button>
            <button
              className="catagory__wrapper"
              onClick={() => setCategory("chicken")}
            >
            <img src={Group8}/>
            </button>
          </div>
        </section>
        <h1 className="text-2xl">Menu</h1>
        <main className="menupage__product">
          {(() => {
            if (category === "all") {
              return <All menuItems={menuItems} setMenuItems={setMenuItems} />;
            } else if (category === "chicken") {
              return (
                <FriedChicken
                  menuItems={menuItems}
                  setMenuItems={setMenuItems}
                />
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
            } else if (category === "wraps") {
              return (
                <Wraps menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "footlongs") {
              return (
                <Footlongs menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "shake") {
              return (
                <Shake menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "pizza") {
              return (
                <Pizza menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else {
              return <div>Add ANother</div>;
            }
          })()}
        </main>

        <button onClick={checkMenu}></button>

        <img
          onClick={openDrawer}
          className="cart"
          src="https://img.icons8.com/color/48/000000/shopping-cart--v2.png"
        />

        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
          className="drawer"
        >
          <div className="drawer__content">
            <div className="drawer__scroll">
              {menuItems.map((menu) => {
                return (
                  <div>
                    <div className="drawer__wrapper">
                      <h1>
                        {" "}
                        <span> Product Name:</span> {menu.name}
                      </h1>
                      <h1>
                        <span> Price:</span> {menu.price}
                      </h1>
                      <h1>
                        <span> Quantity:</span> {menu.numberOfPlates}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="drawer__submit" onClick={checkMenu}>
              {" "}
              <span>Submit</span>{" "}
            </button>
          </div>
        </Drawer>
      </div>
    </>
  );
};
