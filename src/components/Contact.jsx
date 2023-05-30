import React from "react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-5 text-center lg:px-10"
    >
      <h1
        className="headline-font text-center text-7xl text-highlight"
        id="about"
      >
        CONTACT
      </h1>

      <p className="">
        If you would like a copy of my CV or are interested in collaborating on
        a project I’d love to hear from you! <br></br>Just fill in the form, or
        get in touch via LinkedIn, GitHub or email.
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 md:m-auto md:w-5/6 md:gap-9">
        <ContactCard
          label="LinkedIn"
          icon="devicon-linkedin-plain colored"
          href="https://www.linkedin.com/in/johnny-hall-dev"
        />
        <ContactCard
          label="GitHub"
          icon="devicon-github-original colored"
          href="https://www.github.com/jbhall4291"
        />
        <ContactCard
          label="Email"
          icon="fa-solid fa-square-envelope"
          href="mailto:jbhall4291@gmail.com"
        />
      </div>

      <form
        name="contact"
        method="post"
        className="mx-auto flex w-80 flex-col text-left"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mb-4  box-border w-full rounded-md border-2 border-solid border-black p-1 text-lg"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mb-4   box-border w-full rounded-md border-2 border-solid border-black p-1 text-lg"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          className=" mb-4 box-border  w-full resize-none rounded-md border-2 border-solid border-black p-1 text-lg"
        ></textarea>
        <div className="flex">
          <input
            type="submit"
            value="Submit Message"
            className="mx-auto inline-flex rounded border-0 bg-green-500 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none md:text-center"
          />
        </div>
      </form>
    </section>
  );
}

export default Contact;
