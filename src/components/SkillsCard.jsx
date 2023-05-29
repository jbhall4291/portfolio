function SkillCard({ label, icon }) {
  return (
    <div className="flex h-28 w-28 flex-col justify-center rounded-lg bg-white  text-center shadow-xl md:h-36 md:w-36">
      <i className={`${icon} text-4xl md:text-7xl`}></i>
      <p className="text-1xl pt-1 md:text-xl ">{label}</p>
    </div>
  );
}

export default SkillCard;
