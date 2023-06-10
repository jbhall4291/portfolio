import React, { useState } from "react";
import { profile } from "../images/";
import { Link } from "react-router-dom";
import InternalLink from "./InternalLink";
import { Typography, Button } from "@material-tailwind/react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

function Hero() {
  const [show] = useState(true);

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeOut"}} id="hero">
      <div className="container mx-auto flex flex-col items-center px-10 md:px-0 pb-5 md:pt-10 lg:flex-row lg:pt-0  lg:gap-10">
        <div className="order-2 mb-16 flex flex-col items-center text-center lg:order-1 lg:mb-0 lg:w-1/2  lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center    ">
          <h1 className=" headline-font mb-2 mt-4 text-center text-4xl font-medium text-highlight md:text-6xl ">
            Hi, I'm Johnny.
          </h1>
          <Typography
            variant="h4"
            color="blue-gray"
            className="my-2 pb-4 text-center text-base md:my-5 lg:text-lg "
          >
            Full-stack software developer by day, and a devoted pizza enthusiast{" "}
            <RoughNotation
              color="#fe003a"
              strokeWidth="5"
              type="crossed-off"
              show={show}
              animationDelay="1500"
              multiline="true"
            >
              by night
            </RoughNotation>
            .<br />
            <RoughNotation
              color="#fe003a"
              strokeWidth="5"
              type="underline"
              show={show}
              animationDelay="3000"
              multiline="true"
              padding={[0, 0, 0, 0]}
            >
              I love building cool stuff
            </RoughNotation>{" "}
            and learning new technologies .<br /> Whether it's front-end or
            back-end, I'm always{" "}
            <RoughNotation
              type="box"
              multiline="true"
              strokeWidth="5"
              show={show}
              animationDelay="4500"
              color="#fe003a"
              animationDuration="1200"
            >
              up for a challenge 🚀
            </RoughNotation>
            .
            <br />
            <br />
            <RoughNotation
              color="#fe003a"
              strokeWidth="5"
              type="bracket"
              show={show}
              animationDelay="7000"
              brackets={["left", "right"]}
            >
              I'm currently looking for an opportunity to contribute to a
              company's success, so if you're looking for a junior developer
              then get in touch and let's make something amazing!
            </RoughNotation>
          </Typography>

          <div className="m-auto flex items-center justify-center gap-5">
            <Link
              to="/contact"
              className="btn inline-block align-middle text-red-500"
            >
              <Button
                size="lg"
                variant="text"
                className="flex items-center gap-2 bg-highlight align-middle text-white hover:bg-highlight  hover:shadow-xl"
              >
                GET IN TOUCH
                <i className="fa-solid fa-handshake fa-xl "></i>
              </Button>
            </Link>

            <InternalLink text="SEE MY PROJECTS" internalRoute="/projects" />
          </div>
        </div>

        <img
          className="rounded object-cover object-center shadow-xl sm:h-[28rem]  lg:order-1"
          alt="me, johnny hall"
          src={profile}
        />
      </div>
    </motion.section>
  );
}

export default Hero;
