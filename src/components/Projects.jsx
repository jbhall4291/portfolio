import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { oneHundredPressUpsCard, newsbuzzCard, fanfinderCard } from "../images";
import { Typography } from "@material-tailwind/react";
import VideoModal from "./VideoModal";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [videoToPlay, setVideoToPlay] = useState("");

  return (
    <section
      id="projects"
      className="mx-auto flex flex-col px-3 py-5 sm:px-5 sm:py-10 "
    >
      <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoToPlay={videoToPlay}
      />
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

      <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-x-10 sm:flex-row sm:gap-y-4  ">
        <ProjectCard
          setShowModal={setShowModal}
          setVideoToPlay={setVideoToPlay}
          title="NEWSBUZZ"
          image={newsbuzzCard}
          description="a reddit-style social news aggregation web app, built with React."
          youtubeURL="https://youtu.be/CnuN6rD8j8w"
          learnMorePage="/projects/newsbuzz"
        />

        <ProjectCard
          setShowModal={setShowModal}
          setVideoToPlay={setVideoToPlay}
          title="FAN FINDER"
          image={fanfinderCard}
          description="a location-based social networking app for iOS & Android, built with React Native."
          youtubeURL="https://www.youtube.com/watch?v=kQ7weiOZzHM"
          learnMorePage="/projects/fanfinder"
        />

        <ProjectCard
          setShowModal={setShowModal}
          setVideoToPlay={setVideoToPlay}
          title="HUNDRED PRESS-UPS"
          image={oneHundredPressUpsCard}
          description="a fitness guidance & tracking app for web & mobile, currently under development."
          learnMorePage="/projects/onehundredpressups"
        />
      </div>
    </section>
  );
}

export default Projects;
