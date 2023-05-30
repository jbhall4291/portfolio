import React from "react";

function ContactCard({ label, icon, href }) {
  return (
    <div className="flex h-28 w-28 flex-col justify-center rounded-lg bg-white text-center shadow-xl md:h-36 md:w-36">
      <a href={href} target="_blank" rel="noreferrer">
        <i className={`${icon} text-4xl md:text-7xl`}></i>
        <p className="text-1xl pt-1 md:text-xl ">{label}</p>
      </a>
    </div>
  );
}

export default ContactCard;
