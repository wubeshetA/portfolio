import { projectOne, projectThree, projectTwo, projectFour } from "../../assets/index";
export const projectList = [
  {
    _id: 1001,
    title: "AirBnB clone",
    img: projectOne,
    category: "Backend Developement",
    date: "Feb - Apr 2023",
    live_link: "",
    github_link: "https://github.com/wubeshetA/alu-AirBnB_clone_V3",
    description:
      "This project is a replica of how the back of AirBnb might looks like. It provides an adminstrative console to manage the backend and database for a website like AirBnb. Currently the frontend is under development which will allow users to create an account, login, logout, create a new place, update a place, delete a place, view all places, places by city, etc.",
    tech: ["Python", "MySql"],
  },

  {
    _id: 1002,
    title: "ALU Opprotunities Board",
    img: projectTwo,
    category: "Fullstack development",
    date: "Mar - Apr 2023",
    live_link: "",
    github_link: "https://github.com/ALU-Opportunity-Board/opportunity-board",
    description:
      "ALU opportunities board is a platform that allows  African Leadership University students and staff to post opportunities they have come across. It also allows students to view opprotunities posted by other students. It has google authentication which allows ALU students to access the platform.",
    tech: ["Python", "Postgres", "React"],
  },

  {
    _id: 1003,
    title: "Serverless App",
    img: projectThree,
    category: "Cloud Develpment",
    date: "March 2023",
    live_link: "",
    github_link: "https://github.com/wubeshetA/serverless-rest-api",
    description:
      "This is my final project for my cloud computing Nanodegree at Udacity. It is a serverless REST API hosted on AWS which allow users to create, update, delete and view images on S3 bucket. It is built using the serverless framework and uses AWS Lambda, DynamoDB, API Gateway and S3. ",
    tech: ["TypeScript", "Serverless framework", "AWS"],
  },

  {
    _id: 1004,
    title: "Portfolio Website",
    img: projectFour,
    category: "Web Developement",
    date: "March 2023",
    live_link: "",
    github_link: "https://github.com/wubeshetA/portfolio2",
    description:
      "If you are reading this, you are already on my portfolio website. I built this website using React and Tailwindcss. If you enjoy the look, have also a look at the source code and let me know what you think.",
    tech: ["React", "Tailwindcss"],
  },
];
