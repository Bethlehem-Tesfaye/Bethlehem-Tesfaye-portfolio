import "./hero.css";
import pp from "../../assets/pp.png";
function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroLeft">
        <p className="intro fade-in-left">HI, I'M BETHLEHEM</p>
        <p className="description fade-in-left delay">
          I'm a passionate Computer Science student. <br /> I enjoy building
          thoughtful, full-stack web applications <br /> and continuously
          learning technologies.
          <br />
          Reach out if you’d like to know more!
        </p>
        <div>
        <button className="heroBtn fade-in-left delay-2"><a href="mailto:bethlehem.tesfaye15@gmail.com">Contact Me</a></button> 
        <button className="heroBtn fade-in-left delay-2"><a href="https://1drv.ms/w/c/4853efb02749f323/EbuI10kSlP9GnS84EtQt8KMBOoicC094zbm4DrNkbElhMQ?e=eZbf2n" target="_blank">See resume</a></button>
        </div>
      </div>
      <div className="heroRight">
        <div className="box fade-in-right">
          <img src={pp} alt="h" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
