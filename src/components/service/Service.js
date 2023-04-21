import React from "react";
import { FiServer } from "react-icons/fi";
import { TbCloudComputing } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";
import Title from "../../layouts/Title";
import Card from "./ServiceCard";
import { AiOutlineMobile } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { BiChip } from "react-icons/bi";
const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="What I do?" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Fullstack Developement"
          des="This is where I spend most of my time. I love to build things that live on the internet and would have a positive impact on people's lives. I have experience building well-documented, scalable and maintainable APIs. I also have a strong background in Linux and other infrustructure tools, which has equipped me with knowledge in the DevOps aspect of software development."
          icon={<FiServer />}
        />
        <Card
          title="Cloud development"
          des="After completing the Cloud Computing Nanodegree at Udacity, I acquired practical experience in building and deploying applications on AWS that are capable of scaling and maintaining high availability. Furthermore, I was exposed to various cloud technologies, including microservices architecture, containerization, serverless development, and CI/CD, which allowed me to gain hands-on experience in these areas."
          icon={<TbCloudComputing />}
        />
        <Card
          title="Mobile Development"
          des="Seeing my own app runnig on my phone is one of the most satisfying feeling I get in software development. I have experience building mobile applications with Java and now with Flutter."
          icon={<AiOutlineMobile />}
        />
        <Card
          title="UI Design"
          des="This where my natural talent aligns with a profession. I blieve I am born with a creative and artistic mind, and I love to design things that are beautiful and functional. I am currently learning UI & UX to support my natural instinct with the right skills and knowledge for designing user friendly interfaces."
          icon={<SiAntdesign />}
        />
        <Card
          title="Data Analysis"
          des="With my strong background in python, SQL and math, I love playing with large amount of data and extract meaningful insights from it."
          icon={<BsDatabase />}
        />
        <Card
          title="Machine Learning"
          des="This is where I will make my mark in the future. I will be starting my specialization in Machine Learning in the near future which will allow me to swim in the ocean of data better."
          icon={<BiChip />}
        />
        {/* <Card
          title="Painting"
          des="With my strong background in python, SQL and math, I love playing with large amout of data and extract meaningful insights from it. I am yet starting my journey in this field, but this is where I will make my mark in the future. I will be starting my specialization in Machine Learning in the near future which will allow me to swim in the ocean of data."
          icon={<BiPaint />}
        /> */}
      </div>
    </section>
  );
};

export default Services;
