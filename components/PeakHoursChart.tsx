'use client';

import { Bar } from 'react-chartjs-2';

type Props = {
  predictionRange: number;
};

export default function PeakHoursChart({ predictionRange }: Props) {
  

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Peak Order Hours</h3>
    </div>
  );
}


