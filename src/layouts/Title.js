import React from "react";

const Title = ({ title, des, optional = "" }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
      <a href="/wubeshet_resume.pdf" className="hover:text-designColor">{optional}</a>
    </div>
  );
};

export default Title;
