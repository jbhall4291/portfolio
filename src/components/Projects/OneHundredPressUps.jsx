import React from "react";
import { oneHundredPressUps } from "../../images";
import SkillsCardSmall from "./SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function OneHundredPressUps() {
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
            ONE HUNDRED PRESS-UPS
          </h1>
          <h2 className="text-lg font-bold">
            a fitness tracking web & mobile app, under development using:
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
              label="Firebase"
              icon="devicon-firebase-plain colored"
            />

            <SkillsCardSmall label="Jest" icon="devicon-jest-plain colored" />
          </div>
        </div>
        <div className="order-2 w-full  md:w-full lg:order-2 lg:max-w-2xl">
          <img
            className="rounded object-cover object-center "
            alt="one hundred pressups screenshot"
            src={oneHundredPressUps}
          />
        </div>
      </div>

      <p className="mx-auto max-w-prose justify-center pb-6 text-center md:pb-12 md:text-lg">
        One Hundred Press-ups is a web & mobile app designed to guide, track and
        motivate fitness enthusiasts on their path to achieving... well, 100
        press-ups! My first project after graduating the Northcoders Bootcamp, I
        wanted to explore Google Firebase and hone my knowledge of React and
        React Native... also, I need some help to beat my ultra-competitive
        nephew at his own game!
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

export default OneHundredPressUps;
