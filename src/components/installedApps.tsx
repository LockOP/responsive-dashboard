"use client";
import { installedAppsNextPage, installedAppsPrevPage } from "@/redux/action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InstalledApps() {
  const dispatch = useDispatch();
  const installedApps = useSelector(
    (state: any) => state.dashboardReducer.installedApps
  );

  return (
    <div className="w-full bg-[white] rounded-xl flex flex-col select-none">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="max-[1024px]:px-4 max-[1024px]:py-[14px] select-none text-[#282828] w-full text-[18px] font-semibold p-5 border-b border-[#EAECF0]">
          Installed apps
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full overflow-auto">
          <table className="table-auto w-full max-[1024px]:w-[1240px] max-[1024px] text-left select-none ">
            <thead>
              <tr className="bg-[#F9FAFB] text-[#5F6980] font-light text-[14px]">
                <th className="pl-6 font-normal py-4 w-[19%]">Source</th>
                <th className="font-normal w-[13%]">Amount</th>
                <th className="font-normal w-[15%]">Status</th>
                <th className="font-normal w-[15%]">User ID</th>
                <th className="font-normal w-[15%]">Joined</th>
                <th className="pr-6 font-normal w-[14%]">Group</th>
              </tr>
            </thead>
            <tbody>
              {installedApps.data
                .filter(
                  (item: any, index: number) =>
                    index >= (installedApps.page - 1) * installedApps.size &&
                    index < installedApps.page * installedApps.size
                )
                .map((installedApp: any) => (
                  <tr key={installedApp.name} className="hover:bg-[#F9FAFB]">
                    <td className="pl-6 py-4 ">
                      <div className="w-max flex flex-row items-center gap-3">
                        <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[9.43px] shadow-custom">
                          <img
                            src={installedApp.iconSrc}
                            className="w-[25.78px] h-[25.78px]"
                          />
                        </div>
                        <div className="w-max text-[#282828] text-[14] font-semibold">
                          {installedApp.name}
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-normal text-[#5F6980]">
                      {installedApp.amount}
                    </td>
                    <td>
                      <div
                        className={`w-max px-[10px] py-[2px] rounded-full text-[12px] font-semibold ${
                          installedApp.status ||
                          installedApp.status == "Cancelled"
                            ? installedApp.status == "Active"
                              ? "bg-[#DCFFF5] text-[#20C997]"
                              : installedApp.status == "Pending"
                              ? "bg-[#FFEAD8] text-[#FD7E14]"
                              : "bg-[#F2F4F7] text-[#5F6980]"
                            : "bg-[#F2F4F7] text-[#5F6980]"
                        }`}
                      >
                        {installedApp.status}
                      </div>
                    </td>
                    <td className="text-[14px] font-normal text-[#5F6980]">
                      {installedApp.userID}
                    </td>
                    <td className="text-[14px] font-normal text-[#5F6980]">
                      {installedApp.joinedOn}
                    </td>
                    <td className="text-[14px] font-normal text-[#5F6980] pr-6">
                      {installedApp.group}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-full h-[92px] flex flex-row justify-center items-center gap-3">
          <button
            onClick={() => dispatch(installedAppsPrevPage())}
            className={`${
              installedApps.page == 1
                ? "cursor-default"
                : "hover:bg-[#F2F4F7] rounded"
            }`}
          >
            <img src="/icons/arrow-left.svg" />
          </button>

          <div>
            {installedApps.page}/
            {Math.ceil(installedApps.data.length / installedApps.size)}
          </div>

          <button
            onClick={() => dispatch(installedAppsNextPage())}
            className={`${
              installedApps.page ==
              Math.ceil(installedApps.data.length / installedApps.size)
                ? "cursor-default"
                : "hover:bg-[#F2F4F7] rounded"
            }`}
          >
            <img src="/icons/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
