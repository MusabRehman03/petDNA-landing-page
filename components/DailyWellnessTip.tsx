import React from "react";
import { FaRegLaughBeam, FaLeaf } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import {
  GiKangaroo,
  GiBrain,
  GiToothbrush,
  GiMeditation,
  GiRunningShoe,
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
    {
        id:4, 
      icon: <GiMeditation style={{ fontSize: "1.4rem" }}/>,
      heading: "Mindfulness",
      text: "Take 5 minutes to breathe deeply and center yourself—it helps reduce stress.",
    },
    {
        id:5, 
      icon: <MdOutlineWaterDrop style={{ fontSize: "1.4rem" }}/>,
      heading: "Hydration",
      text: "Drink a glass of water every hour to stay refreshed and mentally sharp.",
    },
    {
        id:6, 
      icon: <FaRegLaughBeam style={{ fontSize: "1.4rem",color:'' }}/>,
      heading: "Laugh",
      text: "Watch something funny or talk to a friend—laughter boosts your mood and energy.",
    },
    {
        id:7, 
      icon: <GiRunningShoe style={{ fontSize: "1.4rem" }}/>,
      heading: "Move Around",
      text: "Do 10 squats or stretch every hour—especially if sitting all day.",
    },
    {
        id:8,

      icon: <BsBook style={{ fontSize: "1.4rem" }}/>,
      heading: "Learn",
      text: "Read 5 pages of a book or blog to fuel your brain and inspire creativity.",
    },
    {
        id:9, 
      icon: <FaLeaf style={{ fontSize: "1.4rem" }}/>,
      heading: "Nature Break",
      text: "Spend a few minutes outside—sunlight and fresh air improve focus and mood.",
    },
    {
        id:10,

      icon: <RiTeamLine style={{ fontSize: "1.4rem" }} />,
      heading: "Connect",
      text: "Check in with a colleague or friend—a quick chat can lift energy and build bonds.",
    },
  ];
  return (
    <>
      <div className="w-[430px] md:w-[550px] text-[#332a24] border-white shadow-xl py-8 px-10 overflow-y-auto h-[550px] shadow-[#9A7E6F] rounded-3xl m-5">
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
              <button className="px-4 text-[#332a24] rounded-4xl mt-2 bg-[#e1d0c6]">
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
