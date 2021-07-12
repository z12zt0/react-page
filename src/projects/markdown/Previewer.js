import { useEffect } from "react";
import marked from "marked";

function Previewer({ data }) {
    console.log("Previewer's", data);
  
    if (!data) {
      data = ""; // no fun allowed, remember? 
    }  
    
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
  
    const markdown = marked(data);
    
    useEffect(() => {
        const final = document.getElementById("preview");
        final.innerHTML = markdown;
    }, [data]);

    return (
        <div id="preview">
            
        </div>
    );
};

export default Previewer;