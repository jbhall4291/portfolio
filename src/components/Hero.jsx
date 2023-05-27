import { Profile } from "../images/";

const handleLinkClick = (event, target) => {
  event.preventDefault();
  const navbarHeight = document.querySelector("#header").offsetHeight;
  const element = document.querySelector(target);
  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

function Hero() {
  return (
    <section id="about" className="text-black">
      <div className="container mx-auto flex flex-col items-center px-10 py-5 md:flex-row md:py-20">
        <div className="order-2 mb-16 flex flex-col items-center text-center md:order-1 md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-highlight sm:text-4xl">
            Hi, I'm Johnny.
          </h1>
          <p className="mb-8 leading-relaxed md:text-lg">
            Full-stack software developer by day, and pizza enthusiast by night
            🍕
            <br />I love building cool stuff and learning new technologies 🎓
            <br />
            Whether it's front-end or back-end, I'm always up for a challenge 🚀
            <br />
            <br />
            I'm currently looking for an opportunity to contribute to a
            company's success, so if you're looking for a junior developer then
            get in touch & let's make something amazing!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              onClick={(event) => {
                handleLinkClick(event, "#contact");
              }}
              className="inline-flex rounded border-0 bg-green-500 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none md:text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(event) => {
                handleLinkClick(event, "#projects");
              }}
              className="ml-4 inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none md:text-center"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="order-1 w-5/6 md:order-2 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center "
            alt="hero"
            src={Profile}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
