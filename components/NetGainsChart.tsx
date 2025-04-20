'use client';

// Place this at the top of your chart component file(s), or in a client-only ChartSetup.tsx imported by all charts:
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Line } from 'react-chartjs-2';

type Props = {
  predictionRange: number;
};

export default function NetGainsChart({ predictionRange }: Props) {
  const years = [2023, 2024, 2025, predictionRange];
  const data = {
    labels: years,
    datasets: [{
      label: 'Net Gains ($)',
      data: years.map(y =>
        y <= 2025
          ? 500000 + (y - 2022) * 150000
          : 950000 + (y - 2025) * 120000 // Mock prediction
      ),
      borderColor: '#3e2c1c',
      backgroundColor: 'rgba(62,44,28,0.1)',
      tension: 0.3,
      fill: true,
    }]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Net Gains Trend</h3>
      <Line data={data} />
    </div>
  );
}
