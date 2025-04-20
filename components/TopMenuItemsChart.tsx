'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  predictionRange: number;
};

export default function TopMenuItemsChart({ predictionRange }: Props) {
  const [allFoods, setAllFoods] = useState([])
  const [topFoods, setTopFoods] = useState([])
  const [foodChart, setFoodChart] = useState("")

  const setTheTopFoods = async() => {
    const response = await axios.post("http://localhost:5000/python/GetTopFoods", {
      year: predictionRange,
      topTaken: 5
    })
    const data = response.data
    if(data.success)
    {
      console.log(data.message)
      setFoodChart(`data:image/png;base64,${data.image}`)
    }
    else
    {
      alert("Error while getting top foods in year " + structuredClone(predictionRange) + "!");
    }
  }

  useEffect(() => {
    setTheTopFoods();
  }, [predictionRange]); 

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={foodChart}></img>
    </div>
  );
}
