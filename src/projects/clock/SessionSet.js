function SessionSet({ setMinutes=f=>f, initialSession }) {
    console.log(initialSession);
      return (
          <div id="session-label" className="time-block enabled">
              <p>Session clock</p>
              <br />
              <div onClick={e => setMinutes(e.target.id)}> 
                  <button className="big-button" id="session-decrement">-</button>
                  <span id="session-length">{initialSession}</span>
                  <button className="big-button" id="session-increment">+</button>
              </div>
          </div>
        );
};

export default SessionSet;