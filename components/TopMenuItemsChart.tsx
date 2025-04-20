'use client';

import { Bar } from 'react-chartjs-2';

const items = ['BBQ Chicken','Pepperoni','Margherita','Hawaiian','Meatlovers','Veggie','Supreme','Buffalo','Four Cheese','Pesto'];

export default function TopMenuItemsChart() {
  // Mock: Each year has slightly different sales
  const datasets = [2023, 2024, 2025].map((year, i) => ({
    label: `${year}`,
    data: [1200, 1100, 980, 850, 800, 750, 700, 650, 600, 550].map(x => x + i * 30),
    backgroundColor: ['#10b981', '#ef4444', '#3b82f6'][i % 3],
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
