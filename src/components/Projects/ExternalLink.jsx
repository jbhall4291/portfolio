import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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

function ExternalLink({ href, label, type }) {
  return (
    <a href={href} className="inline-block " target="_blank" rel="noreferrer">
      <Button
        size="lg"
        variant="text"
        className={
          "flex items-center gap-2 bg-highlight text-xs text-white hover:bg-highlight  hover:shadow-xl md:text-sm "
        }
      >
        {label}
        <i className="fa-solid fa-screen-presentation"></i>
        
        {type === "video" && <i className="fa-brands fa-youtube fa-2xl" />}
        {type === "liveApp" && (
          <i className="fa-solid fa-circle fa-beat-fade fa-lg" />
        )}
        {type === "repo" && <i className="fa-brands fa-github fa-2xl" />}
        {type === "showcase" && (
          <i className="fa-solid fa-people-group fa-2xl" />
          
          

        )}
      </Button>
    </a>
  );
}

export default ExternalLink;
