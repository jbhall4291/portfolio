import React from "react";

function SkillsCardSmall({ label, icon }) {
  return (
    <div className="flex h-20 w-20 flex-col justify-center rounded-lg bg-white text-center shadow-xl md:h-28 md:w-28">
      <i className={`${icon} text-2xl md:text-5xl `}></i>
      <p className="pt-1 text-sm md:text-lg ">{label}</p>
    </div>
  );
}

export default SkillsCardSmall;
