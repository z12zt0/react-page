import { Link } from "react-router-dom";


function ProjectsSection({ data }) {
    return (
        <section className="main-section responsive-div" id="bodyDiv__projects">
          <h2 className="responsive-text">Here are some of my projects:</h2>

          <div id="bodyDiv__projects__projects-grid">
            {Object.keys(data).map(cur => 
              <div className="bodyDiv__projects-grid__project">
                <figure className="project-tile">
                  {/* {<a href={data[cur].link}>} */}
                  <Link to={data[cur].myLink}>
                    <img className="project-tile__img" src={data[cur].img[0]} alt={data[cur].img[1]}></img>
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