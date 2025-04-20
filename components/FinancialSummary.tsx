'use client';

type Props = {
  predictionRange: number;
};

export default function FinancialSummary({ predictionRange }: Props) {
  return (
    <div className="mt-8 p-6 bg-[#f5ecd9] rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{predictionRange} Financial Summary & Recommendations</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="font-semibold">Key Metrics:</p>
          <ul className="list-disc pl-6">
            <li>Projected {predictionRange} Revenue: ${(2.4 + (predictionRange - 2025) * 0.2).toFixed(1)}M</li>
            <li>Food Cost Ratio: 28.7% (Industry avg: 32%)</li>
            <li>Peak Hour Utilization: 78% capacity</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Action Items:</p>
          <ul className="list-disc pl-6">
            <li>Expand BBQ Chicken production capacity by 25%</li>
            <li>Add 2 evening staff members for 6-8PM shift</li>
            <li>Test gluten-free crust option in Q3</li>
          </ul>
        </div>
      </div>
      <p className="italic text-gray-600">
        "Forecast suggests 12% YOY growth through {predictionRange} with current menu mix. 
        Consider adding 1 seasonal specialty pizza quarterly to maintain growth momentum."
      </p>
    </div>
  );
}
