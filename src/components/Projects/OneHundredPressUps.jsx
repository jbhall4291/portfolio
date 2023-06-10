import React from "react";
import { oneHundredPressUps } from "../../images";
import SkillsCardSmall from "./SkillsCardSmall";
import { motion } from "framer-motion";

function OneHundredPressUps() {
  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeOut"}}  className="container mx-auto px-2 pb-5 pt-2 ">
      <div className="flex flex-col items-center lg:flex-row pt-2 ">
        <div className="order-2 mb-6 flex max-w-full flex-col items-center  text-center md:mb-8 lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:pb-12   lg:pr-0 lg:text-left">
          <h1 className="headline-font text-center text-5xl text-highlight md:text-7xl">
            HUNDRED PRESS-UPS
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

      <p className="mx-auto max-w-prose justify-center  text-center  md:text-lg">
        Hundred Press-ups is a web & mobile app designed to guide, track and
        motivate fitness enthusiasts on their path to achieving, well... one
        hundred press-ups! My first project after graduating the Northcoders
        Bootcamp, I wanted to explore Google Firebase and hone my knowledge of
        React and React Native... also, I need some help to beat my
        ultra-competitive nephew at his own game!
      </p>

      {/* 
              <div className="mx-auto flex flex-col items-center justify-center gap-5 sm:gap-10  text-center  sm:flex-row">

        <ExternalLink label="VIDEO DEMO" href="https://youtu.be/CnuN6rD8j8w" />
        <ExternalLink
          label="LIVE APP"
          href="https://newsbuzz-jbhall4291.netlify.app"
        />
        <ExternalLink
          label="GITHUB REPO"
          href="https://github.com/jbhall4291/newsbuzz"
        />
      </div> */}
    </motion.div>
  );
}

export default OneHundredPressUps;
