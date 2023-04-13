import React from "react";
import Title from "../../layouts/Title";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

// import the cursor style in this directory
import "./cursor.css";
const About = () => {
  const [code, setCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const personCode = `"""This is a class that defines a person"""
    class Person:
        def __init__(self):
            # intialize person
            self.name = "Wubeshet Anegagrie Yimam"
            self.age = 22
            self.nationality = "Ethiopian"
            self.hobbies = ["coding", "painting", "cooking"]
            `;

    let i = 0;
    const interval = setInterval(() => {
      setCode(personCode.substring(0, i) + (cursorVisible ? "|" : ""));
      setCursorVisible(!cursorVisible);
      i++;
      if (i > personCode.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-full h-[800px] pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-col items-center border-b-[1px] font-titleFont border-b-black "
    >
      <Title title="" des="Who am I?" />
      <div className="p-3 rounded-md shadow-shadowOne">
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
