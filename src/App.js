import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { About } from "./components/About/About.js";
import { Skills } from "./components/Skills/Skills.js";
import { ProjectsNew } from "./components/Projects/ProjectsNew";
import { Hero } from "./components/Hero/Hero";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsNew />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
