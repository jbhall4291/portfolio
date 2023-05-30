import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, image, description, page }) {
  return (
    <div className="flex flex-col justify-center rounded-lg bg-white p-6 text-center shadow-xl lg:w-2/5">
      <p>{title}</p>
      <p>{description}</p>
      <img className="my-2" src={image} alt="screenshot of {title}" />
      <div className="flex items-center justify-center gap-4">
        <Link
          className="ml-4 inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none md:text-center"
          to={page}
        >
          More Info
        </Link>

        <Link
          className="inline-flex rounded border-0 bg-green-500 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none md:text-center"
          to="/project-details#test"
        >
          Video Demo
          {/* do a modal with an embedded video */}
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
