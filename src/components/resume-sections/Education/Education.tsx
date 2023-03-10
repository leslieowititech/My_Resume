import React from "react";

import { education } from "../../../utils/data";

const Education = () => {
  return (
    <>
      <h2>EDUCATION</h2>
      <section className="resume-section">
        <section className="eduction-section">
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.institutionName}</h3>
              <section>
                <ul>
                  {edu.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Education;
