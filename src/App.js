import './App.css';
import projectsData from "./projectsData.js";
import Navbar from './components/Navbar.js';
import AboutSection from './AboutSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import ContactSection from './components/ContactSection';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainCalc from "./projects/calc/App.js";
import Clock from "./projects/clock/App.js";
import Markdown from "./projects/markdown/App.js";
import QuoteApp from "./projects/rqm/index.js";
import Drum from "./projects/drum/App.js";
import WeatherApp from "./projects/weather/components/App.js";


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
  function handleReroute(url) {
    setTimeout(() => {
      window.location.href = `/#bodyDiv__${url.toLowerCase()}`;
    }, 0);
    return null;
  };

  const navArray = ["About", "Projects", "Contacts"];

  return (
  <div id="bodyDiv" className="light">
    <Navbar data={navArray} switchFunc={switchFunc} handleReroute={handleReroute}/>
    
    <main>
        <Routes>
          <Route path={"calc"} element={<MainCalc />} />
          <Route path={"clock"} element={<Clock />} />
          <Route path={"markdown"} element={<Markdown />} />
          <Route path={"random-quote-machine"} element={<QuoteApp />} />
          <Route path={"drum"} element={<Drum />} />
          <Route path={"weather-app/*"} element={<WeatherApp />} />
          <Route path="/" element={
              <div>
                <AboutSection />
                <ProjectsSection data={projectsData}/>
                <ContactSection />
              </div>
          } />
          <Route path="*" element={<Navigate to="/"/>} ></Route>
        </Routes>

        <footer className="responsive-div">
            <p className="responsive-text">2021 - {new Date().getFullYear()}</p>
        </footer>
    </main>
  </div>
  );
};

export default App;
