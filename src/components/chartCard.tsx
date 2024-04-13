"use client";
import React from "react";
import ApexChart from "./Chart/apexChart";
// import ReactApexChart from "react-apexcharts";
// const ApexChart = ReactApexChart;

export default function ChartCard() {
  return (
    <div className="bg-[white] rounded-xl flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="max-[1024px]:px-4 max-[1024px]:py-[14px] select-none text-[#282828] w-full text-[18px] font-semibold p-5 border-b border-[#EAECF0]">
          Performance
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="p-5 max-[1024px]:p-0 w-full">
          <ApexChart
            height={356}
            type="area"
            series={[
              {
                name: "Instagram",
                data: [160, 250, 160, 140, 270, 150, 220],
              },
              {
                name: "Facebook",
                data: [200, 180, 320, 400, 200, 220, 180],
              },
            ]}
            options={{
              colors: ["#679CF6", "#20C997"],
              chart: {
                type: "area",
                toolbar: {
                  show: false,
                  tools: {
                    zoom: false,
                  },
                },
              },

              dataLabels: {
                enabled: false,
              },
              stroke: {
                width: 3,
                curve: "smooth",
              },
              xaxis: {
                labels: {
                  style: {
                    colors: "#9D9FA1",
                    fontSize: "12px",
                  },
                },
                type: "category",
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#9D9FA1",
                    fontSize: "12px",
                  },
                },
              },
              legend: {
                height: 48,
                
                position: "bottom",
                horizontalAlign: "center",
                itemMargin: { horizontal: 32, vertical: 0 },
                markers: {
                  offsetX: -5,
                },
                labels: {
                  colors: "#5F6980",
                },
                fontSize: "14px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
