import React, { useEffect, useState } from "react";

import Experience from "./Experience";
import { ExperienceProps } from "../utils/types";
import { skills } from "../utils/data";
import "./resume.css";

interface EProps {
  experiences: ExperienceProps[];
}

const Resume = ({ experiences }: EProps) => {
  const [jobExperiences, setJobExperiences] = useState<ExperienceProps[]>([]);

  useEffect(() => {
    setJobExperiences(experiences);
  }, [experiences]);
  return (
    <div className="resume-container">
      <h1>PROFESSIONAL SKILLS</h1>

      <section className="resume-section">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`skill-item`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <h1>WORK EXPERIENCE</h1>
      <section className="resume-section">
        {jobExperiences.map((data, index) => (
          <Experience
            companyName={data.companyName}
            startDate={data.startDate}
            endDate={data.endDate}
            teams={data.teams}
            key={index}
          />
        ))}
      </section>
    </div>
  );
};

export default Resume;
