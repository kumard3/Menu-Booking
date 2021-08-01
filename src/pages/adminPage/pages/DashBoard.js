import React from "react";
import DashBoardCard from "../../../components/Admin/DashBoardCard";
import ColumnChart from "../../../components/Admin/ColumnChart/ColumnChart";
import StickerCard from "../../../components/Admin/StickerCard";

import "../../../styles/dashBoard.scss";
import { CoinIcon } from "../../../assets/CoinIcon";
import { Revenue } from "../../../assets/Revenue";
import { Refund } from "../../../assets/Refund";
import BarChart from "../../../components/Admin/ColumnChart/BarChart";
import GrpahChart from "../../../components/Admin/ColumnChart/GraphChart";
// import BarChart from '../../../components/Admin/ColumnChart/ColumnChart'
function DashBoard({ total, totalOrders }) {
  console.log(total);
  return (
    <div className="dashBoard">
      <DashBoardCard total={total} totalOrders={totalOrders} />
      <div className="dashBoard__mid">
        <div className="dashBoard__graphChat">
          <GrpahChart
            widgetTitle="Sales From Social Media"
            colors={["#03D3B5"]}
            series={[25, 30, 14, 30, 55, 60, 48]}
            labels={[
              "2019-05-12",
              "2019-05-13",
              "2019-05-14",
              "2019-05-15",
              "2019-05-16",
              "2019-05-17",
              "2019-05-18",
            ]}
          />
        </div>
        <div className="dashBoard__barChat">
          <BarChart
            widgetTitle="Target"
            series={[30634, 6340]}
            labels={["Todays Revenue", "Todays Refund"]}
            colors={["#03D3B5", "#666d92"]}
            helperText={["Weekly Targets", "Monthly Targets"]}
            icon={[<Revenue />, <Refund />]}
            prefix="$"
          />
        </div>
      </div>
      <div className="dashBoard__bottom">
        <div className="dashboard__wrap">
          <ColumnChart
            widgetTitle="Sale History"
            colors={["#03D3B5"]}
            prefix="$"
            totalValue="1,92,564"
            percentage="1.38%"
            text="More than last year"
            series={[44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65]}
            categories={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
