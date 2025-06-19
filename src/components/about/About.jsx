import "./about.css";
import about from "../../assets/about.png";
import cursor from "../../assets/cursor.png";
import server from "../../assets/server.png";
import ui from "../../assets/ui.png";
function About() {
  return (
    <div className="aboutContainer" id="about">
        <h2>About</h2>
      <div className="aboutBox">
        <div className="aboutleft">
          {/* <img src={about} alt="about" /> */}
        </div>
        <div className="aboutRight">
          <div className="about">
            <img src={cursor} alt="cursor" />
            <div>
              <p>Frontend Developer</p>
              <p>
                I’m a front-end developer with experiencein building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="about">
            <img src={server} alt="server" />
            <div>
              <p>Backend Developer</p>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </div>
          <div className="about">
            <img src={ui} alt="ui" />
            <div>
              <p> UI Designer</p>
              <p>
                I have designed landing pages and have created design systems as
                well
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
