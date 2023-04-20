import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { About } from "./components/About.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
