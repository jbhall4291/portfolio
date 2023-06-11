import React from "react";
import { oneHundredPressUps } from "../../images";
import SkillsCardSmall from "./SkillsCardSmall";
import { motion } from "framer-motion";

import { Typography } from "@material-tailwind/react";


function OneHundredPressUps() {
  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeOut"}}  className="container mx-auto px-2 pb-5 pt-2 ">
     
     <div className="flex flex-col items-center lg:flex-row justify-evenly gap-y-4 ">
        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
          HUNDRED PRESSUPS
          </h1>
          <h2 className="text-lg font-bold">
          a fitness tracking web app, under development using:
          </h2>
          <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
         
            <SkillsCardSmall
              label="React"
              icon="devicon-react-original colored"
            />

            <SkillsCardSmall
              label="Firebase"
              icon="devicon-firebase-plain colored"
            />

<SkillsCardSmall
              label="D3.js"
              icon="devicon-d3js-plain colored"
            />
          <SkillsCardSmall
              label="JavaScript"
              icon="devicon-javascript-plain colored"
            /> 
<SkillsCardSmall
              label="Figma"
              icon="devicon-figma-plain colored"
            />



          </div>
        </div>
        
          <img
            className="order-2 w-[350px] h-[248px]  sm:w-[528px] sm:h-[376px]"
            alt="hundred pressups screenshot"
            src={oneHundredPressUps}
          />
        
      </div>
      <Typography
        color="blue-gray"
                className="w-max-w mx-auto justify-center px-5 pb-6 text-center sm:w-4/6 lg:text-lg"

      >
       Hundred Press-ups is a web app designed to guide, track and
        motivate fitness enthusiasts on their path to achieving, well... one
        hundred press-ups! My first big project after graduating the Northcoders
        Bootcamp, I wanted to explore Google Firebase and the very popular D3 data visualisation library... also, I need some help to beat my
        ultra-competitive nephew at his own game!
      </Typography>

     
    </motion.div>
  );
}

export default OneHundredPressUps;
