import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function ExternalLink({ href, label }) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-base text-gray-400 hover:cursor-pointer hover:bg-gray-700 hover:text-white focus:outline-none sm:text-lg md:text-center"
    >
      {label}

      <FontAwesomeIcon icon={faCircle} fade size="2xs" style={{ color: "#ff0000" }} />
    </a>
  );
}

export default ExternalLink;
