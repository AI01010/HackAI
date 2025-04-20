'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-[#3e2c1c] font-serif p-8">
        <div className="flex justify-center items-center w-full">
          <Image
            src="/saucy-sales-logo-removebg.png"
            alt="Saucy Sales Logo"
            width={180}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </div>

        <section className="mt-10 max-w-2xl text-center">
          <p className="text-xl">
            Welcome to the Saucy Sales Generator! We specialize in delicious pizzas, pastas, and more.
            Using our predictive model, we forecast pizza sales based on various datasets to help optimize inventory, promotions, and customer satisfaction.
          </p>
        </section>
      </main>
    </>
  );
}
