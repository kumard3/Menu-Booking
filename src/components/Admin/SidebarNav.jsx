import React from "react";
import "./style/sideBarAdmin.scss";
import { NavLink } from "react-router-dom";
import { DashboardIcon } from "../../assets/ DashboardIcon";
import { OrderIcon } from "../../assets/OrderIcon";


function SidebarNav() {
  const linkStyle =
    "text-custom-text-gray flex items-center p-4  justify-start  dark:from-gray-700 dark:to-gray-800  ";

  const activeStyle = {
    color: "#233484",
    borderRadius: 15,
    // background: "#F5F9FF",
  };
  return (
    <div className="">
      <div className="hidden sm:block sidebar">
        <NavLink
          activeStyle={{
            color: "#00C58D",
            backgroundColor: "#f7f7f7",
            borderRadius: "50px 0 0 50px",
          }}
          to="/admin/dashboard"
        >
          {" "}
          <div className="sidebar__wrapper">
            {" "}
            <DashboardIcon /> <h1>Dashboard</h1>
          </div>{" "}
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#00C58D",
            backgroundColor: "#f7f7f7",
            borderRadius: "50px 0 0 50px",
          }}
          to="/admin/orders"
        >
          <div className="sidebar__wrapper">
            <OrderIcon />
            <h1>Orders</h1>{" "}
          </div>
        </NavLink>
      </div>
      {/* <button onClick={openModal}>open it plzz</button> */}
      <div className=" sm:hidden bottom__nav ">
        <div className="bottom__navWrapper">
          <div className="bottom__navContainer">
            <NavLink
              className={`${linkStyle}`}
              activeStyle={activeStyle}
              to="/admin/dashboard"
            >
              <div className="sidebar__wrapper">
                {" "}
                <DashboardIcon /> 
                {/* <h1>Dashboard</h1> */}
              </div>{" "}
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#00C58D",
                backgroundColor: "#f7f7f7",
                borderRadius: "50px 0 0 50px",
              }}
              to="/admin/orders"
            >
              <div className="sidebar__wrapper">
                <OrderIcon />
                {/* <h1>Orders</h1>{" "} */}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
