'use client';

import Navbar from "@/components/Navbar";
import NetGainsChart from "@/components/NetGainsChart";
import SeasonalTrendsChart from "@/components/SeasonalTrendsChart";
import PeakHoursChart from "@/components/PeakHoursChart";
import TopMenuItemsChart from "@/components/TopMenuItemsChart";
import FinancialSummary from "@/components/FinancialSummary";
import Image from "next/image";
import { useState } from "react";

const predictionOptions = [2026, 2027, 2028, 2029, 2030];

export default function Home() {
  const [predictionRange, setPredictionRange] = useState<number>(2026);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center items-start p-8 pt-10">
        <div className="bg-white/90 bg-opacity-90 rounded-lg shadow-lg max-w-7xl w-full p-8 space-y-8">
          {/* Logo and Prediction Dropdown */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/saucy-sales-logo-removebg.png"
              alt="Saucy Sales Logo"
              width={280}
              height={180}
              className="h-33 w-35 mb-1"
              priority
            />
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="prediction-range" className="font-semibold text-[#3e2c1c]">
                Select prediction year:
              </label>
              <select
                id="prediction-range"
                value={predictionRange}
                onChange={e => setPredictionRange(Number(e.target.value))}
                className="border border-[#3e2c1c] rounded px-3 py-1"
              >
                {predictionOptions.map(year => (
                  <option key={year} value={year}>{year} Forecast</option>
                ))}
              </select>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <NetGainsChart predictionRange={predictionRange} /> */}
            <SeasonalTrendsChart predictionRange={predictionRange} />
            {/* <PeakHoursChart predictionRange={predictionRange} /> */}
            <TopMenuItemsChart predictionRange={predictionRange}/>
          </div>

          {/* Financial Summary */}
          <FinancialSummary predictionRange={predictionRange} />
        </div>
      </main>
    </>
  );
}
