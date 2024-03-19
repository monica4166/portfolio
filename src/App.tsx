import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div style={{ margin: "2%", padding: "1%" }}>
        <Navigation />
      </div>

      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
