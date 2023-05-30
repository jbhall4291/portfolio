import React from "react";

function ExternalLink({ href, label }) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-base text-gray-400 hover:cursor-pointer hover:bg-gray-700 hover:text-white focus:outline-none sm:text-lg md:text-center"
    >
      {label}
    </a>
  );
}

export default ExternalLink;
