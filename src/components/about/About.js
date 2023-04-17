import React from "react";
import Title from "../../layouts/Title";
import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

// import the cursor style in this directory
import "./cursor.css";
import { CodeInfo } from "./CodeInfo";
const About = () => {
  const [code, setCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    let i = 0;
    let intervalId = null;

    // create an intersection observer to detect when the section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // start the typing animation when the section is visible
          intervalId = setInterval(() => {
            setCode(CodeInfo.substring(0, i) + (cursorVisible ? "|" : ""));
            setCursorVisible(!cursorVisible);
            i++;
            if (i > CodeInfo.length) {
              clearInterval(intervalId);
            }
          }, 20);
          // stop observing once the animation is started
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // adjust the threshold as needed
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef} // set the ref to the section element
      id="about"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-col items-center border-b-[1px] font-titleFont border-b-black "
    >
      {/* sm: "375px",
          sml: "500px",
          md: "667px" */}
      <Title title="" des="Who am I?" />
      <div className="w-full lgl:w-2/3 xl:w-2/3 p-1 rounded-md shadow-shadowOne">
        <p className="px-2">wube_info.py</p>

        <SyntaxHighlighter showLineNumbers language="python" style={nightOwl}>
          {code}
          <span className="cursor" customStyle={{}}>
            |
          </span>
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default About;
