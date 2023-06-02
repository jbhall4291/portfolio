import React from "react";
import { Link } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ title, image, description, youtubeURL, learnMorePage }) {
  return (
    <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative h-56" floated={false}>
        <img src={image} alt={title} layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="flex gap-x-5 pt-0">
        {/* temporary conditional rendering, until video is available for 100 pushups */}
        {title !== "100 PUSHUPS" && (
          <a
            href={youtubeURL}
            className="inline-block "
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="md"
              variant="text"
              className="flex items-center gap-2 bg-highlight text-white"
            >
              VIDEO DEMO
              <i className="fa-brands fa-youtube fa-lg" />
              {/* <FontAwesomeIcon icon={faCircle} fade size="2xs" style={{ color: "#ff0000" }} /> */}
            </Button>
          </a>
        )}

        <Link to={learnMorePage} className="inline-block text-red-500">
          <Button
            size="md"
            variant="text"
            className="flex items-center gap-2 text-highlight "
          >
            Learn More
            <i className="fas fa-arrow-right-long fa-lg" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
