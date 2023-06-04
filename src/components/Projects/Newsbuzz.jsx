import React from "react";
import { newsbuzz } from "../../images/";
import SkillsCardSmall from "../../components/Projects/SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";

function Newsbuzz() {
  return (
    <div className="container mx-auto px-5 pb-5 pt-2 ">
      <Link to="/projects" className="inline-block text-highlight">
        <Button
          size="lg"
          variant="text"
          className="flex items-center gap-2 text-highlight hover:shadow-xl"
        >
          <i className="fas fa-arrow-left-long fa-lg" />
          ALL PROJECTS
        </Button>
      </Link>

      <div className="flex flex-col items-center lg:flex-row  ">
        <div className="order-2 mb-6 flex max-w-full flex-col items-center  text-center md:mb-8 lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:pb-12   lg:pr-0 lg:text-left">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
            NEWSBUZZ
          </h1>
          <h2 className="text-lg font-bold">
            a reddit-style social news aggregation web app, built with:
          </h2>
          <div className="flex max-w-lg flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
            <SkillsCardSmall
              label="JavaScript"
              icon="devicon-javascript-plain colored"
            />
            <SkillsCardSmall
              label="React"
              icon="devicon-react-original colored"
            />
            <SkillsCardSmall
              label="node.js"
              icon="devicon-nodejs-plain colored"
            />
            <SkillsCardSmall
              label="PostgreSQL"
              icon="devicon-postgresql-plain colored"
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
            alt="newsbuzz screenshot"
            src={newsbuzz}
          />
        </div>
      </div>
      <Typography
        color="blue-gray"
        className="w-max-w mx-auto justify-center px-5 pb-6 text-center sm:w-4/6 lg:text-lg"
      >
        NewsBuzz is a React web app in the style of Reddit, allowing users to
        view, vote and comment on articles hosted on my own backend and psql
        database. This was built as part of the amazing Northcoders Full-Stack
        Software Developer Bootcamp, with the aim of bringing together my front
        and back end skills under one project!
      </Typography>

      <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center  sm:flex-row  sm:gap-10">
        <ExternalLink
          label="VIDEO DEMO"
          href="https://youtu.be/CnuN6rD8j8w"
          type="video"
        />
        <ExternalLink
          label="LIVE APP"
          href="https://newsbuzz-jbhall4291.netlify.app"
          type="liveApp"
        />
        <ExternalLink
          label="GITHUB REPO"
          href="https://github.com/jbhall4291/newsbuzz"
          type="repo"
        />
      </div>
    </div>
  );
}

export default Newsbuzz;
