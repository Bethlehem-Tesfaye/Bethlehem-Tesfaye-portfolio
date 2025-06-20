import "./about.css";
import about from "../../assets/about.png";
import cursor from "../../assets/cursor.png";
import server from "../../assets/server.png";
import edu from "../../assets/edu.png";
import ui from "../../assets/ui.png";
function About() {
  return (
    <div className="aboutContainer" id="about">
      <h2>About</h2>
      <div className="aboutBox">
        <div className="aboutleft">{/* <img src={about} alt="about" /> */}</div>
        <div className="aboutRight">
          <div className="about">
            <img src={edu} alt="" />
            <div>
              <p>Education</p>
            <p>
              I'm a Computer Science student at Addis Ababa University,
              currently pursuing my BSc degree with a CGPA of 3.73. I'm expected
              to graduate in 2026.
            </p>
          </div>
            </div>


          <div className="about">
            <img src={cursor} alt="cursor" />
            <div>
              <p>Frontend Developer</p>
              <p>
                Skilled in building responsive and user-friendly websites with
                attention to detail and performance.
              </p>
            </div>
          </div>
          <div className="about">
            <img src={server} alt="server" />
            <div>
              <p>Backend Developer</p>
              <p>
                Experienced in developing backend functionality using the MERN
                stack and PHP, with a focus on creating efficient APIs and
                server-side solutions.
              </p>
            </div>
          </div>
          <div className="about">
            <img src={ui} alt="ui" />
            <div>
              <p> UI Designer</p>
              <p>
                Designed landing pages and created design systems that enhance
                user experience and consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
