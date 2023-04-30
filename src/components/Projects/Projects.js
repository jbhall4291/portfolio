import React from "react";

import { ButtonFill } from "../ButtonFill/ButtonFill";
import "./Projects.css";

const projectPlaceholder = require("../../images/project-placeholder-laptop.png");
const fanfinderImage = require("../../images/fanfinder_ipad_horizontal.png");

export const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>

      <article className="Projects__article">
        <div className="Projects__div--image-area">
          <img src={projectPlaceholder} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>Northcoders News</h3>
          <h4>reddit-style news aggregation web app</h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            Northcoders is a news aggregation React app in the style of Reddit,
            allowing users to view, vote and comment on articles hosted on my
            own backend and psql database. This was built as part of the amazing
            Northcoders Full-Stack Software Developer Bootcamp, with the aim of
            bringing together my front and back end skills under one project!
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

          {/* these button are making shrinking down troublesome! */}

          <div className="Projects__div--button-container">
            <ButtonFill text="live app" href="https://www.google.com" />
            <ButtonFill
              text="github repo"
              href="https://github.com/jbhall4291/nc-news-frontend"
            />
            <ButtonFill text="video demo" href="https://www.google.com" />
          </div>
        </div>
      </article>

      <article className="Projects__article--image-right">
        <div className="Projects__div--image-area">
          <img src={projectPlaceholder} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>FanFinder</h3>
          <h4>location-based social networking mobile app </h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            FanFinder is a mobile app built in React Native and allows music
            fans to discover upcoming gigs in their area, and connect with other
            music fans via gig-specific forums or a chat facility. This project
            was built by a team of 4 using the MERN stack as part of the final
            Northcoders Bootcamp where we had to pitch, plan, build and deploy a
            project, all in just under 2 weeks!
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

          {/* these button are making shrinking down troublesome! */}

          <div className="Projects__div--button-container">
            <ButtonFill text="live app" href="https://www.google.com" />
            <ButtonFill
              text="github repo"
              href="https://github.com/jbhall4291/nc-news-frontend"
            />
            <ButtonFill text="video demo" href="https://www.google.com" />
          </div>
        </div>
      </article>

      <article className="Projects__article">
        <div className="Projects__div--image-area">
          <img src={projectPlaceholder} alt="johnny"></img>
        </div>
        <div className="Projects__div--title-area">
          <h3>One Hundred Press-ups</h3>
          <h4>fitness tracking web & mobile app</h4>
          <h4>
            <em>~ under development ~</em>
          </h4>
        </div>
        <div className="Projects__div--desc-area">
          <p className="Projects__p--description">
            One Hundred Press-ups is a web & mobile app designed to guide, track
            and motivate fitness enthusiasts on their path to achieving... well,
            100 pressups! My first project after graduating the Northcoders
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
              href="https://github.com/jbhall4291/nc-news-frontend"
            />
            <ButtonFill text="video demo" href="https://www.google.com" />
          </div>
        </div>
      </article>
    </section>
  );
};
