import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { About } from "./components/About/About.js";
import { Skills } from "./components/Skills/Skills.js";
import { Projects } from "./components/Projects/Projects.js";
import { Hero } from "./components/Hero/Hero";
import { Contact } from "./components/Contact/Contact";
import { ButtonTest } from "./components/ButtonTest";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ButtonTest /> */}
      <Contact />
      <Button text="hooray" href="https://www.google.com" />
    </>
  );
}

export default App;
