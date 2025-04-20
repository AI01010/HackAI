export default function Home() {
  return (
    <main className = "min-h-screen bg-[#f5ecd9] text-[#3e2c1c] font-serif p-8">
      <div className = "flex justify-between items-center">
      <img src = "saucy-sales-logo-removebg.png" alt="Saucy-Sales-Logo" className="h-16 w-auto" />
      </div>

      <section className = "mt-10">
        <p className = "text-xl max-w-2x1">
          Welcome to the Saucy Sales Generator! We specialize in delicious pizzas, pastas, and more.
          Using our predictive model, we forecast pizza sales based on various datasets to help optimize inventory, promotions, and customer satisfaction.
        </p>
      </section>
    </main>
  );
}

/*
'use client'

import Image from "next/image";
import { Button } from '@mui/material';
import axios from 'axios'
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState([])
  
  //function that calls python
  const callPython = async() => {
    const response = await axios.post("http://localhost:5000/python/getResults", {
      userData: userData
    })
    const data = response.data
    if(data.success == true)
    {
      console.log(data.message)
    }
    else
    {
      console.log("VENOMMMM WE GOTAT GET EM GET EMMMM")
    }
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Click the button if you're goated:</p>
      <Button onClick={callPython}>Python generator</Button>
    </div>
  );
}
*/