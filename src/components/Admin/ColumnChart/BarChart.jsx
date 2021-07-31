import React from "react";
import Chart from "./Chart";

const BarChart = ({ series, icon, labels, prefix, colors }) => {
  const options = {
    options: {
      colors: colors,
      dataLabels: {
        enabled: false
      },
      labels: labels,
      legend: {
        show: false
      },
      stroke: {
        show: false
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.8
          }
        }
      },
      plotOptions: {
        pie: {
          donut: {},
          expandOnClick: false
        }
      }
    },
    series: series
  };

  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <div>
        <div>
          <div >{icon[0]}</div>
          <div>
            <div style={{ color: colors[0] }}>
              {prefix}
              {numberWithCommas(series[0])}
            </div>
            <div>{labels[0]}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          // height="350"
          width="100%"
          type="donut"
        />
      </div>

      <div>
        <div style={{ flexDirection: "row-reverse" }}>
          <div style={{ marginRight: "0", marginLeft: "15px" }}  >{icon[1]}</div>
          <div style={{ alignItems: "flex-end" }}>
            <div style={{ color: colors[1] }}>
              {prefix}
              {numberWithCommas(series[1])}
            </div>
            <div>{labels[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
