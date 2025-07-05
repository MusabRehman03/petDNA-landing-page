import React from "react";

const LunaPersonalizedPlan = () => {
  return (
    <div className="w-[1150px] overflow-x-auto border-white text-[#332a24] shadow-xl p-8  h-[470px] shadow-[#9A7E6F] rounded-3xl mx-5 mb-5">
      <div className="flex justify-between">
        <h1 className="font-bold ">Luna&apos;s Personalized Suppliment Plan</h1>
      </div>
      <p className="my-2 w-[70%] ">
        This plan is based on your pet&apos;s DNA profile
      </p>
      <div className="w-[1070px] overflow-x-auto">
      <table>
        <thead className="">
            <tr className="border-b  border-gray-500">
                <td className="w-40 overflow-x-auto font-bold py-2">Category</td>
                <td className="w-60 overflow-x-auto font-bold">Suppliment</td>
                <td className="w-40 overflow-x-auto font-bold">Form</td>
                <td className="w-40 overflow-x-auto font-bold">Frequency</td>
                <td className="w-88 overflow-x-auto font-bold">Purpose</td>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-500 mb-10">
                <td className="w-40 font-light py-6 border-gray-500">Joints</td>
                <td className="w-60 font-light">Glucosamine + Chondroitin</td>
                <td className="w-40 font-light">Chew</td>
                <td className="w-40 font-light">Daily</td>
                <td className="w-72 font-light">Supports hip & joint health</td>
            </tr>
            <tr className="border-b border-gray-500 mb-10">
                <td className="w-40 font-light py-6 border-gray-500">Coat & Skin</td>
                <td className="w-60 font-light">Omega 3(Salmon Oil)</td>
                <td className="w-40 font-light">Liquid Oil</td>
                <td className="w-40 font-light">Daily</td>
                <td className="w-72 font-light">Promotes shiny coat, reduces itching</td>
            </tr>
            <tr className="border-b border-gray-500 mb-10">
                <td className="w-40  font-light py-6 border-gray-500">Immunity</td>
                <td className="w-60 font-light">Probiotic Blend</td>
                <td className="w-40 font-light">Powder</td>
                <td className="w-40 font-light">3x per week</td>
                <td className="w-72 font-light">Improves digestion, immune function</td>
            </tr>
            <tr className="border-b border-gray-500 mb-10">
                <td className="w-40 font-light py-6 border-gray-500">Cognition</td>
                <td className="w-60 font-light">DHA(Algae-Based)</td>
                <td className="w-40 font-light">Capsule</td>
                <td className="w-40 font-light">2x per week</td>
                <td className="w-72 font-light">Brain and nervous system support</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default LunaPersonalizedPlan;
