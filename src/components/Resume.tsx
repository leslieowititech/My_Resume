import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import { ExperienceProps } from "../utils/types";

interface EProps {
  experiences: ExperienceProps[];
}

const Resume = ({ experiences }: EProps) => {
  const [jobExperiences, setJobExperiences] = useState<ExperienceProps[]>([]);
  useEffect(() => {
    setJobExperiences(experiences);
  }, [experiences]);
  return (
    <div>
      {jobExperiences.map((data, index) => (
        <Experience
          companyName={data.companyName}
          startDate={data.startDate}
          endDate={data.startDate}
          teams={data.teams}
          key={index}
        />
      ))}
    </div>
  );
};

export default Resume;
