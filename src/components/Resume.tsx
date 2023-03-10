import React from "react";

import Experiences from "./resume-sections/Experience/Experiences";
import Skills from "./resume-sections/Skills/Skills";
import ProfesionalSummary from "./resume-sections/ProfessionalSummary/ProfessionalSummary";
import Header from "./resume-sections/Header/Header";
import Education from "./resume-sections/Education/Education";

import { data } from "../utils/data";
import "./resume.css";

const Resume = () => {
  const experiences = Object.values(data);

  return (
    <div className="resume-container">
      <Header/>
      <ProfesionalSummary />
      <Skills />
      <Experiences experiences={experiences} />
      <Education/>
    </div>
  );
};

export default Resume;
