import React from "react";
import "./About.css";

import sydneyPic from "../../images/sydney.jpeg";
import cabPic from "../../images/cab.jpeg";
import ivyPic from "../../images/ivy.jpeg";

export const About = () => {
  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const navbarHeight = document.querySelector(".Navbar").offsetHeight;
    const element = document.querySelector(target);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="About">
      <h2>About</h2>

      <div>
        <img
          className="About__img--right"
          src={sydneyPic}
          alt="selfie by the sydney opera house"
        />
        <p>
          As a lifelong learner and outgoing individual with a diverse range of
          experiences, I spent several years working in the IT industry before
          taking time off to travel and explore the world. During my travels, I
          had the opportunity to meet new people & experience different cultures
          which enabled me to develop as an individual. Having got as far as
          Australia, I decided it was probably time to start heading back!
        </p>
      </div>
      <br></br>
      <br></br>

      <div>
        <img className="About__img--left" src={cabPic} alt="my old black cab" />
        <p>
          Upon returning to the UK, I wanted to challenge myself in new ways and
          so undertook the famous 'Knowledge of London' exam. Subsequently, I
          worked as a black cab driver, navigating the bustling streets of
          London and honing my communication and problem-solving skills.
          However, my passion for technology and programming soon resurfaced as
          I found myself delving into various tools and platforms like Unity
          Engine, Unreal and Blender. I then expanded my horizons by exploring
          HTML and CSS, and was thrilled to discover the seemingly endless
          possibilities of JavaScript, which quickly became a focal point of my
          learning and experimentation.
        </p>
      </div>

      <p>
        <br></br>
        <br></br>
      </p>

      <div>
        <img
          className="About__img--right"
          src={ivyPic}
          alt="my old black cab"
        />
        <p>
          Dabbling at the weekends with JavaScript wasn't cutting it anymore, so
          I enrolled in the{" "}
          <a href="https://northcoders.com/our-courses/coding-bootcamp">
            Northcoders Coding Bootcamp
          </a>{" "}
          to kickstart a new career in software development. The amazing course
          covered so much ground, and I was able to build on my existing
          knowledge to develop a deep understanding of web development. By the
          end of the course, I was pitching, planning, and then building
          full-stack apps! When I'm not working on my latest programming
          project, you can find me enjoying a delicious slice of pizza or
          spending time with my beloved pug Ivy in the great outdoors.
          <br></br>
          <br></br>
          Of course, I'm now eager to apply my new skills in the real-world and
          contribute to a company's success. So, if you have any suitable
          opportunities or want to learn more about me, please feel free to{" "}
          <a
            href="#contact"
            onClick={(event) => {
              handleLinkClick(event, "#contact");
            }}
          >
            get in touch!
          </a>
        </p>
      </div>
    </section>
  );
};
