import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="About">
      <h2>About</h2>

      <div>
        <img
          className="pizza-image"
          src="  https://www.listchallenges.com/f/items/eb44ead2-6dca-40f4-9323-ad987ea718cd.jpg"
          alt="Example image"
          style={{ float: "right", marginLeft: "1rem" }}
        />
        <p>
          I am an enthusiastic learner and an outgoing person with a wide range
          of experience. After working in the IT industry for several years, I
          decided to take some time off to travel and explore the world. During
          my travels, I had the opportunity to meet new people & experience
          different cultures which enabled me to develop as an individual.
          Having got as far as Australia, I decided it was probably time to
          start heading back!
        </p>
      </div>
      <br></br>
      <br></br>

      <div>
        <img
          className="pizza-image"
          src="https://www.easyphrase.io/img/about/1.png"
          alt="Example image"
          style={{ float: "left", marginRight: "1rem" }}
        />
        <p>
          Upon returning to the UK, I wanted to challenge myself in new ways and
          so undertook the famous 'Knowledge of London' exam. Subsequently, I
          worked as a black cab driver, navigating the bustling streets of
          London and honing my communication and problem-solving skills.
          However, my passion for technology and programming soon resurfaced and
          'dabbling at the weekends' wasn't cutting it anymore! This led me to
          enrol in the{" "}
          <a href="https://northcoders.com/our-courses/coding-bootcamp">
            Northcoders Coding Bootcamp
          </a>{" "}
          to kickstart a new career in software development.
        </p>
      </div>

      <p>
        <br></br>
        <br></br>
      </p>

      <div>
        <img
          className="pizza-image"
          src="https://images.halloweencostumes.com/products/29686/1-1/happy-pug-adult-mask.jpg"
          alt="Example image"
          style={{ float: "right", marginLeft: "1rem" }}
        />
        <p>
          When I'm not working on my latest programming project, you can find me
          enjoying a delicious slice of pizza or spending time with my beloved
          pug Ivy. Of course I'm now eager to apply my new skills in the
          real-world and contribute to a company's success, so if you have any
          suitable opportunities or want to learn more about me, please feel
          free to get in touch!
        </p>
      </div>
    </section>
  );
};
