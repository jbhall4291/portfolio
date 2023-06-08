import React from "react";
import { cab, ivy, sydney } from "../images";
import { Typography } from "@material-tailwind/react";

function About() {
  return (
    <div className="container mx-auto flex grid-rows-3 flex-col items-center gap-x-8 gap-y-8 px-5 md:grid md:grid-cols-4 lg:px-10">
      <Typography
        color="blue-gray"
        className="text-md col-span-3 flex items-center text-justify  lg:text-lg order-1 md:order-none"
      >
        As a lifelong learner and outgoing individual with a diverse range of
        experiences, I spent several years working in the IT industry before
        taking time off to travel and explore the world. During my travels, I
        had the opportunity to meet new people & experience different cultures
        which enabled me to develop as an individual. Having got as far as
        Australia, I decided it was probably time to start heading back!
      </Typography>
      <img
        className=" col-span-1 rounded shadow-2xl md:order-none order-2 "
        src={sydney}
        alt="me by sydney opera house"
      />

      <img
        className="col-span-1 rounded shadow-2xl md:order-none order-4"
        src={cab}
        alt="me with my old taxi"
      />

      <Typography
        variant="h5"
        color="blue-gray"
        className=" text-md col-span-3 flex items-center text-justify  lg:text-lg md:order-none order-3"
      >
        Upon returning to the UK, I wanted to challenge myself in new ways and
        so undertook the famous 'Knowledge of London' exam. Subsequently, I
        worked as a black cab driver, navigating the bustling streets of London
        while honing my communication and problem-solving skills. However, my
        passion for technology & programming soon resurfaced as I found myself
        delving into the Unity engine, as well as Unreal and Blender. I then
        expanded my horizons by exploring HTML and CSS, and was thrilled to
        discover the seemingly endless possibilities of JavaScript, which
        quickly became my focus.
      </Typography>

      <Typography
        variant="h5"
        color="blue-gray"
        className="text-md  col-span-3 flex items-center text-justify md:order-none order-5 lg:text-lg"
      >
        Dabbling at the weekends with JavaScript wasn't cutting it anymore, so I
        enrolled in the Northcoders Coding Bootcamp to kickstart a new career in
        software development. The amazing course covered so much ground, and I
        was able to build on my existing knowledge to develop a deep
        understanding of web development. By the end of the course, I was
        pitching, planning, and then building full-stack apps! When I'm not
        working on my latest programming project, you can find me enjoying a
        delicious slice of pizza or spending time with my beloved pug Ivy in the
        great outdoors.
      </Typography>

      <img
        className="col-span-1 rounded shadow-2xl md:order-none order-6"
        src={ivy}
        alt="my pug, ivy"
      />
    </div>
  );
}

export default About;
