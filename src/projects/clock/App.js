import './App.css';
import { useState, useRef } from "react";
import MainCountdown from "./MainCountdown.js"
import SessionSet from "./SessionSet.js"; 
import BreakSet from "./BreakSet.js"; 

function Clock() {
  let [seconds, setSeconds] = useState(0);
  let [delay, setDelay] = useState(null);
  let [initialTime, updateInitialTime] = useState({session: 25, break: 5});
  
  let resetPing = useRef(false);

  Audio.prototype.stop = function() {
    this.pause();
    this.currentTime = 0;
  }
  
  function setMinutes(elementId) {
    setSeconds(0);
      
    if (elementId === "session-increment" && initialTime.session < 60) {
      updateInitialTime(prev => ({...prev, session: ++initialTime.session}));
      
    } else if (elementId === "session-decrement" && initialTime.session > 1) {
      updateInitialTime(prev => ({...prev, session: --initialTime.session}));
      
    } else if (elementId === "break-increment" && initialTime.break < 60) {
      updateInitialTime(prev => ({...prev, break: ++initialTime.break}));
      
    } else if (elementId === "break-decrement" && initialTime.break > 1){
      updateInitialTime(prev => ({...prev, break: --initialTime.break}));
    }
  }

  function controlButtons(type, e) {
    
    if (type === "reset") {

      resetPing.current = !resetPing.current;
      setDelay(null);
      
      updateInitialTime({session: 25, break: 5});
      // for the sound
      document.getElementById("beep").classList.remove("false");
      document.getElementById("beep").stop();
      //for animateStart();
      document.getElementById("session-label").classList.remove("disabled");
      document.getElementById("break-label").classList.remove("disabled");

      document.getElementById("session-label").classList.add("enabled");
      document.getElementById("break-label").classList.add("enabled");

      console.log("Reseted")
    } else if (type === "start_stop") {
      delay ? setDelay(null) : setDelay(1000);
      
      animateStart();
    }
  }
  function triggerAudio() {
    console.log("BEEP");
    let audio = document.getElementById("beep");

    if (!audio.classList.contains("false")) {
      audio.play();
      audio.classList.add("false");

      setTimeout(() => {
        audio.classList.remove("false");
      }, 3000);
    }
  };
  

  function animateStart() {

    let sessionSetter = document.getElementById("session-label");
    let breakSetter = document.getElementById("break-label");

    if (!sessionSetter.classList.contains("disabled")) {
      sessionSetter.classList.remove("enabled");
      breakSetter.classList.remove("enabled");

      sessionSetter.classList.add("disabled");
      breakSetter.classList.add("disabled");

    } else {
      sessionSetter.classList.remove("disabled");
      breakSetter.classList.remove("disabled");

      sessionSetter.classList.add("enabled");
      breakSetter.classList.add("enabled");      
    }
  }
 
  console.log("In App:", initialTime.session, initialTime.break);
  return (
    <div id="app-holder">
      <nav id="navbar">
        <p>Pomodoro Clock</p>
      </nav>
      <SessionSet setMinutes={setMinutes} initialSession={initialTime.session}/>
      <MainCountdown  sessionTime={initialTime.session}
                      breakTime={initialTime.break}
                      seconds={seconds}
                      controlFunc={controlButtons}
                      audioFunc={triggerAudio}
                      delay={delay}
                      resetPing={resetPing.current}
                      />
      <BreakSet setMinutes={setMinutes} initialBreak={initialTime.break}/>
      <audio id="beep" // thank you freeCodeCamp :)
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
      </audio>
    </div>
  );
};

export default Clock;
