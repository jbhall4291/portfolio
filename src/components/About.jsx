import { Cab, Ivy, Sydney } from "../images";

function About() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <h1 className="text-center text-3xl font-extrabold" id="about">
        About
      </h1>

      <div className="grid grid-rows-3 gap-0 md:grid-cols-4">
        <div className="col-span-3 ">
          As a lifelong learner and outgoing individual with a diverse range of
          experiences, I spent several years working in the IT industry before
          taking time off to travel and explore the world. During my travels, I
          had the opportunity to meet new people & experience different cultures
          which enabled me to develop as an individual. Having got as far as
          Australia, I decided it was probably time to start heading back!
        </div>
        <div className="col-span-1 ">
          <img src={Sydney} alt="me by sydney opera house" />
        </div>
        <div className="col-span-1 ">
          <img src={Cab} alt="me by my old taxi" />
        </div>
        <div className="col-span-3 ">
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
        </div>

        <div className="col-span-3">
          Dabbling at the weekends with JavaScript wasn't cutting it anymore, so
          I enrolled in the Northcoders Coding Bootcamp to kickstart a new
          career in software development. The amazing course covered so much
          ground, and I was able to build on my existing knowledge to develop a
          deep understanding of web development. By the end of the course, I was
          pitching, planning, and then building full-stack apps! When I'm not
          working on my latest programming project, you can find me enjoying a
          delicious slice of pizza or spending time with my beloved pug Ivy in
          the great outdoors.
        </div>
        <div className="col-span-1 ">
          <div className="col-span-1 ">
            <img src={Ivy} alt="my pug, ivy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
