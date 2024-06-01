import React from "react";
import ProjectItem from "./ProjectItem";
import Aviation from "../assets/Aviation.png";
import ECommerce from "../assets/ECommerce.png";
import Gaming from "../assets/Gaming.png";
import Streaming from "../assets/Streaming.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Below are the projects I've had worked with in my entire career
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={Aviation} title="Company-Aviation" />
        <ProjectItem img={ECommerce} title="Ecommerce Site" />
        <ProjectItem img={Streaming} title="Streaming Site" />
        <ProjectItem img={Gaming} title="Game Company Site" />
      </div>
    </div>
  );
};

export default Projects;
