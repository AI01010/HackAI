'use client';

import Navbar from "@/components/Navbar";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
});

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center items-start p-8 pt-10">
        <div className="bg-white/90 bg-opacity-90 rounded-lg shadow-lg max-w-7xl w-full p-8 text-[#3e2c1c] space-y-8">
          <h1 className={`${rye.className} text-4xl font-bold mb-6 text-[#8b0000]`}>
            About Saucy Sales
          </h1>

          {/* About the Project */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
            <p className={`${rye.className} text-lg`}>
              Saucy Sales was born from the realization that many pizza shops struggle with overproduction and food waste while missing opportunities to optimize inventory and staffing. Inspired by industry reports and real challenges—like $1.3B in wasted food annually and inaccurate demand forecasts—this project was designed to provide actionable insights and help pizza operators turn data into better decision making.
            </p>
          </section>

          {/* What it does */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">What it does</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>
                <strong>Forecasting:</strong> Uses historical sales data and AI-driven models to predict future sales trends.
              </li>
              <li>
                <strong>Interactive Dashboards:</strong> Visualizes trends via responsive charts, helping users understand peak hours, seasonal trends, and menu performance.
              </li>
              <li>
                <strong>Menu Simulation:</strong> Allows operators to test changes on menu items and see their potential impact on sales and inventory management.
              </li>
            </ul>
          </section>

          {/* How We Built It */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How We Built It</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>
                <strong>Frontend:</strong> Developed a modern, responsive dashboard using Next.js 14, React, and TypeScript.
              </li>
              <li>
                <strong>Visualization:</strong> Leveraged Chart.js for dynamic and interactive data visualizations.
              </li>
              <li>
                <strong>Backend & Data:</strong> Integrated data from CSV files and used Python (with libraries like Prophet, pandas, and CatBoost) for robust forecasting.
              </li>
              <li>
                <strong>APIs & Integration:</strong> Incorporated REST API endpoints (via Axios) to connect the forecasting models with the frontend.
              </li>
            </ul>
          </section>

          {/* Challenges We Ran Into */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Challenges We Ran Into</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>
                <strong>Data Quality:</strong> Cleaning and merging datasets from various sources posed significant challenges.
              </li>
              <li>
                <strong>Forecast Accuracy:</strong> Tuning the AI models to account for seasonal dips and spikes required careful experimentation and validation.
              </li>
              <li>
                <strong>Responsive Design:</strong> Ensuring that interactive charts render correctly on all devices while maintaining performance.
              </li>
            </ul>
          </section>

          {/* Accomplishments */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Accomplishments That We're Proud Of</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Achieved forecasting accuracy that provides actionable insights for inventory and staffing.</li>
              <li>Reduced predicted food waste by optimizing menu offerings and stock levels.</li>
              <li>Built an engaging and intuitive interface that empowers pizza operators to make data-driven decisions.</li>
            </ul>
          </section>

          {/* What We Learned */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">What We Learned</h2>
            <p className={`${rye.className} text-lg`}>
              We learned the importance of robust data cleaning techniques before building forecasting models. Merging front-end interactivity with back-end AI and data science can unlock powerful insights, and responsive design coupled with user-centric features is key for dashboard success.
            </p>
          </section>

          {/* What's Next */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">What's Next for Saucy Sales</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Expand the model to support multiple locations and more extensive datasets.</li>
              <li>Integrate real-time data updates and alerts for inventory and staffing needs.</li>
              <li>Enhance the AI model with additional factors (e.g., weather data, local events) for even better predictions.</li>
            </ul>
          </section>

          {/* Presentation Link */}
          <section className="mb-6">
            <a
              href="https://docs.google.com/presentation/d/1a2sT6V6ufueUKKUNQghYqGCPfl2wNnnyDy5Swdkosx8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`${rye.className} text-xl font-semibold text-[#8b0000] hover:underline`}
            >
              View Presentation
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
