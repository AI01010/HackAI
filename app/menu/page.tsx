
'use client'

import Image from "next/image";
import { Button } from '@mui/material';
import axios from 'axios'
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState([])
  const [graph, setGraph] = useState("")
  
  //function that calls python
  const callPython = async() => {
    const response = await axios.post("http://localhost:5000/python/getResults", {
      userData: userData
    })
    const data = response.data
    if(data.success == true)
    {
      console.log(data.message)
      setGraph(`data:image/png;base64,${data.image}`)
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
      <img src={graph}></img>
    </div>
  );
}
