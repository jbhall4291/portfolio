import React from 'react'
import SkillCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills" className="container mx-auto px-5 lg:px-10">
      <h1 className="text-center text-3xl font-extrabold">Skills</h1>

      <div className="flex flex-wrap justify-center gap-1.5 md:m-auto md:w-5/6 md:gap-9">
        <SkillCard label="JavaScript" icon="devicon-javascript-plain colored" />
        <SkillCard label="React" icon="devicon-react-original colored" />
        <SkillCard label="node.js" icon="devicon-nodejs-plain colored" />
        <SkillCard label="express.js" icon="devicon-express-original colored" />
        <SkillCard label="PostgreSQL" icon="devicon-postgresql-plain colored" />
        <SkillCard label="MongoDB" icon="devicon-mongodb-plain colored" />
        <SkillCard label="Jest" icon="devicon-jest-plain colored" />
        <SkillCard label="RESTful APIs" icon="fas fa-cogs" />
        <SkillCard label="GitHub" icon="devicon-github-original colored " />
        <SkillCard label="Tailwind" icon="devicon-tailwindcss-plain colored" />
        <SkillCard label="HTML5" icon="devicon devicon-html5-plain colored" />
        <SkillCard label="CSS3" icon="devicon devicon-css3-plain colored" />
      </div>
    </section>
  );
}

export default Skills;
