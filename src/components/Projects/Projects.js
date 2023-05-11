import React from "react";

import { ButtonFill } from "../ButtonFill/ButtonFill";
import "./Projects.css";

import projectPlaceholder from "../../images/project-placeholder-laptop.png";
import fanfinderIpad from "../../images/fanfinder.png";
import newsbuzz from "../../images/newsbuzz.png";

export const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>

      <article className="Projects__article--align-left">
        <div className="Projects__div--image-area">
          <img src={newsbuzz} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>NewsBuzz</h3>
          <h4>a reddit-style social news aggregation web app</h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            NewsBuzz is a React web app in the style of Reddit, allowing users
            to view, vote and comment on articles hosted on my own backend and
            psql database. This was built as part of the amazing Northcoders
            Full-Stack Software Developer Bootcamp, with the aim of bringing
            together my front and back end skills under one project!
          </p>
          <div className="Projects__div--tech-container">
            <div className="Projects__div--single-skills-box">
              <i className="devicon-react-original"></i>
              <p>React</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="devicon-express-original"></i>
              <p>express.js</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="devicon-postgresql-plain"></i>
              <p>PostgreSQL</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="devicon-jest-plain"></i>
              <p>Jest</p>
            </div>
          </div>

          <div className="Projects__div--button-container">
            <ButtonFill
              text="live app"
              href="https://newsbuzz-jbhall4291.netlify.app/"
            />
            <ButtonFill
              text="github repo"
              href="https://github.com/jbhall4291/newsbuzz"
            />
            <ButtonFill text="video demo" href="https://youtu.be/CnuN6rD8j8w" />
          </div>
        </div>
      </article>

      <article className="Projects__article--align-right">
        <div className="Projects__div--image-area">
          <img src={fanfinderIpad} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>Fan Finder</h3>
          <h4>a location-based social networking mobile app </h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            Fan Finder is a mobile app built in React Native and allows music
            fans to discover upcoming gigs in their area, and connect with other
            music fans via gig-specific forums or a chat facility. This project
            was built by a team of 4 using the MERN stack as part of the final
            Northcoders Bootcamp where we had to pitch, plan, build and deploy a
            project, all in just under two weeks!
          </p>

          <div className="Projects__div--tech-container">
            <div className="Projects__div--single-skills-box">
              <i className="devicon-react-original"></i>
              <p>React Native</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="devicon-express-original"></i>
              <p>express.js</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="devicon-mongodb-plain"></i>
              <p>MongoDB</p>
            </div>

            <div className="Projects__div--single-skills-box">
              <i className="fas fa-cogs" aria-hidden="true"></i>
              <p>RESTful APIs</p>
            </div>
          </div>

          <div className="Projects__div--button-container">
            <ButtonFill
              text="video demo"
              href="https://www.youtube.com/watch?v=kQ7weiOZzHM"
            />
            <ButtonFill
              text="github repo"
              href="https://github.com/jbhall4291/fan-finder"
            />
            <ButtonFill
              text="live app"
              href="https://expo.dev/@jbhall4291/fan-finder?serviceType=classic&distribution=expo-go"
            />
          </div>
        </div>
      </article>

      <article className="Projects__article--align-left">
        <div className="Projects__div--image-area">
          <img  style={{ filter: 'blur(10px)' }} src={projectPlaceholder} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>One Hundred Press-ups</h3>
          <h4>a fitness tracking web & mobile app</h4>
          <h4>
            <em>~ under development ~</em>
          </h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            One Hundred Press-ups is a web & mobile app designed to guide, track
            and motivate fitness enthusiasts on their path to achieving... well,
            100 press-ups! My first project after graduating the Northcoders
            Bootcamp, I wanted to explore Google Firebase and hone my knowledge
            of React and React Native... also, I need some help to beat my
            ultra-competitive nephew at his own game!
          </p>
          <div className="Projects__div--tech-container">
            <div>
              <i className="devicon-react-original"></i>
              <p>React</p>
            </div>

            <div>
              <i className="devicon-react-original"></i>
              <p>React Native</p>
            </div>

            <div>
              <i className="devicon-firebase-plain"></i>
              <p>Firebase</p>
            </div>
          </div>

          <div className="Projects__div--button-container">
            <ButtonFill text="live app" href="https://www.google.com" />
            <ButtonFill
              text="github repo"
              href="https://www.google.com"
            />
            <ButtonFill text="video demo" href="https://www.google.com" />
          </div>
        </div>
      </article>
    </section>
  );
};
