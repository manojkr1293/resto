'use client'
import AddFoodItem from "@/app/_components/AddFoodItem";
import Header from "@/app/_components/header";
import ResturentFoodList from "@/app/_components/ResturentFoodList";
import { useState } from "react";

const Fooditems = () =>{
  const [fooditem,setFooditem] = useState(false);
  return (
    <>
    <Header/>
    <div className="mt-8 container mx-auto">
      <div className="flex flex-row gap-4 justify-start">
        <button onClick={()=>setFooditem(true)} className="text-white bg-purple-600 p-3 font-semibold shadow-sm rounded-md">Add Food Item</button>
        <button onClick={()=>setFooditem(false)} className="text-white bg-purple-600 p-3 font-semibold shadow-sm rounded-md">Food List</button>
      </div>
    </div>
    <div className="mt-28">
    {fooditem ? <AddFoodItem setFooditem= {setFooditem}/> : <ResturentFoodList/> }
    </div>
  </>
  )
}

export default Fooditems;