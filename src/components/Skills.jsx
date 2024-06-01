import React from "react";
import HTML from "../assets/HTML5.png";
import CSS from "../assets/CSS3.png";
import JS from "../assets/JS.png";
import Node from "../assets/Node.png";
import ReactImg from "../assets/ReactIcon.png";
import MySql from "../assets/Mysql.png";
import Github from "../assets/Github.png";
import Tailwind from "../assets/Tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Skills
        </h1>
        <p className="text-center py-8">
          I am a passionate programmer that always implement myself into the
          environment I am working at, be it conceptually or techically. I have
          worked along with various companies, from small-scales startups all
          the way to large-well known enterprises. Below are the technologies I
          mastered and work around a lot.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img className="m-4 w-20 mx-auto" src={HTML} alt="HTML Image" />
          <p className="my-4 text-white">HTML</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img className="pt-1 m-4 w-20 mx-auto" src={CSS} alt="CSS Image" />
          <p className="my-4 text-white">CSS</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img className="m-4 w-20 mx-auto" src={JS} alt="JS Image" />
          <p className="my-4 text-white">Javascript</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img className="m-4 pt-4 w-20 mx-auto" src={Node} alt="Node Image" />
          <p className="my-4 pt-4 text-white">Node</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img
            className="m-4 pt-1 w-20 mx-auto"
            src={ReactImg}
            alt="React Image"
          />
          <p className="my-4 text-white">React</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img className="m-4 w-20 mx-auto" src={Github} alt="Github Image" />
          <p className="my-4 text-white">Github</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img
            className="m-4 pt-3 w-20 mx-auto"
            src={MySql}
            alt="MySql Image"
          />
          <p className="my-4 pt-5 text-white">MySql</p>
        </div>
        <div className="bg-[#001b5e] shadow-md shadow-gray-400 rounded-xl hover:scale-110 duration-500">
          <img
            className="m-4 pt-4 w-20 mx-auto"
            src={Tailwind}
            alt="Tailwind Image"
          />
          <p className="pt-2 my-4 text-white">Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
