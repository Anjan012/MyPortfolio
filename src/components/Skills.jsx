import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.png";
import vcsIcon from "../assets/icons/vcs.svg";
import reactIcon from "../assets/icons/react.png";
import nodejsIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/expressjs.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import "./Skills.css";

export const Skills = () => {
    return (
        <>
            <section className="skills" >
                <div className="skills-content">
                    <div className="skills-text">
                        <p>Services</p>
                        <h1>Skills</h1>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-card">
                            <img src={htmlIcon} alt="" width={"60px"} className="html-icon"/>
                            <h3>HTML</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                        <div className="skills-card">
                            <img src={cssIcon} alt="" width={"60px"} className="css-icon"/>
                            <h3>CSS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                        <div className="skills-card">
                            <img src={jsIcon} alt="" width={"60px"} className="js-icon"/>
                            <h3>JavaScript</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                         <div className="skills-card">
                            <img src={vcsIcon} alt="" width={"60px"} className="vcs-icon"/>
                            <h3>Version Control System</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                         <div className="skills-card">
                            <img src={reactIcon} alt="" width={"60px"} className="react-icon"/>
                            <h3>React</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div> <div className="skills-card">
                            <img src={nodejsIcon} alt="" width={"60px"} className="nodejs-icon"/>
                            <h3>nodeJS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                         <div className="skills-card">
                            <img src={expressIcon} alt="" width={"60px"} className="express-icon"/>
                            <h3>ExpressJS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                         <div className="skills-card">
                            <img src={mongodbIcon} alt="" width={"60px"} className="mongodb-icon"/>
                            <h3>MongoDB</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero eveniet porro praesentium aliquid consequuntur culpa placeat. Quo obcaecati maxime id consequatur optio!</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}