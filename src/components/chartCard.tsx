"use client";
import React from "react";
import ApexChart from "./Chart/apexChart";

export default function ChartCard() {
  return (
    <div className="w-full bg-[white] rounded-xl flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="select-none text-[#282828] w-full text-[18px] font-semibold p-5 border-b border-[#EAECF0]">
          Performance
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="p-5 w-full">
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
                type: "category",
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              },
              legend: {
                itemMargin: { horizontal: 16 },
                markers: {
                  offsetX: -5,
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
