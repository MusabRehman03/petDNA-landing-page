import React from "react";
import { LuDog } from "react-icons/lu";
import { IoFish } from "react-icons/io5";
import { GiPumpkin } from "react-icons/gi";
import { GiSteak, GiPotato } from "react-icons/gi";
const PersonalizedNutritionPlan = () => {
  let macroNutrientTarget = [
    {
        id:1,
      heading: "820 Kcal",
      text: "Calories/Day",
    },
    {
        id:2,
      heading: "35%",
      text: "Protein",
    },
    {
        id:3,
      heading: "25%",
      text: "Fat",
    },
    {
        id:4,
      heading: "40%",
      text: "Carbs",
    },
  ];
  let topFood = [
    {
        id:1,
      icon: <IoFish style={{fontSize:'1.2rem'}}/>,
      text: "Salmon",
    },
    {
        id:2,
      icon: <GiPotato style={{fontSize:'1.2rem'}}/>,
      text: "Potato",
    },
    {
        id:3,
      icon: <GiPumpkin style={{fontSize:'1.2rem'}}/>,
      text: "Pumpkin",
    },
    {
        id:4,
      icon: < GiSteak style={{fontSize:'1.2rem'}}/>,
      text: "steak",
    },
    {
        id:5,
        icon: <IoFish style={{fontSize:'1.2rem'}}/>,
        text: "Salmon",
      },
      {
        id:6,
        icon: <GiPotato style={{fontSize:'1.2rem'}}/>,
        text: "Potato",
      },
      {
        id:7,
        icon: <GiPumpkin style={{fontSize:'1.2rem'}}/>,
        text: "Pumpkin",
      },
  ];
  return (
    <div className="w-[430px] md:w-[550px] border-white shadow-xl p-8 text-[#332a24] overflow-y-auto h-[550px]  shadow-[#9A7E6F] rounded-3xl m-5">
      <div className="flex justify-between">
        <h1 className="font-bold ">Personalized Nutrition Plan</h1>
        <LuDog style={{ color: "#9A7E6F", fontSize: "1.5rem" }} />
      </div>
      <p className="my-2 w-[70%] ">
        Tailored meal guidance to match your pet's DNA and lifestyle
      </p>
      <div>
        <h1 className="mt-4 font-semibold">Macronutrient Target:</h1>
        <div className="flex flex-wrap overflow-y-auto space-y-3 space-x-3 mt-2">
          {macroNutrientTarget.map((t) => {
            return (
              <div key={t.id} className="bg-[#d2baad] text-[#332a24] w-24 h-24 rounded-2xl text-sm space-y-1 flex flex-col justify-center items-center">
                <h1 className="font-bold">{t.heading}</h1>
                <p>{t.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="mt-4 font-semibold">Top Food:</h1>
        <div className=" flex flex-wrap  space-x-3 space-y-3 mt-2">
          {topFood.map((t) => {
            return (
              <div key={t.id} className="bg-[#d2baad] text-[#332a24] w-24 h-24 rounded-2xl text-sm space-y-1 flex flex-col justify-center items-center">
                <h1 className="font-bold">{t.icon}</h1>
                <p>{t.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedNutritionPlan;
