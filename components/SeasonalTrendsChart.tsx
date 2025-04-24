'use client';

// import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  predictionRange: number;
};

export default function SeasonalTrendsChart({ predictionRange }: Props) {
  // Always show actual data for 2023-2025
    const [monthChart, setMonthChart] = useState("")

    const setMonthData = async() => {
      const response = await axios.post("http://localhost:5000/python/GetMonthlySales", {
        year: predictionRange,
      })
      const data = response.data
      if(data.success)
      {
        console.log(data.message)
        setMonthChart(`data:image/png;base64,${data.image}`)
      }
      else
      {
        alert("Error while getting top foods in year " + structuredClone(predictionRange) + "!");
      }
    }
  
    useEffect(() => {
      setMonthData();
    }, [predictionRange]); 

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Monthly Sales Pattern</h3>
      <img src={monthChart} className="w-full" />
    </div>
  );
}
