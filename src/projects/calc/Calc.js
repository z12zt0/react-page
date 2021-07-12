import { useRef } from "react";

function Calc({ buttonClick=f=>f, current, data}) {

    const num = useRef();

    const symbolsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", ".", "AC", "="];

    function handleClick(num) {
        return buttonClick(num.target.innerHTML);
    }


    return (
        <>
            <div className="button display" id="display">{current}</div>
            {symbolsArray.map((cur, i) => 
                <div key={i} className="button"
                  onClick={(num) => handleClick(num)}
                  id={data["ids"][cur]}>
                                {cur}
                </div>)
            }
            
        </>
    );
};

export default Calc;