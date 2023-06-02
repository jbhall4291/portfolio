import React from "react";
import ProjectCard from "./ProjectCard";
import { fanfinder, newsbuzz, hundredPushups, newsbuzzCard, fanfinderCard } from "../images";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-5 lg:px-10">
      <h1
        className="headline-font text-center text-6xl text-highlight sm:text-7xl"
        id="about"
      >
        PROJECTS
      </h1>

   
      <div className="flex justify-center gap-4 ">
        <ProjectCard
          title="NEWSBUZZ"
          image={newsbuzzCard}
          description="a reddit-style social news aggregation web app, built with React."
          youtubeURL="https://youtu.be/CnuN6rD8j8w"
          learnMorePage="/projects/newsbuzz"
        />

        <ProjectCard
          title="FAN FINDER"
          image={fanfinderCard}
          description="a location-based social networking app for iOS & Android, built with React Native."
          youtubeURL="https://www.youtube.com/watch?v=kQ7weiOZzHM"
          learnMorePage="/projects/fanfinder"
        />

        <ProjectCard
          title="100 PUSHUPS"
          image={hundredPushups}
          description="a fitness guidance & tracking app for web & mobile, currently under development."
          youtubeURL="https://www.youtube.com/watch?v=kQ7weiOZzHM"
          learnMorePage="/projects/hundredpushups"
        />
      </div>

      {/* 
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
          // "a fitness tracking and guidance app for web and mobile"
          image={hundredPushups}
          page="/projects/hundredpushups"
        />
      </div> */}
    </section>
  );
}

export default Projects;
