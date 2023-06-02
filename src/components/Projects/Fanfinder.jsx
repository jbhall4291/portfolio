import React from "react";
import { fanfinder } from "../../images/";
import SkillsCardSmall from "../../components/Projects/SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Fanfinder() {
  return (
    <div className="container mx-auto px-5 py-5 md:px-10 md:py-16 ">
      <Link to="/projects" className="inline-block text-red-500">
        <Button
          size="md"
          variant="text"
          className="flex items-center gap-2 text-highlight "
        >
          <i className="fas fa-arrow-left-long fa-lg" />
          BACK TO PROJECTS
        </Button>
      </Link>

      <div className="flex flex-col items-center lg:flex-row  ">
        <div className="order-2 mb-6 flex max-w-full flex-col items-center  text-center md:mb-8 lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:pb-12   lg:pr-0 lg:text-left">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
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

      <p className="mx-auto max-w-prose justify-center pb-6 text-center md:pb-12 md:text-lg">
        Fan Finder is a mobile app built in React Native and allows music fans
        to discover upcoming gigs in their area, and connect with other music
        fans via gig-specific forums or a chat facility. This project was built
        by a team of 4 using the MERN stack as part of the final Northcoders
        Bootcamp where we had to pitch, plan, build and deploy a project, all in
        just under two weeks!
      </p>

      <div className="mx-auto flex max-w-prose flex-row  justify-around  gap-2  text-center">
        <ExternalLink label="VIDEO DEMO" href="https://youtu.be/CnuN6rD8j8w" />
        <ExternalLink
          label="LIVE APP"
          href="https://newsbuzz-jbhall4291.netlify.app"
        />
        <ExternalLink
          label="GITHUB REPO"
          href="https://github.com/jbhall4291/newsbuzz"
        />
      </div>
    </div>
  );
}

export default Fanfinder;
