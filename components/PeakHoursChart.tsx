'use client';

import { Bar } from 'react-chartjs-2';

type Props = {
  predictionRange: number;
};

export default function PeakHoursChart({ predictionRange }: Props) {
  const startYear = 2023;
  const years: number[] = [];
  for (let y = startYear; y <= predictionRange; y++) {
    years.push(y);
  }

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Peak Orders',
        data: years.map((year) =>
          year <= 2025
            ? 100 + (year - startYear) * 20
            : 140 + (year - 2025) * 30
        ),
        backgroundColor: '#6366f1',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Peak Order Hours</h3>
      <Bar data={data} />
    </div>
  );
}
