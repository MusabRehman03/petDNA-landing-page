import React from "react";

import {
  GiKangaroo,
  GiBrain,
  GiToothbrush,
} from "react-icons/gi";

const DailyWellnessTip = () => {
  const tips = [
    {
    id:1,  
      icon: <GiKangaroo style={{ fontSize: "1.4rem" }} />,
      heading: "Exercise",
      text: "Take a 20-minute walk this evening—great for energy balance and bonding.",
    },
    {
        id:2, 
      icon: <GiToothbrush style={{ color: "gray", fontSize: "1.4rem" }} />,
      heading: "Brushing Bonus",
      text: "A quick daily brush helps reduce shedding and distribute natural oils.",
    },
    {
        id:3, 
      icon: <GiBrain style={{ color: "red", fontSize: "1.4rem" }} />,
      heading: "10-Min Puzzle Time",
      text: "Use a treat puzzle toy for 10 minutes to stimulate problem solving and focus.",
    },
  ];
  return (
    <>
      <div className="w-[430px] md:w-[550px] text-[#332a24] border-white py-8 px-10 overflow-y-auto md:h-[600px] h-[700px] shadow shadow-[#9A7E6F] rounded-2xl m-5">
        <h1 className="font-bold">Daily Wellness Tips</h1>
        <p className="my-2 w-[80%]">
          Quick, science-backed actions to improve your pet&apos;s health today
        </p>
        {tips.map((tip) => {
          return (
            <div key={tip.id} className="border-b border-b-gray-300  py-4 ">
              <div className="flex mt-2 space-x-2 ">
                <div>{tip.icon}</div>
                <div>{tip.heading}</div>
              </div>
              <div>
                <p className="font-bold">{tip.text}</p>
              </div>
              <button className="px-4 py-0.5 text-[#332a24] rounded-4xl mt-2 hover:bg-[#9A7E6F] cursor-pointer bg-[#e1d0c6]">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DailyWellnessTip;
