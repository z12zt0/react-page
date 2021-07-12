function BreakSet({ setMinutes=f=>f, initialBreak }) {
    console.log(initialBreak);
    return (
        <div id="break-label" className="time-block enabled">
            <p>Break Clock</p>
            <br />
            <div onClick={e => setMinutes(e.target.id)}>
                <button className="big-button" id="break-decrement">-</button>
                <span id="break-length">{initialBreak}</span>
                <button className="big-button" id="break-increment">+</button>
            </div>
        </div>
    );
};

export default BreakSet;