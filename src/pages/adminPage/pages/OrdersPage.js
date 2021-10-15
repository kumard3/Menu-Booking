import React, { useEffect, useState, useRef } from "react";

import "../../../styles/admin.scss";
import { useReactToPrint } from "react-to-print";

import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "24rem",
    height: "33rem",
  },
};

export const OrdersPage = ({
  orders            ,
  orders2           ,
  orders3           ,
  orders4           ,
  orders5           ,
  orders6           ,
  orders7           ,
  orders8           ,
  orders9           ,
  // onlineOrders      ,
  // handlePassInfoShow,
  storedata         ,
  newOrder          ,
  newOrder2         ,
  newOrder3         ,
  newOrder4         ,
  newOrder5         ,
  newOrder6         ,
  newOrder7         ,
  newOrder8         ,
  newOrder9         ,
  updateOrder       ,
  updateOrder2      ,
  updateOrder3      ,
  updateOrder4      ,
  updateOrder5      ,
  updateOrder6      ,
  updateOrder7      ,
  updateOrder8      ,
  updateOrder9      ,
  updateOnlineOrder ,
  setStoredData,
  total,
  newOnlineOrders,
  onlineOrders,
  IncompletedOrder

}) => {

  const [show, setShow] = React.useState(false);

  const componentRef = useRef({});




  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const handlePassInfoShow = (data) => {
    setShow(true);
    setIsOpen(true);
    setStoredData(data);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);



  function closeModal() {
    setIsOpen(false);
  }




  return (
    <>
      <div className="admin">
        {show && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ref={componentRef}
            className="modal__price"
          >
            <div className="print__data" >
            <div  className="print__wrapper">
            <h1><span>User Name</span> :{storedata.username} </h1> 
            <h1> Date: <span> 30/07/2021</span> </h1>
            </div>

            <hr/>

              {storedata.order.map( orders => {
                console.log(orders);
                return (
                  <div>
                    <h1>{orders.totalprice}</h1>
               
                        <div>
                          <h1 className="items">
                            <span> {orders.name} </span>
                            <span> {orders.numberOfPlates} </span>
                            <span> {orders.numberOfPlates * orders.price}</span>
                          </h1>
                          <h1>
                
                          </h1>
                        </div>
                 
                  </div>
                );
              })}
              <hr/>
             <h1><span>Total Price</span> :{storedata.totalprice} </h1> 
              <button className="print__button" onClick={handlePrint}>Print this out!</button>
          </div>
          </Modal>
        )}

        <div className="admin__wrapper">
          <div>
            <h1 className="admin__table">
              Table 1{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder === 0 ? "span__green" : "span__red"}>
                {newOrder}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders.map((order) => {
              
                return (
                  <div
                    key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> -:{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                      className="print__button"
                      onClick={() => handlePassInfoShow(order[0])}
                    >
                      {" "}
                      <span>Click Here to Print</span>{" "}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 2{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder2 === 0 ? "span__green" : "span__red"}>
                {newOrder2}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders2.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder2(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 3{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder3 === 0 ? "span__green" : "span__red"}>
                {newOrder3}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders3.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder3(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 4{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder4 === 0 ? "span__green" : "span__red"}>
                {newOrder4}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders4.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder4(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="admin__table">
              Table 5{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder5 === 0 ? "span__green" : "span__red"}>
                {newOrder5}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders5.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder5(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 6{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder6 === 0 ? "span__green" : "span__red"}>
                {newOrder6}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders6.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder6(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 7{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder7 === 0 ? "span__green" : "span__red"}>
                {newOrder7}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders7.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder7(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 8{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder8 === 0 ? "span__green" : "span__red"}>
                {newOrder8}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders8.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder8(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="admin__table">
              Table 9{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder9 === 0 ? "span__green" : "span__red"}>
                {newOrder9}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders9.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder9(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Home Delivery{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span
                className={newOnlineOrders === 0 ? "span__green" : "span__red"}
              >
                {newOnlineOrders}
              </span>
            </h1>

            <div className="admin__table1main">
              {onlineOrders.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                      <span>Contact : </span> {order[0].contact}
                      <span>Address : </span> {order[0].address}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOnlineOrder(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
