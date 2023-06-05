import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newsbuzz from "./components/Projects/Newsbuzz";
import Fanfinder from "./components/Projects/Fanfinder";
import OneHundredPressUps from "./components/Projects/OneHundredPressUps";
import NotFound404 from "./components/NotFound404";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <ScrollToTop />

        <Header />
        <div className="flex flex-grow items-center justify-center">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/newsbuzz" element={<Newsbuzz />} />
            <Route path="/projects/fanfinder" element={<Fanfinder />} />
            <Route
              path="/projects/onehundredpressups"
              element={<OneHundredPressUps />}
            />
            <Route path="/*" element={<NotFound404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
