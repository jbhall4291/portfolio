import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="Skills">
      <h2>My Skills</h2>
      <section>
        <div>
          <i className="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </div>

        <div>
          <i className="devicon-react-original colored"></i>
          <p>React</p>
        </div>

        <div>
          <i className="devicon devicon-html5-plain colored" aria-hidden="true"></i>
          <p>HTML5</p>
        </div>

        <div>
          <i className="devicon devicon-css3-plain colored" aria-hidden="true"></i>
          <p>CSS3</p>
        </div>

        <div>
          <i className="devicon-jquery-plain colored"></i>
          <p>jQuery</p>
        </div>

        <div>
          <i className="devicon-github-original colored"></i>
          <p>GitHub</p>
        </div>

        <div>
          <i className="devicon-nodejs-plain colored"></i>
          <p>node.js</p>
        </div>

        <div>
          <i className="devicon-express-original colored"></i>
          <p>express.js</p>
        </div>

        <div>
          <i className="fas fa-cogs " aria-hidden="true"></i>
          <p>RESTful APIs</p>
        </div>

        <div>
          <i className="devicon-postgresql-plain colored"></i>
          <p>PostgreSQL</p>
        </div>

        <div>
          <i className="devicon-mongodb-plain colored"></i>
          <p>MongoDB</p>
        </div>

        <div>
          <i className="devicon-jest-plain colored"></i>
          <p>Jest</p>
        </div>
      </section>

      <p>
        <em>...and I've just started learning Python and Three.js</em>
      </p>
    </section>
  );
};
