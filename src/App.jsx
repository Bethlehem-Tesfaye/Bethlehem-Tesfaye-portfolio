import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/experience/Skills.jsx";

function App() {
  
  return (
   
    <>
      <div className="appContainer">
        <NavBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
