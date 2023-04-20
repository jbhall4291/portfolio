import React from "react";

export const Skills = () => {
  return (
    <section className="Skills">
      <h1>My Skills</h1>
      <section className="Skills--my-skills">
        <div className="single-skills-box">
          <i className="devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-react-original"></i>
          <p>React</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon devicon-html5-plain" aria-hidden="true"></i>
          <p>HTML5</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon devicon-css3-plain" aria-hidden="true"></i>
          <p>CSS3</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-jquery-plain"></i>
          <p>jQuery</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-github-original"></i>
          <p>GitHub</p>
        </div>

        

        <div className="single-skills-box">
          <i className="devicon-nodejs-plain"></i>
          <p>node.js</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-express-original"></i>
          <p>express.js</p>
        </div>

        <div className="single-skills-box">
          <i className="fas fa-cogs" aria-hidden="true"></i>
          <p>RESTful APIs</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-postgresql-plain"></i>
          <p>PostgreSQL</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-jest-plain"></i>
          <p>Jest</p>
        </div>
      </section>

      <h1>Currently working on</h1>
      <section className="Skills--working-on">
        <div className="single-skills-box">
          <i className="devicon-python-plain"></i>
          <p>Python</p>
        </div>

        <div className="single-skills-box">
          <i className="devicon-threejs-original"></i>
          <p>three.js</p>
        </div>
      </section>
    </section>
  );
};
