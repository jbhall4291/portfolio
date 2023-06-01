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

function InternalLink({ text, icon, internalRoute }) {
  return (
    <Link to={internalRoute} className="inline-block text-red-500">
      <Button
        size="lg"
        variant="text"
        className="flex items-center gap-2 text-highlight hover:shadow-xl "
      >
        {text}
        <i className="fas fa-arrow-right-long fa-lg" />
      </Button>
    </Link>
  );
}

export default InternalLink;
