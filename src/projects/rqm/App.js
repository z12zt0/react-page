import './App.css';
import { useState, useReducer, useLayoutEffect } from "react";
import Quotes from "./Quotes.js";
import Authors from "./Authors.js";
import ShareDiv from "./ShareDiv.js";
import NewQuoteButton from "./NewQuoteButton.js";
require('dotenv').config();

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [randomNumber, getRandomNumber] = useReducer(() => Math.floor(Math.random() * 50000), 1);

const key = "b7b00671bcb0db5df502204c2cb6ef3dd7400d90";

const backgrounds = [
  "#1771F1",
  "#052555",
  "#45D09E",
  "#41B619",
  "#FF756B",
  "#FF6B00",
  "#D8664D",
  "#EF2FA2",
  "#A854A5",
  "#7C3668",
  "#414042",
  "#231F20",
  "#4A586E",
  "#535353",
  "#1A2026",
  "#01142F"
];

  useLayoutEffect(() => {
      fetch(`https://api.paperquotes.com/apiv1/quotes/?limit=1&offset=${randomNumber}`, {
          headers: {
              Authorization: `Token ${key}`
          }  
      })
          .then(response => response.json())
          .then(json => setData(json.results[0]))
          .catch(console.error)
          .finally(setLoading(false));
  }, [randomNumber]);

  if (loading) {
      return <p>Loading...</p>
  }

  if (!data) {
      return <p>Loading... Please wait</p>
  }

  return (
      <div id="quote-box">
          <div id="quote-box__header">
              <Quotes quote={data.quote}/>
              <hr />
              <Authors {...data}/>
          </div>
          <div id="quote-box__buttons">
              <NewQuoteButton 
                              handleClick={() => {
                                  setLoading(true);
                                 
                                  const body = document.getElementById('quote-root');
                                  const index = Math.floor(Math.random()* backgrounds.length);
                                  
                                  body.animate(
                                      {
                                          backgroundColor: backgrounds[index],
                                          color: backgrounds[index]
                                      }, 600);

                                  setTimeout(() => {
                                      body.style.backgroundColor = backgrounds[index];
                                      body.style.color = backgrounds[index];
                                  }, 500);
                                 
                                 return getRandomNumber();  
                              }}
              />
              <ShareDiv {...data}/>
          </div>
          <p id="additional-text">Created using the PaperQuotes API - check it <a href="http://paperquotes.com/">here</a></p>
      </div>
  );
};

export default App;