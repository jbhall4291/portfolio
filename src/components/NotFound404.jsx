import React from "react";
import InternalLink from "./InternalLink";

function NotFound404() {
  return (
    <div className="order-2 mb-16 flex flex-col items-center text-center lg:order-1 lg:mb-0 lg:w-1/2 lg:max-w-screen-md lg:flex-grow lg:items-center lg:justify-center lg:px-10    ">
      <h1 className=" headline-font mb-2 mt-4 text-center text-3xl font-medium text-highlight md:text-6xl">
        404 ERROR:<br></br> PAGE NOT FOUND
      </h1>
      <InternalLink
        text="NIL DESPERANDUM, TO THE HERO PAGE!"
        internalRoute="/"
      />
    </div>
  );
}

export default NotFound404;
