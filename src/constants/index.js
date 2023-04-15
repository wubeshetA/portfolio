import React from "react";
// import icons from react/icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
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
    _id: 1004,
    title: "Resume",
    link: "resume",
  },

  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },

  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },
];

export const skillsData = [
  {
    _id: 2001,
    title: "HTML",
    percentage: "90%",
    icon: <FaHtml5 className="text-5xl text-designColor"/>,
  },
  {
    _id: 2002,
    title: "CSS",
    percentage: "80%",
    icon: <FaCss3Alt className="text-5xl text-designColor" />,
  },
  {
    _id: 2003,
    title: "JavaScript",
    percentage: "70%",
    icon: <FaJs className="text-5xl text-designColor"/>,
  },
  {
    _id: 2004,
    title: "Python",
    percentage: "85%",
    icon: <FaPython className="text-5xl text-designColor"/>,
  },
];
