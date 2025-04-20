'use client';

import { Line } from 'react-chartjs-2';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function SeasonalTrendsChart() {
  // Mock: Each year has a slightly different trend
  const datasets = [2023, 2024, 2025].map((year, i) => ({
    label: `${year}`,
    data: [120, 140, 160, 190, 210, 240, 230, 220, 200, 180, 160, 140].map(x => x * 1000 + i * 5000),
    borderColor: ['#ef4444', '#3b82f6', '#10b981'][i % 3],
    fill: false,
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Seasonal Sales Pattern</h3>
      <Line data={{ labels: months, datasets }} />
    </div>
  );
}
