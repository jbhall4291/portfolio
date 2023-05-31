import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function CarouselItem({ title, image, description }) {
  return (
    // <div className="relative h-full w-full">
    <div className="relative  flex items-center justify-center">
      {/* <img src={image} alt={title} className="h-full w-full object-cover" /> */}
      <img src={image} alt={title} className="w-10/12 	" />
      <div className="absolute inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 rounded-lg bg-black/75 p-5 text-center md:w-2/4 ">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button size="lg" color="white">
              More Info
            </Button>
            <Button size="lg" color="white" variant="text">
              Video Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
