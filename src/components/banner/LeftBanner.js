import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
// load the waiving.css file
import "./waiving.css";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Cloud Developer.",
      "DevOps Enthusiast.",
      "Creative.",
      "Servant Leader.",
      "Son.",
      "Brother.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
          Hello World!
          <span
            className="text-4xl waving-emoji"
            role="img"
            aria-label="Waving Hand Emoji"
          >
            {" "}
            &#x1F44B;
          </span>
        </h4>
<h1 className="text-4xl md:text-5xl lgl:text-6xl  font-bold text-white">
          Wubeshet Yimam <span className="text-designColor capitalize"></span>
        </h1>

        <h2 className="text-2xl md:text-4xl lgl:text-4xl font-bold text-designColor ">
          a <span className="uppercase">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00ACC1"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify text-last-center">
          I am a computer enthusiast currently pursuing Software Engineering at
          African Leadership Univeristy and learning to become a Servant Leader.
          I am passionate about building scalable and efficient software
          solutions. BTW, I consider myself as an introvert, but I love a deep
          and meaningful conversation with one person at a time.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/wubeshet" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </span>

            <span className="bannerIcon">
              <a href="https://www.github.com/wubeshetA" rel="noreferrer">
                <FaGithub />
              </a>
            </span>

            <span className="bannerIcon">
              <a href="https://www.instagram.com/wubeshet.y" rel="noreferrer">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
