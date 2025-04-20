'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center items-start pt-10 px-8">
        <div
          className="rounded-lg shadow-lg max-w-7xl w-full p-10 flex flex-col items-center gap-4
                     bg-[url('/pizza.png')] bg-cover bg-center bg-white/75 bg-blend-overlay"
        >
          <Image
            src="/saucy-sales-logo-removebg.png"
            alt="Saucy Sales Logo"
            width={320}
            height={220}
            className="mb-2"
            priority
          />
          <div className="text-center">
            <p className={`${rye.className} text-xl text-[#3e2c1c] font-medium`}>
              Welcome to Saucy Sales!<br />
              We specialize in delicious pizzas, pastas, and more. Our predictive model forecasts pizza sales to help optimize inventory, promotions, and customer satisfaction.
            </p>
          </div>
          <Link href="/analytics">
            <button className={`${rye.className} text-2xl font-bold text-white bg-[#3e2c1c] hover:bg-[#8b0000] transition-colors duration-300 px-6 py-3 rounded`}>
              View Analytics
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
