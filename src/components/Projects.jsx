import React from "react";
import ProjectCard from "./ProjectCard";
import { fanfinder, newsbuzz, hundredPushups } from "../images";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import CarouselItem from "./CarouselItem";

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-5 lg:px-10">
      <h1
        className="headline-font text-center text-6xl text-highlight sm:text-7xl"
        id="about"
      >
        PROJECTS
      </h1>
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            ripple={false}
            variant="text"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-2/4 -translate-y-2/4"
          >
            <i
              className="fa-solid fa-circle-chevron-left fa-2xl"
              style={{ color: "#fe003a" }}
            />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            ripple={false}
            variant="text"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 top-2/4 -translate-y-2/4"
          >
            <i
              className="fa-solid fa-circle-chevron-right fa-2xl"
              style={{ color: "#fe003a" }}
            />
          </IconButton>
        )}
      >
        <CarouselItem
          title="NEWSBUZZ"
          image={newsbuzz}
          description="a reddit-style social news aggregation web app"
        ></CarouselItem>
        <CarouselItem
          title="FAN FINDER"
          image={fanfinder}
          description="a location-based social networking iOS & Android app"
        ></CarouselItem>
        <CarouselItem
          title="100 PUSHUPS"
          image={hundredPushups}
          description="a fitness tracking and guidance app for web and mobile"
        ></CarouselItem>
      </Carousel>

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
