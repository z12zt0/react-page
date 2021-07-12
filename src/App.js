import './App.css';
import projectsData from "./projectsData.js";
import Navbar from './components/Navbar.js';
import AboutSection from './AboutSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import ContactSection from './components/ContactSection';
import { Switch, Route } from 'react-router-dom';

import MainCalc from "./projects/calc/App.js";
import Clock from "./projects/clock/App.js";
import Markdown from "./projects/markdown/App.js";
import QuoteApp from "./projects/rqm/index.js";
import Drum from "./projects/drum/App.js";


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
      window.location.href = `/#${url.toLowerCase()}`;
    }, 0);
    return null;
  };
  // will use dynamic names for components later, for now this should work
  // bug - footer is fucked in the apps
  // 2 - change all the css files -> they are messing with each other
  // 3 - delete or move navbar in the pomodoro clock
  // 4 - READ BEM (and thank you for trying to use it in markdown.js)

  let navArray = ["About", "Projects", "Contacts"];

  return (
  <div id="bodyDiv" className="light">
    <Navbar data={navArray} switchFunc={switchFunc} handleReroute={handleReroute}/>
    <main>
        <Switch>
          <Route path={"/calc"}>
            <MainCalc />
          </Route>
          <Route path={"/clock"}>
            <Clock />
          </Route>
          <Route path={"/markdown"}>
            <Markdown />
          </Route>
          <Route path={"/random-quote-machine"}>
            <QuoteApp />
          </Route>
          <Route path={"/drum"}>
            <Drum />
          </Route>
          <Route path="/">
            <AboutSection />
            <ProjectsSection data={projectsData}/>
            <ContactSection />
          </Route>
        </Switch>

        <footer className="responsive-div">
            <p className="responsive-text">2020 - {new Date().getFullYear()}</p>
        </footer>
    </main>
  </div>
  );
};

export default App;
