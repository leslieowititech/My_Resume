import React from "react";

import Experiences from "./resume-sections/Experiences";
import Skills from "./resume-sections/Skills";
import ProfesionalSummary from "./resume-sections/ProfessionalSummary";

import { data } from "../utils/data";
import "./resume.css";

const Resume = () => {
  const experiences = Object.values(data);

  return (
    <div className="resume-container">
      <ProfesionalSummary />
      <Skills />
      <Experiences experiences={experiences} />
    </div>
  );
};

export default Resume;
