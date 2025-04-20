'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material'

type Props = {
  predictionRange: number;
};

export default function TopMenuItemsChart({ predictionRange }: Props) {
  const [foodChart, setFoodChart] = useState("")
  const [leftView, setLeftView] = useState(0)
  const [rightView, setRightView] = useState(5)
  const [numFoods, setNumFoods] = useState(0)

  const setTheTopFoods = async() => {
    const response = await axios.post("http://localhost:5000/python/GetTopFoods", {
      year: predictionRange,
      leftRange: leftView,
      rightRange: rightView
    })
    const data = response.data
    if(data.success)
    {
      console.log(data.message)
      setFoodChart(`data:image/png;base64,${data.image}`)
      setNumFoods(data.numFoods)
      console.log(data.numFoods)
    }
    else
    {
      alert("Error while getting top foods in year " + structuredClone(predictionRange) + "!");
    }
  }

  useEffect(() => {
    setTheTopFoods();
  }, [predictionRange, leftView, rightView]); 

  const incrementToLeft = async() => {
    setLeftView((prev) => {
      //if subtracting by 5 makes it negative, put it back to 0.
      return (prev - 5 < 0) ? 0 : prev - 5
    })
    setRightView((prev) => {
      return (prev - 5 < 5) ? 5 : prev - 5
    })
  }

  const incrementToRight = async() => {
    setLeftView((prev) => {
      //if adding by 5 makes it out of bounds, put it to the edge
      return (prev + 5 > numFoods - 5) ? numFoods - 5 : prev + 5
    })
    setRightView((prev) => {
      return (prev + 5 > numFoods) ? numFoods : prev + 5
    })
  }


  return (
  <div className="bg-white p-4 rounded-lg shadow">
    <img src={foodChart} className="w-full" />
    <div className="flex justify-between mt-4">
      <Button variant="contained" onClick={incrementToLeft}>Back</Button>
      <Button variant="contained" onClick={incrementToRight}>Next</Button>
    </div>
  </div>
  );
}
