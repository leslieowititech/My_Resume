import { ExperienceProps } from "./types";
export type ResumeData = {
  coinbaseData: ExperienceProps;
  varsityTutorsData: ExperienceProps;
};

export const data: ResumeData = {
  coinbaseData: {
    companyName: "Coinbase",
    startDate: "Jan 2022",
    endDate: "Jan 2023",
    teams: [
      {
        name: "Card Team",
        bulletPoints: [
          "Worked on company documentation to help streamline the onboarding process in line with ‘Act Like an Owner’ tenet at Coinbase when I found some shortcomings",
          "Utilized React Native and React to build UI elements as well as actualize new pages that were released the design team",
          "Used Agile methodology with JIRA to update and complete tickets",
          "Made use of GraphQl to fetch data from the backend in order to utilize it on different components and also to avoid refetching where possible where refetching was not necessary Ensured internationalization of the text in all UI for the card team",
          "Evangelized the Coinbase Card by using in my day-to-day shopping as well as encouraging friends to take a look at it in efforts to grow the usage of the product as a team.",
          "Worked with the deposit team to fix a bug I identified when using my card where available balance was not commensurate to what was actually available to spend on your card as well as various other UI bugs.",
        ],
      },
      {
        name: "OnRamp Team",
        bulletPoints: [
          "Slowly rolled out new UIs using Nextjs through experiments with different versioning.",
          "Fixed UI bugs to ensure a good user experience across multiple devices",
        ],
      },
    ],
  },
  varsityTutorsData: {
    companyName: "Varsity Tutors",
    startDate: "2021",
    endDate: "2022",
    teams: [
      {
        name: "Software Engineering Tutor",
        bulletPoints: [
          "Tutored students ranging from high school on programming languages such as Python, JavaScript and SQL Taught student on web development from scratch to a fully deployed website.",
          "Helped students set up environments such as installing PostgreSQL with Postbird to help with database management, install python and setup pipenv, set up Node with WSL for Windows users and homebrew for Mac OS users.",
        ],
      },
    ],
  },
};
