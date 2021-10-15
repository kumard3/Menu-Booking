import React from "react";
import "./style/sideBarAdmin.scss";
import { NavLink } from "react-router-dom";
import { DashboardIcon } from "../../assets/ DashboardIcon";
import { OrderIcon } from "../../assets/OrderIcon";

function SidebarNav() {
  return (
    <div className="sidebar">
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
          <DashboardIcon />{" "}
          <h1>Dashboard</h1>
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
      <h1> Invoice</h1>
    </div>
  );
}

export default SidebarNav;
