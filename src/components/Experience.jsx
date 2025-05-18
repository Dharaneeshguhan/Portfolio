import React from "react";
import { BriefcaseIcon, CodeIcon } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      date: "Jan 2022 - Present",
      description:
        "Developed and maintained user interfaces using React, improving UX and performance.",
    },
    {
      id: 2,
      title: "Intern - Web Developer",
      company: "Creative Web Agency",
      date: "Jun 2021 - Dec 2021",
      description:
        "Assisted in creating responsive web designs and implemented new features.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 py-14 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg flex items-center justify-center gap-3">
        <BriefcaseIcon size={32} />
        Experience
      </h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map(({ id, title, company, date, description }) => (
          <div
            key={id}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white border-opacity-30"
          >
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-pink-100 italic">{company}</p>
            <p className="text-pink-200 text-sm mb-4">{date}</p>
            <p className="text-white">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;