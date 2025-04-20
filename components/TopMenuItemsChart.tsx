'use client';

import { Bar } from 'react-chartjs-2';

const items = [
  'BBQ Chicken',
  'Pepperoni',
  'Margherita',
  'Hawaiian',
  'Meatlovers',
  'Veggie',
  'Supreme',
  'Buffalo',
  'Four Cheese',
  'Pesto'
];

type Props = {
  predictionRange: number;
};

export default function TopMenuItemsChart({ predictionRange }: Props) {
  const baseYears = [2023, 2024, 2025];
  const years = predictionRange > 2025 ? [...baseYears, predictionRange] : baseYears;

  const baseData = [1200, 1100, 980, 850, 800, 750, 700, 650, 600, 550];
  const colors = ['#10b981', '#ef4444', '#3b82f6', '#f59e0b'];

  const datasets = years.map((year, i) => ({
    label: `${year}`,
    data: baseData.map(x => x + i * 30),
    backgroundColor: colors[i % colors.length],
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Top Selling Menu Items</h3>
      <Bar 
        data={{ labels: items, datasets }}
        options={{ indexAxis: 'y' as const }}
      />
    </div>
  );
}
