import React from "react";
import ProjectCard from "./ProjectCard";
import {
  fanfinder,
  newsbuzz,
  oneHundredPressUpsCard,
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
    <section
      id="projects"
      className="mx-auto flex flex-col px-3 py-5 sm:px-5 sm:py-10 "
    >
      <Typography
        color="blue-gray"
        className="w-max-w mx-auto justify-center px-5 text-center sm:w-4/6 lg:text-lg "
      >
        These projects are the culmination of my journey on the amazing{" "}
        <a className="text-highlight" href="https://northcoders.com/">
          Northcoders bootcamp
        </a>
        , and continue to be developed, polished & refactored as I continue to
        learn.
      </Typography>

      <div className="mx-auto flex flex-col flex-wrap items-center justify-center  sm:flex-row sm:gap-4  sm:px-5">
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
          title="100 PRESS-UPS"
          image={oneHundredPressUpsCard}
          description="a fitness guidance & tracking app for web & mobile, currently under development."
          learnMorePage="/projects/onehundredpressups"
        />
      </div>
    </section>
  );
}

export default Projects;
