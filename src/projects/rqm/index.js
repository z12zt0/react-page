import ReactDOM from "react-dom";
import Widget from "./Widget.js";
import App from "./App.js";


function QuoteApp() {
    return (
        ReactDOM.render(
            [<Widget key="1"/>,
            <App key="2" />],
            document.getElementById("root")
        )
    )
};

export default QuoteApp;

 