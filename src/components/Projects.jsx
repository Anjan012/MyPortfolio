import { Link } from "react-router";
import "./Projects.css";

export const Projects = ({projectRef}) => {
    return (
        <>
            <section className="projects " ref={projectRef} >
                <div className="projects-content">
                    <div className="projects-text">
                        <h1>My projects</h1>
                    </div>
                    <div className="projects-card-container">
                        <div className="projects-card">
                            <p>Javascript</p>
                            <h2>Weather App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                            <Link to="https://anjan012.github.io/Weather-app/" target="/">
                            <button>View Project</button>
                            </Link>
                        </div>
                        <div className="projects-card projects-middle-card">
                            <p>php</p>
                            <h2>Blog website</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                            <Link to="/blog-website">
                            <button className="btn-black">View Project</button>
                            </Link>
                        </div>
                        <div className="projects-card">
                            <p>Wordpress</p>
                            <h2> Ecommerce </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                            <Link to="/ecommerce">
                            <button>View Project</button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}