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
    <div className="box">
      <div className="box__BoxTitleWrapper">
        <div className="box__ChartLabels">
          <div className="box__Img" >{icon[0]}</div>
          <div className="box__Content">
            <div className="box__SeriesText" style={{ color: colors[0] }}>
              {prefix}
              {numberWithCommas(series[0])}
            </div>
            <div className="box__LabelText">{labels[0]}</div>
          </div>
        </div>
      </div>

      <div className="box__BoxContent" style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          // height="350"
          width="100%"
          type="donut"
        />
      </div>

      <div className="box__BoxTitleWrapper">
        <div className="box__ChartLabels" style={{ flexDirection: "row-reverse" }}>
          <div className="box__Img" style={{ marginRight: "0", marginLeft: "15px" }}  >{icon[1]}</div>
          <div className="box__Content" style={{ alignItems: "flex-end" }}>
            <div className="box__SeriesText" style={{ color: colors[1] }}>
              {prefix}
              {numberWithCommas(series[1])}
            </div>
            <div className="box__LabelText">{labels[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
