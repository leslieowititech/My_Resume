import React, { useEffect, useState } from "react";

import Experience from "./Experience";

import { ExperienceProps } from "../../../utils/types";

interface EProps {
  experiences: ExperienceProps[];
}

const Experiences = ({ experiences }: EProps) => {
  const [jobExperiences, setJobExperiences] = useState<ExperienceProps[]>([]);

  useEffect(() => {
    setJobExperiences(experiences);
  }, [experiences]);
  return (
    <>
      <h2>WORK EXPERIENCE</h2>
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
    </>
  );
};

export default Experiences;
