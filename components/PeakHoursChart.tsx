'use client';

import { Bar } from 'react-chartjs-2';

const times = ['8AM','10AM','12PM','2PM','4PM','6PM','8PM'];

export default function PeakHoursChart() {
  // Mock: Each year has a slightly different peak
  const datasets = [2023, 2024, 2025].map((year, i) => ({
    label: `${year}`,
    data: [50, 180, 420, 300, 280, 450, 380].map(x => x + i * 15),
    backgroundColor: ['#f59e0b', '#6366f1', '#22d3ee'][i % 3],
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Peak Order Hours</h3>
      <Bar data={{ labels: times, datasets }} />
    </div>
  );
}
