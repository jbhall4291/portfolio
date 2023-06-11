import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProjectCard({
  title,
  image,
  description,
  youtubeURL,
  learnMorePage,
  setShowModal,
  setVideoToPlay,
}) {
  return (
    <Card className="mt-6 md:w-96 ">
      <CardHeader color="blue-gray" className="relative h-56" floated={false}>
        <img src={image} alt={title} layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="flex flex-col gap-2 pt-0 sm:gap-5 smallIphone:flex-row ">
        <Button
          size="lg"
          disabled={title === "HUNDRED PRESS-UPS"}
          variant="text"
          className="flex items-center gap-2  bg-highlight text-white hover:bg-highlight
          hover:shadow-xl"
          onClick={() => {
            setVideoToPlay(title);
            setShowModal(true);
          }}
        >
          {/* temporary conditional rendering, until video is available for 100 PRESS-UPS */}
          {title === "HUNDRED PRESS-UPS" ? "COMING SOON" : "VIDEO DEMO"}
          <i className="fa-brands fa-youtube fa-2xl" />
        </Button>

        <Link to={learnMorePage} className="inline-block text-highlight">
          <Button
            size="lg"
            variant="text"
            className="flex items-center gap-2 text-highlight "
          >
            Learn More
            <i className="fas fa-arrow-right-long fa-2xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
