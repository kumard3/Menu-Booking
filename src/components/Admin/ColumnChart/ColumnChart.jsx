import React from "react";
import Chart from "./Chart";

const BarChart = ({
  widgetTitle,
  series,
  colors,
  prefix,
  totalValue,
  text,
  position,
  percentage,
  categories,
}) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "65%",
          endingShape: "flat",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
      },
      // responsive: [
      //   {
      //     breakpoint: 720,
      //     options: {
      //       plotOptions: {
      //         bar: {
      //           horizontal: true
      //         }
      //       }
      //     }
      //   }
      // ],
      grid: {
        borderColor: "#F7F7F7",
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: colors,
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: "#161F6A",
            fontSize: "14px",
            fontFamily: "'Lato', sans-serif",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: categories,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            color: "#161F6A",
            fontSize: "14px",
            fontFamily: "'Lato', sans-serif",
          },
        },
      },
    },
    series: [
      {
        name: "Sale",
        data: series,
      },
    ],
  };

  return (
    <div>
      <div>
        <div>
          <div title={widgetTitle} />
          <div>
            <div>
              {prefix}
              {totalValue}
            </div>
            <div>
              <span style={{ color: "#00C58D" }}>
           
              </span>

              <span style={{ color: "#fc4a71" }}>

              </span>

              <span style={{ marginLeft: 5 }}>
                <span style={{ color: "#00C58D" }}>{percentage}</span>
                &nbsp;
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          height="350"
          width="100%"
          type="bar"
        />
      </div>
    </div>
  );
};

export default BarChart;
