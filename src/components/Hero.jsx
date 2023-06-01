import React from "react";
import { profile } from "../images/";
import { Link } from "react-router-dom";
import InternalLink from "./InternalLink";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

// const handleLinkClick = (event, target) => {
//   event.preventDefault();
//   const navbarHeight = document.querySelector("#header").offsetHeight;
//   const element = document.querySelector(target);
//   const elementPosition =
//     element.getBoundingClientRect().top + window.pageYOffset;
//   const offsetPosition = elementPosition - navbarHeight;

//   window.scrollTo({
//     top: offsetPosition,
//     behavior: "smooth",
//   });
// };

function Hero() {
  return (
    <section id="hero" className="text-black  ">
      <div className="container mx-auto flex flex-col items-center px-5 py-5 md:px-10 md:py-20 lg:flex-row  lg:text-left ">
        <div className="order-2 mb-16 flex flex-col items-center text-center lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:px-10    ">
          <h1 className=" headline-font mt-4 mb-2 text-center text-3xl font-medium text-highlight md:text-6xl">
            Hi, I'm Johnny.
          </h1>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 pb-4 text-center"
          >
            Full-stack software developer by day, and devoted pizza enthusiast
            by night 🍕. I love building cool stuff and learning new
            technologies 🎓. Whether it's front-end or back-end, I'm always up
            for a challenge 🚀.
            <br />
            <br />
            I'm currently looking for an opportunity to contribute to a
            company's success, so if you're looking for a junior developer then
            get in touch & let's make something amazing!
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
        {/* <div className="flex order-1 w-4/6 md:w-1/2 lg:order-2 lg:w-full lg:max-w-2xl justify-center"> */}
        <img
          className="lg:order-1 sm:h-[34rem] rounded object-cover object-center"
          alt="hero"
          src={profile}
        />
        {/* </div> */}
      </div>
    </section>
  );
}

export default Hero;
