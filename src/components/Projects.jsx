import React from "react";
import ProjectCard from "./ProjectCard";
import { fanfinder, newsbuzz, hundredPushups } from "../images";

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-5 lg:px-10">
    

      <h1 className="headline-font text-center text-6xl sm:text-7xl text-highlight" id="about">
        PROJECTS
      </h1>


      <div className="flex w-full flex-col flex-wrap justify-center gap-5 md:m-auto md:w-5/6 md:flex-row md:gap-x-20">
        <ProjectCard
          title="NEWSBUZZ"
          description="a reddit-style social news aggregation web app"
          image={newsbuzz}
          page="/projects/newsbuzz"
        />
        <ProjectCard
          title="FAN FINDER"
          description="a location-based social networking mobile app"
          image={fanfinder}
          page="/projects/fanfinder"
        />
        <ProjectCard
          title="100 PUSHUPS"
          description="a fitness guidance & tracking app for web & mobile"
          // "A fitness tracking and guidance app to motivate users in achieving 100 consecutive pushups."
          image={hundredPushups}
          page="/projects/hundredpushups"
        />
      </div>
    </section>
  );
}

export default Projects;
