import "./App.css";
import { useEffect } from "react";
import Box from "./Box.js";
import data from "./data.js";

function Drum() {

    // let dataF = data;

    function eventHandler(target) {
        target.parentNode.classList.add("active"); // current audio -> parent (div) -> className = active
        target.play(); // audio.play()

        target.addEventListener("ended", () => {
            target.parentNode.classList.remove("active"); // same thing, different action
        });
    }

    useEffect(() => {
        let toRemove = document.addEventListener("keydown", (e) => {
            const id = e.key.toUpperCase();
            const audio = document.getElementById(id);

            if (audio) {
                getCurrentSound(id); // too bad
                eventHandler(audio);
            }
        });
        return () => document.removeEventListener("keydown", toRemove); // the only good thing here
    }, [])

    function handleClick(element, key) {
    
        console.log(element, key);
        eventHandler(element);
        getCurrentSound(key);
    };

    function getCurrentSound(id) { // maybe have to do something like a debounce decorator
        
        if (id) {
            console.log("NOW PLAYING - " + id);
            document.getElementById("display").innerText = id;
        } // there is the different way of doing this - this one is soooo bad
          // maybe could add eventListener to the container and
          // react differently on the given event object
    }

    return (
        <div id="drum-machine">
            <div id="display">
                {getCurrentSound()}
            </div>

            <div id="drum-pad-holder">
                {data.map((current, i) => 
                    <Box key={i} {...current} handleClick={handleClick}/>)}  {/*className - drum-pad, unique id*/}
            </div>
        </div>
    );
};

export default Drum;