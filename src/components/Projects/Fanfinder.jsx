import React from "react";
import { fanfinder } from "../../images/";
import SkillsCardSmall from "../../components/Projects/SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { Link } from "react-router-dom";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Fanfinder() {
  return (
    <div className="container mx-auto px-5 pb-5 pt-2 ">
      {/* <Link to="/projects" className="inline-block text-red-500 pb-10">
        <Button
          size="lg"
          variant="text"
          className="flex items-center gap-2 text-highlight "
        >
          <i className="fas fa-arrow-left-long fa-xl" />
          ALL PROJECTS
        </Button>
      </Link> */}

      <div className="flex flex-col items-center lg:flex-row  ">
        <div className="order-2 mb-6 flex max-w-full flex-col items-center  text-center md:mb-8 lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:pb-12   lg:pr-0 lg:text-left">
          <h1 className="headline-font text-center text-5xl text-highlight md:text-7xl">
            FAN FINDER
          </h1>
          <h2 className="text-lg font-bold">
            a location-based social networking mobile app, built with:
          </h2>
          <div className="flex max-w-lg flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
            <SkillsCardSmall
              label="JavaScript"
              icon="devicon-javascript-plain colored"
            />
            <SkillsCardSmall
              label="React Native"
              icon="devicon-react-original colored"
            />
            <SkillsCardSmall
              label="node.js"
              icon="devicon-nodejs-plain colored"
            />
            <SkillsCardSmall
              label="MongoDB"
              icon="devicon-mongodb-plain colored"
            />
            <SkillsCardSmall
              label="express.js"
              icon="devicon-express-original colored"
            />
            <SkillsCardSmall label="Jest" icon="devicon-jest-plain colored" />
          </div>
        </div>
        <div className="order-2 w-full  md:w-full lg:order-2 lg:max-w-2xl">
          <img
            className="rounded object-cover object-center "
            alt="fanfinder screenshot"
            src={fanfinder}
          />
        </div>
      </div>

      <Typography
        color="blue-gray"
        className="w-max-w mx-auto justify-center px-5 pb-6 text-center sm:w-4/6 lg:text-lg"
      >
        Fan Finder is a mobile app built in React Native and allows music fans
        to discover upcoming gigs in their area, and connect with other music
        fans via gig-specific forums or a chat facility. This project was built
        by a team of 4 using the MERN stack as part of the final Northcoders
        Bootcamp where we had to pitch, plan, build and deploy a project, all in
        just under two weeks!
      </Typography>

      <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center  sm:flex-row  sm:gap-10">
        <ExternalLink
          label="VIDEO DEMO"
          href="https://www.youtube.com/watch?v=kQ7weiOZzHM"
          type="video"
        />
        <ExternalLink
          label="TEAM SHOWCASE"
          href="https://northcoders.com/projects/apr-2023/fanfinder"
          type="showcase"
        />

        <ExternalLink
          label="LIVE APP"
          href="https://expo.dev/@jbhall4291/fan-finder?serviceType=classic&distribution=expo-go"
          type="liveApp"
        />
        <ExternalLink
          label="GITHUB REPO"
          href="https://github.com/jbhall4291/fan-finder"
          type="repo"
        />
      </div>
    </div>
  );
}

export default Fanfinder;
