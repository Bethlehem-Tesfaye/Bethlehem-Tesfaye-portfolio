import React from "react";
import mail from "../../assets/mail.png";
import link from "../../assets/link.png";
import git from "../../assets/git.png";

import "./contact.css";

function Contact() {
  return (
    <div className="cContainer" id="contact">
      <div className="cLeft">
        <h1>Contact</h1>
        <p>Please reach out for any further questions</p>
        <p>+251 973 840 133</p>
      </div>
      <div className="cRight">
        <div>
          <img src={mail} alt="mail logo" />
          <a href="mailto:bethlehem.tesfaye15@gmail.com">
            bethlehem.tesfaye15@gmail.com
          </a>
        </div>
        <br />
        <div>
          <img src={link} alt="linkedin logo" />
          <a href="https://www.linkedin.com/in/bethlehem-tesfaye-b267932a8/">
            linkedin.com/BethlehemTesfayez
          </a>
        </div>
        <div>
          <img src={git} alt="git logo" />
          <a href="https://github.com/Bethlehem-Tesfaye">
            github.com/Bethlehem-Tesfaye
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
