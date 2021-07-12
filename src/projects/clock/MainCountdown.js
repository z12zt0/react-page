import { useState, useRef, useEffect } from "react";  
import useInterval from "./useInterval.js";

function MainCountdown({ sessionTime,
                        breakTime,
                        seconds,
                        controlFunc=f=>f,
                        audioFunc=f=>f,
                        delay,
                        resetPing
                        }) {

    console.log("Session and break: ", sessionTime, breakTime);


    let [currentSession, setCurrentSession] = useState(sessionTime);
    let [currentBreak, setCurrentBreak] = useState(breakTime);
    let [currentState, setCurrentState] = useState("Session Time");
    let [currentSeconds, setCurrentSeconds] = useState(0);

    let [actualTimer, setActualTimer] = useState(sessionTime * 60);

    let breakFlag = useRef(false);

    useEffect(() => { // if any changes come from the App component, we have to reset the whole thing
        setCurrentSession(sessionTime);
        setCurrentBreak(breakTime);
        setCurrentSeconds(0);
        setCurrentState("Session Time");

        setActualTimer(sessionTime * 60);
        breakFlag.current = false;
    }, [sessionTime, breakTime, resetPing]);

    function getTime(currentSession, currentBreak, currentSeconds) {

        if (currentSeconds !== 0 && actualTimer !== 0) {
            setCurrentSeconds(prev => --prev);
            if (!breakFlag.current) {
                setCurrentState("Session Time");
            } 
        } else { // seconds === 0;
            if (!breakFlag.current) {
                setCurrentSession(prev => --prev);
                setCurrentState("Session Time")
            } else {
                setCurrentBreak(prev => --prev);
                setCurrentState("Break Time");
            }
            setCurrentSeconds(59);
        }
    };

    function defineTimer() {
        if (!breakFlag.current) {
            return currentSession;
        } else {
            return currentBreak;
        }
    };

    useInterval(() => {

        if (actualTimer === 0 && !breakFlag.current) {
            console.log("actual timer was changed!")
            audioFunc();
            setActualTimer(breakTime * 60);
            breakFlag.current = true;
        }

        else if (actualTimer === 0 && breakFlag.current) {
            audioFunc();
            /// but why is this thing not working!
            setCurrentSession(sessionTime);
            setCurrentBreak(breakTime);
            setActualTimer(sessionTime * 60);
            breakFlag.current = false;
            setCurrentState("Session Time");
            console.log("Over")
            return;
        }
        getTime(currentSession, currentBreak, currentSeconds);

        setActualTimer(prev => prev - 1);
    }, delay);

    // console.log(currentSession, currentBreak, currentSeconds, currentState);
    console.log("actual timer: ", actualTimer);
    console.log("breakFlag ", breakFlag.current)
    console.log(`actualTimer === 0 && !breakFlag`);
    console.log(actualTimer === 0 && !breakFlag);

    return (
    <div id="main-timer" className="time-block">
        <span id="timer-label">{currentState}</span>
        <br />
        <p id="time-left">{defineTimer() < 10 ? "0" + defineTimer() : defineTimer()}
            :
            {currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}
        </p>

        <br />
        <div onClick={e => controlFunc(e.target.id)}>
            <button id="start_stop">Pause/Play</button>
            <button id="reset">Reset</button>
        </div>
    </div>
    );
};

export default MainCountdown;