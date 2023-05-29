function ProjectCard({ label, image, description }) {
  return (
    <div className="flex flex-col justify-center rounded-lg bg-white p-6 text-center shadow-xl lg:w-2/5">
      <p>{label}</p>
      <p>{description}</p>
      <img className="my-2" src={image} />
      <div className="flex items-center justify-center gap-4">

      <a
          href="#projects"
          onClick={(event) => {
            // handleLinkClick(event, "#projects");
          }}
          className="ml-4 inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none md:text-center"
        >
          More Info
          
        </a>

        <a
          href="#contact"
          onClick={(event) => {
            // handleLinkClick(event, "#contact");
          }}
          className="inline-flex rounded border-0 bg-green-500 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none md:text-center"
        >
          Video Demo
        </a>

       
      </div>
    </div>
  );
}

export default ProjectCard;
