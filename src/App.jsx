import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Experience from "./components/experience/experience.jsx";

function App() {
  
  return (
   
    <>
      <div className="appContainer">
        <NavBar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
