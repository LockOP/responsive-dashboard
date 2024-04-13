"use client";
import Metrics from "@/components/metrics";
import PremiumBanner from "@/components/premiumBanner";
import { useSelector } from "react-redux";
import ChartCard from "@/components/chartDard";

export default function Page() {
  const { stateData } = useSelector((state: any) => ({
    stateData: state.dashboardReducer.stateData,
  }));

  return (
    <div className="flex-grow overflow-auto w-full flex flex-col p-8 gap-8">
      <PremiumBanner />
      <Metrics />
      <ChartCard />
    </div>
  );
}

// const a = {obj} instead of const a = obj.a
