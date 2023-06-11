import React, {useState} from "react";
import { newsbuzz } from "../../images/";
import SkillsCardSmall from "../../components/Projects/SkillsCardSmall";
import ExternalLink from "./ExternalLink";
import { motion } from "framer-motion";
import VideoModal from "../VideoModal";

import { Typography, Button } from "@material-tailwind/react";

function Newsbuzz() {

  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeOut"}}  className="container">
         <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoToPlay="NEWSBUZZ"
      />
      
      <div className="flex flex-col items-center lg:flex-row justify-evenly gap-y-8 ">
        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
            NEWSBUZZ
          </h1>
          <h2 className="text-lg font-bold">
            a reddit-style social news aggregation web app, built with:
          </h2>
          <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
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
        
          <img
            className="order-2 lg:order-2  sm:w-[33rem] sm:h-[23.5rem]"
            alt="newsbuzz screenshot"
            src={newsbuzz}
          />
        
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
        
        
        {/* <ExternalLink
          label="VIDEO DEMO"
          href="https://youtu.be/CnuN6rD8j8w"
          type="video"
        /> */}
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
    </motion.div>
  );
}

export default Newsbuzz;
