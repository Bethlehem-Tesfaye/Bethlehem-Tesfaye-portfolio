import React from "react";
import "./experience.css";

const Experience = () => {
  const skillsData = [
    {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP", "SQL"]
    },
    {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Tailwind CSS", "Node.js", "Express.js", "PHP", "MySQL", "MongoDB"]
    },
    {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Figma"]
    }
  ];

  return (
    <div className="skills-tech-container" id="exp">
      <h2 className="section-title">
        Skills <span>&</span> Technologies
      </h2>
      <div className="cards-container">
        {skillsData.map((section, index) => (
          <div className="skill-card" key={index}>
            <h3>{section.title}</h3>
            <div className="skills-list">
              {section.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
