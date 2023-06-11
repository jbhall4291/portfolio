import React, {useState} from "react";
import { fanfinder } from "../../images/";
import SkillsCardSmall from "../../components/Projects/SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { motion } from "framer-motion";
import VideoModal from "../VideoModal";

import { Typography, Button } from "@material-tailwind/react";

function Fanfinder() {

  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeOut"}} className="container mx-auto px-2 pb-5 pt-2 ">
        <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoToPlay="FAN FINDER"
      />

<div className="flex flex-col items-center lg:flex-row justify-evenly gap-y-4 ">
        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
            FAN FINDER
          </h1>
          <h2 className="text-lg font-bold">
          a location-based social networking mobile app, built with:
          </h2>
          <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
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

        <img
            className="order-2 w-[350px] h-[248px]  sm:w-[528px] sm:h-[376px]"
            alt="fan finder screenshot"
            src={fanfinder}
          />

</div>

      <Typography
        color="blue-gray"
       className="w-max-w mx-auto justify-center px-4 py-4 text-center sm:w-4/6 lg:text-lg"
      >
        Fan Finder is a mobile app built in React Native and allows music fans
        to discover upcoming gigs in their area, and connect with other music
        fans via gig-specific forums or a chat facility. This project was built
        by a team of 4 using the MERN stack as part of the final Northcoders
        Bootcamp where we had to pitch, plan, build and deploy a project, all in
        just under two weeks!
      </Typography>

      <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center  sm:flex-row  sm:gap-10">
        
      <Button
          size="lg"
          variant="text"
          className="flex items-center gap-2  bg-highlight text-white hover:bg-highlight
          hover:shadow-xl"
          onClick={() => {
            setShowModal(true);
          }}
        >
          VIDEO DEMO
          <i className="fa-brands fa-youtube fa-2xl" />
        </Button>


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
    </motion.div>
  );
}

export default Fanfinder;
