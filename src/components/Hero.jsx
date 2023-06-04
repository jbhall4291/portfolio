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
    <section id="hero">
      <div className="container mx-auto flex flex-col items-center px-5 py-5  lg:flex-row ">
        <div className="order-2 mb-16 flex flex-col items-center text-center lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:px-10    ">
          <h1 className=" headline-font mb-2 mt-4 text-center text-3xl font-medium text-highlight md:text-6xl">
            Hi, I'm Johnny.
          </h1>
          <Typography
            variant="h4"
            color="blue-gray"
            className="my-2 pb-4 text-center text-base md:my-5 lg:text-lg"
          >
            Full-stack software developer by day, and devoted pizza enthusiast
            by night. I love building cool stuff and learning new technologies.
            Whether it's front-end or back-end, I'm always up for a challenge
            🚀.
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

        <img
          className="rounded object-cover object-center sm:h-[34rem] lg:order-1 shadow-xl"
          alt="me, johnny hall"
          src={profile}
        />
      </div>
    </section>
  );
}

export default Hero;
