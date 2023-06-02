import React from "react";
import ProjectCard from "./ProjectCard";
import {
  fanfinder,
  newsbuzz,
  oneHundredPushupsCard,
  newsbuzzCard,
  fanfinderCard,
} from "../images";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-5">
      <Typography
        color="blue-gray"
        className="w-4/6 justify-center text-center lg:text-lg "
      >
        These projects are the culmination of my journey on the amazing{" "}
        <a className="text-highlight" href="https://northcoders.com/">
          Northcoders bootcamp
        </a>
        , and continue to be developed, polished and refactored as I continue to
        learn.
      </Typography>

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
          image={oneHundredPushupsCard}
          description="a fitness guidance & tracking app for web & mobile, currently under development."
          learnMorePage="/projects/hundredpushups"
        />
      </div>

      {/* <Typography
        color="blue-gray"
        className=" mt-5 text-center lg:mt-10 lg:text-lg"
      >
        These projects are the culmination of my incredible journey on the{" "}
        <a className="text-highlight" href="https://northcoders.com/">
          Northcoders bootcamp.
        </a>
      </Typography> */}
    </section>
  );
}

export default Projects;
