import React, { useState } from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "SMK Atisa Dipamkara",
    duration: "2 Years",
    details:
      "Teaching the subject of animations for students aged 16 and 17 years old. Teached the basic and advanced of 2D and 3D animation using the theoritical and study-case based practical approach.",
  },
  {
    year: 2021,
    title: "PT Wangsa Ultima Kreasi",
    duration: "4 Months",
    details:
      "Worked as an internsip motion graphic artist. involved in the making of the projects of artwork for advertisements and educational purposes. Created the baseline and project templates for the future project development.",
  },
  {
    year: 2021,
    title: "Universitas Multimedia Nusantara",
    duration: "4 Years",
    details:
      "Bachelor degree of art. Majored in the art of animation and film-making by the GPA of 3.57.",
  },
  {
    year: 2017,
    title: "SMA Fons Vitae 1",
    duration: "3 Years",
    details: "Majored in Social Science study.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-[35px]">
        Work & Education
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Work;
