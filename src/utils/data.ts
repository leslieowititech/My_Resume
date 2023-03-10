import { ExperienceProps } from "./types";
export type ResumeData = {
  coinbaseData: ExperienceProps;
  varsityTutorsData: ExperienceProps;
};

export const education: {
  institutionName: string;
  details: string[];
}[] = [
  {
    institutionName: "App Academy",
    details: [
      "Learned how to design and maintain SQL based databases",
      "Learned how to build RESTful API's",
    ],
  },
  {
    institutionName: "Otis College of Art and Design",
    details: ["Learned principles of design"],
  },
];

export const skills: string[] = [
  "JavaScript",
  "React.js",
  "React Native",
  "Redux.js",
  "Python",
  "HTML5",
  "CSS3",
  "Git",
  "PostgreSQL",
  "Flask",
  "Sequelize",
  "Jinja",
  "APIs",
  "Docker",
  "TypeScript",
  "GraphQl",
  "Nextjs",
  "Solidity",
  "Smart Contracts",
];

export const profesionalSummary = `Dedicated and efficient full stack developer with 3+ years’ experience in application layers, presentation layers, and databases. Adept at
designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Skilled with a
variety of programming languages and frameworks, including: HTML, CSS, JavaScript, React, Redux.js, Python, and PostgreSQL. I am
comfortable working with both relational and non-relational databases. I am also experienced in managing server infrastructure and
deployments.`;

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
    startDate: "Sept 2021",
    endDate: "",
    teams: [
      {
        name: "Software Engineering Tutor",
        bulletPoints: [
          "Tutored students ranging from high school on programming languages such as Python, JavaScript and SQL Taught student on web development from scratch to a fully deployed website.",
          "Helped students set up environments such as installing PostgreSQL with Postbird to help with database management, install python and setup pipenv, set up Node with WSL for Windows users and homebrew for Mac OS users.",
          "Assisted students write documentation for their projects such as a Wiki on their GitHub repository. Taught version control by explaining Git workflows.",
          "Taught full-stack development specifically the PERN stack i.e PostgreSql, Express.js, React.js, and Node.js.",
          "Taught Python specifically, the Flask framework to build out RestFul API’s. Taught SQL, specifically, how to create, modify and populate databases, as well as make simple and complex queries utilizing aliasing, JOIN statements and SELECT statements.",
          "Assisted students achieve beautiful websites by explaining CSS concepts as well as assisting the students to implement vanilla css utilizing flexbox and grid.",
        ],
      },
    ],
  },
};
