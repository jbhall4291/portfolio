import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound404 from "./pages/NotFound404";
import ScrollToTop from "./components/ScrollToTop";
import ProjectPage from "./components/ProjectPage";


function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <ScrollToTop />

        <Header />

        <div className="mt-24 flex flex-grow items-center justify-center md:mt-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:project_id" element={<ProjectPage />} />
            <Route path="/*" element={<NotFound404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
