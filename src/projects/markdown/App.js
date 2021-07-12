import './App.css';
import { React, useState } from "react";
import Editor from "./Editor.js";
import Previewer from "./Previewer.js";

function Markdown() {
  const [state, setState] = useState(`
Hi!
===
Let me show you some cool stuff
-------------------------------
For more detail info click [here](https://marked.js.org/)
We can do something like \`console.log("WOW!");\` this
Or even *cool* stuff like this:
\`\`\`
function wow(phrase="I hope this will work") {
console.log("Wow, " + phrase);
return wow(phrase);
};
(multi-line code)
\`\`\`
1. Also, we can make some lists
2. Continue them
1. Ah, I can't count
1. nevermind, keep moving
> There are also blockquotes here
- Even **two** of them!!!
If you want, you can use images in here:
![your random image](https://cdn.eso.org/images/thumb700x/eso1907a.jpg)
`);

  return (
      <div>
          <div id="root__header">
              <h1>Markdown testroom</h1>
              <p id="root__header_app">Powered by marked</p>
          </div>
          <div id="root__app">
              <Editor data={state} getData={(data) => setState(data)} />
              
              {/*state && <Previewer data={state}/> - no fun allowed */}
            <Previewer data={state}/>
          </div>
          
      </div>
  );
};

export default Markdown;
