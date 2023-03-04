import React from "react";

import { profesionalSummary } from "../../../utils/data";

const ProfesionalSummary = () => {
  return (
    <>
      <h2>PROFESSIONAL SUMMARY</h2>
      <section className="resume-section">
        <p>{profesionalSummary}</p>
      </section>
    </>
  );
};

export default ProfesionalSummary;
