import { useRouteMatch } from "react-router-dom";

function Project() {
    let match = useRouteMatch();

    return (
        <div>
            <h1>{match.url}</h1>
            
        </div>
    )
}


export default Project;