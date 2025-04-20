'use client';

import { Line } from 'react-chartjs-2';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type Props = {
  predictionRange: number;
};

export default function SeasonalTrendsChart({ predictionRange }: Props) {
  // Always show actual data for 2023-2025
  const baseYears = [2023, 2024, 2025];
  // If predictionRange is greater than 2025, add it as the forecast year
  const years = predictionRange > 2025 ? [...baseYears, predictionRange] : baseYears;

  const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];
  const baseData = [120, 140, 160, 190, 210, 240, 230, 220, 200, 180, 160, 140];

  const datasets = years.map((year, i) => ({
    label: `${year}`,
    data: baseData.map(x =>
      year <= 2025
        ? x * 1000 + (year - 2023) * 5000
        : x * 1000 + (predictionRange - 2025) * 7000 // forecast logic for predicted year
    ),
    borderColor: colors[i % colors.length],
    fill: false,
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Seasonal Sales Pattern</h3>
      <Line data={{ labels: months, datasets }} />
    </div>
  );
}
