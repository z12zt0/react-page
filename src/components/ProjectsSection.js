import { Route, Switch, Link } from "react-router-dom";


function ProjectsSection({ data }) {
    return (
        <section className="main-section responsive-div" id="projects">
          <h2 className="responsive-text">Here are some of my projects:</h2>

          <div id="mainDiv__projects-grid">
            {Object.keys(data).map(cur => 
              <div className="mainDiv__projects-grid__project">
                <figure className="project-tile">
                  {/* {<a href={data[cur].link}>} */}
                  <Link to={data[cur].myLink}>
                    <img src={data[cur].img[0]} alt={data[cur].img[1]}></img>
                    <figcaption className="responsive-text">{data[cur].caption}</figcaption>
                  </Link>
                  {/* {</a>} */}
                </figure>
              </div>
            )}
          </div>
        </section>
    )
};

export default ProjectsSection;