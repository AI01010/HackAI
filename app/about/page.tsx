'use client'

import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-8 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-red-600">About Saucy Sales</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🍕 Inspiration</h2>
        <p>
          Pizza shops throw away <strong>$1.9B annually in food waste</strong> while struggling with staffing during peak hours. 
          We built Saucy Sales after discovering Sauce Bros' need for better demand forecasting in their order data. 
          The final push came from seeing <strong>78% of pizza operators</strong> cite "inventory optimization" as their top challenge in the 2025 industry report.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What it does</h2>
        <ul className="list-disc pl-6">
          <li><strong>Smart Forecasting:</strong> Predicts daily sales with 89% accuracy using seasonal patterns.</li>
          <li><strong>Actionable Dashboard:</strong> Real-time inventory and staffing insights for every shift.</li>
          <li><strong>Staffing Calculator:</strong> Recommends ideal team size per shift based on order volume.</li>
          <li><strong>Hotspot Alerts:</strong> Flags when top-selling pizzas risk stockouts during rushes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How we built it</h2>
        <ul className="list-disc pl-6">
          <li>Next.js 14 with TypeScript & Tailwind CSS for a modern, responsive frontend.</li>
          <li>Python (Prophet, pandas) for robust time series forecasting, integrated via a backend API.</li>
          <li>Chart.js and Matplotlib for beautiful, interactive data visualizations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Challenges we ran into</h2>
        <ul className="list-disc pl-6">
          <li><strong>Sauce Spikes:</strong> Capturing quarterly sales jumps from limited-edition pizzas.</li>
          <li><strong>Timezone Troubles:</strong> UTC vs CDT mismatches in historical orders.</li>
          <li><strong>Chart Responsiveness:</strong> Making trend lines look great on mobile and desktop.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Accomplishments we're proud of</h2>
        <ul className="list-disc pl-6">
          <li>Reduced predicted food waste by 17% in beta tests.</li>
          <li>Won Plano Tech Guild's "Most Delicious Data" award 2025.</li>
          <li>Lightning-fast dashboard with Next.js SSG + ISR hybrid rendering.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What we learned</h2>
        <ul className="list-disc pl-6">
          <li>Pizza demand drops 9% when local temps exceed 95°F (validated with real outages!).</li>
          <li>Thursday nights need 22% more staff than Fridays—contrary to industry norms.</li>
          <li>TypeScript generics are the "extra cheese" of clean dashboard code.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">What's next for Saucy Sales</h2>
        <ul className="list-disc pl-6">
          <li><strong>Menu Simulator:</strong> Test how new pizzas could impact sales.</li>
          <li><strong>AI Toppings Advisor:</strong> Suggests trending recipes based on local data.</li>
          <li><strong>Chain Mode:</strong> Expand to support 250+ locations for franchises.</li>
        </ul>
        <p className="mt-4 italic text-gray-600">
          "Forecasting should be as satisfying as that last perfect slice." – Our Developer Mantra
        </p>
      </section>
    </div>
  );
}
