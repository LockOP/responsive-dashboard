"use client";
import { AnyNaptrRecord } from "dns";
import { useSelector } from "react-redux";

export default function Page() {
  const { stateData } = useSelector((state: any) => ({
    stateData: state.dashboardReducer.stateData,
  })); // const a = {obj} instead of const a = obj.a
  return <div className="">{stateData}</div>;
}
