'use client'
import DailyWellnessTip from "@/components/DailyWellnessTip";
import LunaPersonalizedPlan from "@/components/LunaPersonalizedPlan";
import PersonalizedNutritionPlan from "@/components/PersonalizedNutritionPlan";
import { useSideBarContext } from "@/context/SideBarContext";


export default function Home() {
  const {isOpen} =  useSideBarContext()
  return (

      <div className={`${isOpen?'md:ml-80':'-ml-0'}  space-y-15 `}>
        <div className="flex flex-wrap items-center  justify-center mt-20">
          <DailyWellnessTip />
          <PersonalizedNutritionPlan />
        </div>
        <div className="flex justify-center">
          <LunaPersonalizedPlan />
        </div>
      </div>

  );
}
