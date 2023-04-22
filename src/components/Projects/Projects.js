import React from "react";
import { Button } from "../Button/Button";
import "./Projects.css";

const projectPlaceholder = require("../../images/project-placeholder-laptop.png");
const fanfinderImage = require("../../images/fanfinder_ipad_horizontal.png");

export const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <h1>Projects</h1>

      <div className="Projects__div--project-image-left">
        <div className="Projects__div--text-content">
          <h2>Northcoders News</h2>
          <h3>reddit-style news aggregation web app </h3>

          <div className="Projects__div--icons">
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-express-original"></i>
            <i className="fas fa-cogs" aria-hidden="true"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-jest-plain"></i>
          </div>
          <h4>
            Northcoders is a news aggregation React app in the style of Reddit,
            allowing users to view, vote and comment on articles hosted on my
            own backend and psql database. This was built as part of the amazing
            Northcoders Full-Stack Software Developer Bootcamp, with the aim of
            bringing together my front and back end skills under one project!
          </h4>

          {/* <div className="button-container">
            <div className="btn-b1">
              <a href="#">left</a>
            </div>
          </div> */}

          <div className="Projects__div--button-container">
            <Button text="live demo" href="https://www.google.com" />
            <Button text="gitub repo" href="https://www.bing.com" />
            <Button text="learn more" href="https://www.bing.com" />
            {/* <button className="btn-1">view live</button>
            <button className="btn-1">to the github repo!</button>
            <button className="btn-1">learn more</button> */}
          </div>
        </div>
        <img src={projectPlaceholder} alt="johnny"></img>
      </div>

      <div className="Projects__div--project-image-right">
        <div className="Projects__div--text-content">
          <h2>FanFinder</h2>
          <h3>location-based social networking mobile app </h3>
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
              <i className="devicon-express-original"></i>
              <p>express.js</p>
            </div>
          </div>
          <h4>
            FanFinder is a mobile app built in React Native and allows music
            fans to discover upcoming gigs in their area, and connect with other
            music fans via gig-specific forums or a chat facility. This project
            was built by a team of 4 as part of the final Northcoders Bootcamp
            where we had to pitch, plan, build and deploy a project, all in just
            under 2 weeks!
          </h4>
          <div className="Projects__div--button-container">
            <button className="btn-1">view live</button>
            <button className="btn-1">to the github repo!</button>
            <button className="btn-1">learn more</button>
          </div>
        </div>
        <img src={fanfinderImage} alt="johnny"></img>
      </div>

      <div className="Projects__div--project-image-left">
        <div className="Projects__div--text-content">
          <h2>One Hundred Press-ups (WIP)</h2>
          <h3>fitness tracking web & mobile app</h3>
          <div className="Projects__div--icons">
            <i class="devicon-firebase-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-express-original"></i>
            <i className="fas fa-cogs" aria-hidden="true"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-jest-plain"></i>
          </div>
          <h4>
            One Hundred Press-ups is a web & mobile app designed to guide, track
            and motivate fitness enthusiasts on their path to achieving... well,
            100 pressups! My first project after graduating the Northcoders
            Bootcamp, I wanted to explore Google Firebase and hone my knowledge
            of React and React Native... also, I need some help to beat my
            ultra-competitive nephew at his own game!
          </h4>
          <div className="Projects__div--button-container">
            <button className="btn-1">view live</button>
            <button className="btn-1">to the github repo!</button>
            <button className="btn-1">learn more</button>
          </div>
        </div>
        <img src={projectPlaceholder} alt="johnny"></img>
      </div>
    </section>
  );
};
