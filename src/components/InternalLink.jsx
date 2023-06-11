import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function InternalLink({ text, icon, internalRoute }) {
  return (
    <Link to={internalRoute} className="inline-block text-highlight">
      <Button
        size="lg"
        variant="text"
        className="flex text-md  items-center gap-2 text-highlight hover:shadow-xl "
      >
        {text}
        <i className="fas fa-arrow-right-long fa-lg" />
      </Button>
    </Link>
  );
}

export default InternalLink;
