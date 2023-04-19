import React, { useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../../layouts/Title";

import { projectList } from "./ProjectList";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Project = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#00ACC1",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section id="projects" className="full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Projects" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          {projectList.map((project) => (
            // <div className="w-full">
            //   <p>{project.title}</p>
            // </div>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center ml-3 mt-2 mb-3 ">
                  <div className="group overflow-hidden">

                  <img
                    className="h-full object-contain rounded-lg hover:transition-all hover:duration-500 group-hover:scale-110"
                    src={project.img}
                    alt={project.title}
                  />
                  </div>
                  <div className="w-full flex flex-col gap-5 ">
                    <h3 className="flex flex-row justify-center text-2xl font-bold">
                      {project.title}
                    </h3>

                    <div className="flex flex-row justify-center gap-5">
                      <a href={project.github_link}>
                        <FaGithub className="text-3xl hover:text-designColor"></FaGithub>
                      </a>

                      <a href={project.live_link}>
                        <TbWorld className="text-3xl hover:text-designColor"></TbWorld>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lgl:w-[55%] flex flex-col justify-center mr-4">
                  {/* <img className="w-20 lgl:w-32 m:hidden sm:hidden" src={quote} alt="quote" /> */}
                  <div className="w-full h-[60%] py-10  rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex flex-col justify-between items-start border-b-2 border-b-gray-900">
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          {project.category}
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                        {project.date}
                        </p>
                      </div>
                      <div className="flex flex-row gap-4 pt-4 md:pt-0">
                        {project.tech.map((tech) => (
                          <p className="text-designColor font-bold">{tech}</p> 
                        ))}
                      
                      </div>
                    </div>

                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
