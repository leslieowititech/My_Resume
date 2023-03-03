import React from "react";
import { ExperienceProps } from "../utils/types";
import "./experience.css";

const Experience = ({
  companyName,
  startDate,
  endDate,
  teams,
}: ExperienceProps) => {
  return (
    <div className="experience-card">
      <section className="company-title-and-dates">
        <h3 className="company-title">{companyName}</h3>
        <h3 className="start-date">{startDate}</h3>
        <h3 className="end-date">{endDate ? endDate : "Current"}</h3>
      </section>
      {teams.map((team, index) => (
        <div key={index}>
          <h4>{team.name}</h4>
          {team.bulletPoints.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
