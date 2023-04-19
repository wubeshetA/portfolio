import React from "react";
// import icons from react/icons
import { FaHtml5, FaLinux, FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import {
  SiFlask,
  SiFlutter,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

// python, nodejs, linux, html5, tailwindcss, reactjs, postgresql, mysql, flask, git, docker, kubernetes, aws, serverless framework, Figma
// industry knowledge - agile,
export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "About",
    link: "about",
  },

  {
    _id: 1002,
    title: "Services",
    link: "services",
  },

  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
  },

  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },
];
// python, nodejs, linux, html5, tailwindcss, reactjs, postgresql, mysql, flask, git, docker, kubernetes, aws, serverless framework, Figma
// industry knowledge - agile,
export const skillsData = [
  {
    _id: 2001,
    title: "Python",
    percentage: "85%",
    icon: <FaPython className="text-5xl text-designColor" />,
  },
  {
    _id: 2002,
    title: "JavaScript",
    percentage: "75%",
    icon: <FaJs className="text-5xl text-designColor" />,
  },
  {
    _id: 2016,
    title: "SQL",
    percentage: "80%",
    icon: <TbSql className="text-5xl text-designColor" />,
  },
  {
    _id: 2003,
    title: "Linux",
    percentage: "75%",
    icon: <FaLinux className="text-5xl text-designColor" />,
  },
  {
    _id: 2004,
    title: "HTML5/CSS3",
    percentage: "90%",
    icon: <FaHtml5 className="text-5xl text-designColor" />,
  },
  {
    _id: 2006,
    title: "React",
    percentage: "70%",
    icon: <FaReact className="text-5xl text-designColor" />,
  },

  {
    _id: 2007,
    title: "PostgreSQL",
    percentage: "75%",
    icon: <SiPostgresql className="text-5xl text-designColor" />,
  },
  {
    _id: 2008,
    title: "MySQL",
    percentage: "70%",
    icon: <SiMysql className="text-5xl text-designColor" />,
  },
  {
    _id: 2009,
    title: "Flask",
    percentage: "80%",
    icon: <SiFlask className="text-5xl text-designColor" />,
  },
  {
    _id: 2010,
    title: "Git",
    percentage: "70%",
    icon: <FaGit className="text-5xl text-designColor" />,
  },

  {
    _id: 2011,
    title: "Docker",
    percentage: "70%",
    icon: <FaDocker className="text-5xl text-designColor" />,
  },
  {
    _id: 2012,
    title: "AWS",
    percentage: "65%",
    icon: <FaAws className="text-5xl text-designColor" />,
  },
  {
    _id: 2013,
    title: "Kubernetes",
    percentage: "60%",
    icon: <SiKubernetes className="text-5xl text-designColor" />,
  },
  {
    _id: 2014,
    title: "Figma",
    percentage: "70%",
    icon: <FaFigma className="text-5xl text-designColor" />,
  },
  {
    _id: 2015,
    title: "Flutter",
    percentage: "65%",
    icon: <SiFlutter className="text-5xl text-designColor" />,
  },
];

export const skillsData2 = [
  {
    _id: 2050,
    title: "Effective Communication",
    percentage: "80%",
  },
  {
    _id: 2051,
    title: "Professional Writing",
    percentage: "80%",
  },
  {
    _id: 2052,
    title: "Critical Thinking",
    percentage: "85%",
  },
  {
    _id: 2053,
    title: "Teaching/Facilitation",
    percentage: "70%",
  },
  {
    _id: 2054,
    title: "Team Work",
    percentage: "80%",
  },
  {
    _id: 2055,
    title: "Leadership",
    percentage: "75%",
  },
];
