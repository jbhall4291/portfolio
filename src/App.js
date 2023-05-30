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
import Hundredpushups from "./components/Projects/Hundredpushups";
import NotFound from "./components/NotFound";

function App() {
  return (
    // <div className="overflow-y-scroll">
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Hero />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/skills" element={<Skills />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //     <Footer />
    //   </Router>
    // </div>

    <div className="flex min-h-screen flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/newsbuzz" element={<Newsbuzz />} />
            <Route path="/projects/fanfinder" element={<Fanfinder />} />
            <Route
              path="/projects/hundredpushups"
              element={<Hundredpushups />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
