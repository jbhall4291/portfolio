import React from "react";
const projectPlaceholder = require("../images/project-placeholder-laptop.png");

export const Projects = () => {
  return (
    <section className="Projects">
      <h1>Projects</h1>

      <div className="Projects__div--project-image-left">
        <div className="Projects__div--text-content">
          <h2>northcoders news</h2>
          <h3>reddit-style news aggregation</h3>

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
            Quick tip for yourself: if you're ever doing an after-dinner speech,
            you say "My Lords, Ladies and Gentlemen, sorry I'm late, I just
            popped to the toilet. And while I was there, I saw some graffiti and
            it said "I used to be indecisive, but now I'm not so sure"".
            Straight away you've got them by the jaffas.
          </h4>
          <div className="Projects__div--button-container">
            <button className="btn-1">view live</button>
            <button className="btn-1">to the github repo!</button>
            <button className="btn-1">learn more</button>
          </div>

          {/* <div className="button-container">
            <div className="btn-b1">
              <a href="#">left</a>
            </div>
          </div> */}
        </div>
        <img src={projectPlaceholder} alt="johnny"></img>
      </div>

      <div className="Projects__div--project-image-right">
        <div className="Projects__div--text-content">
          <h2>fan finder</h2>
          <h3>location based social media app</h3>
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
            Quick tip for yourself: if you're ever doing an after-dinner speech,
            you say "My Lords, Ladies and Gentlemen, sorry I'm late, I just
            popped to the toilet. And while I was there, I saw some graffiti and
            it said "I used to be indecisive, but now I'm not so sure"".
            Straight away you've got them by the jaffas.
          </h4>
          <div className="Projects__div--button-container">
            <button className="btn-1">view live</button>
            <button className="btn-1">to the github repo!</button>
            <button className="btn-1">learn more</button>
          </div>
        </div>
        <img src={projectPlaceholder} alt="johnny"></img>
      </div>

      <div className="Projects__div--project-image-left">
        <div className="Projects__div--text-content">
          <h2>100 push ups (WIP)</h2>
          <h3>web and mobile fitness app</h3>
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
            Quick tip for yourself: if you're ever doing an after-dinner speech,
            you say "My Lords, Ladies and Gentlemen, sorry I'm late, I just
            popped to the toilet. And while I was there, I saw some graffiti and
            it said "I used to be indecisive, but now I'm not so sure"".
            Straight away you've got them by the jaffas.
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
