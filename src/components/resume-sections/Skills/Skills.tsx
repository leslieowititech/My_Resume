import React from "react";
import { skills } from "../../../utils/data";

const Skills = () => {
  return (
    <>
      <h2>PROFESSIONAL SKILLS</h2>
      <section className="resume-section">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className={`skill-item`}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;
