import React from "react";

import { Typography, Button } from "@material-tailwind/react";

function Contact() {
  return (
    <section
      id="contact"
      className=" container mx-auto flex flex-col  px-5  text-center lg:px-10"
    >
      <Typography color="blue-gray" className=" text-center lg:text-lg">
        If you would like a copy of my CV or are interested in collaborating on
        a project, then I’d love to hear from you!
      </Typography>

      <div className="mx-auto flex w-11/12 flex-col items-center justify-center gap-5 py-5 sm:w-3/4 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-1.5  pb-0 md:order-2 md:m-auto md:flex-col md:gap-9 ">
          <a
            href="mailto:jbhall4291@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              variant="text"
              className="flex items-center gap-2 bg-highlight align-middle text-white hover:bg-highlight  hover:shadow-xl"
            >
              EMAIL ME
              <i className="fa-solid fa-envelope fa-xl"></i>
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/johnny-hall-dev"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              variant="text"
              className="flex items-center gap-2 bg-highlight align-middle text-white hover:bg-highlight  hover:shadow-xl"
            >
              CONNECT ON LINKEDIN
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </Button>
          </a>

          <a
            href="https://github.com/jbhall4291"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              size="lg"
              variant="text"
              className="flex items-center gap-2 bg-highlight align-middle text-white hover:bg-highlight  hover:shadow-xl"
            >
              VIEW MY GITHUB
              <i className="fa-brands fa-github fa-xl"></i>
            </Button>
          </a>
        </div>

        <form
          name="contact"
          method="post"
          className="mx-auto flex w-full flex-col   rounded p-5  text-left text-blueGrey shadow-xl sm:w-96  md:p-10"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mb-4  box-border w-full rounded-md border-2 border-solid border-blueGrey p-1 text-lg"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-4   box-border w-full rounded-md border-2 border-solid border-blueGrey p-1 text-lg"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            className=" mb-4 box-border  w-full resize-none rounded-md border-2 border-solid border-blueGrey p-1 text-lg"
          ></textarea>
          <div className="flex">
            {/* <input
            value="Submit Message"
            className="mx-auto inline-flex rounded border-0 bg-highlight px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none md:text-center"
          /> */}

            <Button
              type="submit"
              size="lg"
              variant="text"
              value="Submit Message"
              className="mx-auto flex w-full items-center justify-center gap-2 bg-highlight text-white hover:bg-highlight  hover:shadow-xl"
            >
              SUBMIT MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
