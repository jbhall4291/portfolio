import ProjectCard from "./ProjectCard";
import { Fanfinder, newsbuzz } from "../images";
import { hundredPushups } from "../images";

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-5 lg:px-10">
      <h1 className="text-center text-3xl font-extrabold">Projects</h1>

      <div className="flex flex-col w-full flex-wrap justify-center gap-5 md:m-auto md:w-5/6 md:flex-row md:gap-x-20">
        <ProjectCard
          label="NewsBuzz"
          description="a reddit-style social news aggregation web app"
          image={newsbuzz}
        />
        <ProjectCard
          label="Fan Finder"
          description="a location-based social networking mobile app"
          image={Fanfinder}
        />
        <ProjectCard
          label="100 pushups"
          description="a fitness tracking web & mobile app"
          image={hundredPushups}
        />

        {/* <ProjectCard label="node.js" icon="devicon-nodejs-plain colored" /> */}
      </div>
    </section>
  );
}

export default Projects;
