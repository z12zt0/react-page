import './App.css';
import { useState } from "react";
import Calc from "./Calc.js";

const data = {
  nums: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
  ops: ["/", "*", "-", "+"],
  ids: {
      7: "seven",
      8: "eight",
      9: "nine",
      4: "four",
      5: "five",
      6: "six",
      1: "one",
      2: "two",
      3: "three",
      0: "zero",
      "/": "divide",
      "*": "multiply",
      "-": "subtract",
      "+": "add",
      "=": "equals", 
      ".": "decimal",
      "AC": "clear"
  }
};


function MainCalc() {

  const [lastButton, setLastButton] = useState();
  const [calculated, setCalculated] = useState('0');

  function handleButton(button) {
          console.log(button);

          if (calculated === "Error" || calculated === "Infinity" || calculated === "NaN") {
              setCalculated("0");
              return;
          }

          switch(button) {
              case "AC":
                  setCalculated("0");
                  setLastButton();
                  break;
              case "=":
                  let result = null;
                  try {
                      result = eval(calculated);
                      if (result.toString().length >= 5) {
                        result = result.toFixed(5);
                      } /// this can give 0.00000, so idk about it
                      setCalculated(result.toString());
                  } 
                  catch(err) {
                      result = `Error`;
                      setCalculated(result);
                  }
                  break;
              case ".":
                  const splitted = calculated.split(/[+\-*/]/);
                  const last = splitted.slice(-1)[0];

                  if (!last.includes(".")) {
                      setCalculated(prev => prev + ".");
                  }
                  break;
              default:
                  let e = null; 
                  // check for several operators
                  if (data.ops.includes(button)) {
                      if (data.ops.includes(lastButton) && button !== "-") {
                          // here we go 
                          const lastNumberIdx = calculated.split('').reverse()
                              .findIndex(char => char !== " " && data.nums.includes(+char));
                          e = calculated.slice(0, calculated.length - lastNumberIdx) + ` ${button} `;
                      } else { 
                          
                          if (calculated.split(' ').reverse()[1] === "-" && button === "-") { // only one minus
                              return; 
                          }
                          e = ` ${calculated} ${button} `;
                      }
                  } else {
                      e = (calculated === "0") ? button : (calculated + button);
                  }

                  setCalculated(e);
          }
          setLastButton(button);

   }

  return (
      <div id="calc">
          <Calc buttonClick={button => handleButton(button)} current={calculated} data={data}/>
      </div>
  )
};

export default MainCalc;
