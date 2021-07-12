import { useRef } from "react";

function Box({ keyPressed, color, src, handleClick=f=>f}) {

    const audio = useRef();

    const handlePress = () => {
        return handleClick(audio.current, keyPressed);
    };

    return ( 
        <div id={`${keyPressed}-pad`} onClick={handlePress} className="drum-pad" style={{ backgroundColor: color }}>
            {keyPressed}
            <audio src={src} ref={audio} id={keyPressed} className="clip"/>
        </div>
    );
};

export default Box;