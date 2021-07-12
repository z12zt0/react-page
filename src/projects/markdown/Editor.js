import { useRef } from "react";

function Editor({data, getData=f=>f}) {
    const textarea = useRef("");

    function handleChange(e) {
        return getData(e.target.value);
    }
  
    return (
        <div id="root__app_editor">
            <textarea id="editor"
                    ref={textarea}
                    onChange={handleChange}
                    value={data}>
            </textarea>
        </div>
    );
};

export default Editor;