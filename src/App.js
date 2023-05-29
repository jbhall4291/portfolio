import "./App.css";

// import { About } from "./components/About/About.js";
// import { Skills } from "./components/Skills/Skills.js";
import { Projects } from "./components/Projects/Projects";
// import { Hero } from "./components/Hero/Hero";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testing from "./components/Testing";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Testing /> */}
      <About />
      {/* <About /> */}
      <Skills />
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
