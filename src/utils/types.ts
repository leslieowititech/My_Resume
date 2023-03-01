export type ExperienceProps = {
  companyName: string;
  startDate: string;
  endDate: string;
  teams: {
    name: string;
    bulletPoints: string[];
  }[];
};
