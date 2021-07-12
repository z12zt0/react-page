import './App.css';
import projectsData from "./projectsData.js";
import Navbar from './components/Navbar.js';
import AboutSection from './AboutSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import ContactSection from './components/ContactSection';


function App() {

  function switchFunc(e) {
    let body = document.getElementById("bodyDiv");
    let label = document.getElementById("switch-label");

    if (e.target !== label && e.target !== document.getElementById("switch")) {
      e.stopPropagation();
      return "";
    }
    if (body.classList.contains("light")) {
      body.classList.replace("light", "dark");
      label.innerText = "Dark theme";       
    } else {
      body.classList.replace("dark", "light");
      label.innerText = "Light theme";
    }
  };

  let navArray = ["About", "Projects", "Contacts"];

  return (
  <div id="bodyDiv" className="light">
    <Navbar data={navArray} switchFunc={switchFunc}/>
    <main>
        <AboutSection />
        <ProjectsSection data={projectsData}/>
        <ContactSection />

        <footer className="responsive-div">
            <p className="responsive-text">2020 - {new Date().getFullYear()}</p>
        </footer>
    </main>
  </div>
  );
};

export default App;
