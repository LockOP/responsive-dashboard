"use client";
import Metrics from "@/components/metrics";
import PremiumBanner from "@/components/premiumBanner";
import { useSelector } from "react-redux";
import ChartCard from "@/components/chartDard";
import InstalledApps from "@/components/installedApps";

export default function Page() {
  const { stateData } = useSelector((state: any) => ({
    stateData: state.dashboardReducer.stateData,
  }));

  return (
    <div className="flex-grow overflow-auto w-full flex flex-col p-8 gap-8 box-border">
      <PremiumBanner />
      <Metrics />
      {/* <ChartCard /> */}
      <InstalledApps />
    </div>
  );
}

// const a = {obj} instead of const a = obj.a
