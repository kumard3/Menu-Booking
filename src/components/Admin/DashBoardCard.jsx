import React from "react";
import { CartIconBig } from "../../assets/CartIconBig";
import { CoinIcon } from "../../assets/CoinIcon";
import { OrderIcon } from "../../assets/OrderIcon";
import "./style/dashBoardcard.scss";

function DashBordCard({ total,totalOrders }) {
  console.log(totalOrders)
  return (
    <div className="dashBoardCard">
      <div className="dashBoardCard__1">
        <div className="dashBoardCard__wrapper">
          <h1>Revenue</h1>
          <CoinIcon />{" "}
        </div>

        <span className="dashBoardCard__revenue"> $5000 </span>
      </div>
      <div className="dashBoardCard__1">
        <div className="dashBoardCard__wrapper">
          <h1>Orders Remanings</h1>

          <CartIconBig />
        </div>

        <span className="dashBoardCard__incompletedOrder">{total}</span>
      </div>
      <div className="dashBoardCard__1">
        {" "}
        <div className="dashBoardCard__wrapper">
          <h1>Total Orders</h1>

          <CartIconBig />
        </div>
        <span className="dashBoardCard__totalorders">{totalOrders}</span>
      </div>
      <></>
    </div>
  );
}

export default DashBordCard;
