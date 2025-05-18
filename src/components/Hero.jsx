import React from "react";
import {
  FaEnvelope,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import profileImage from "../assets/Profile.jpg";
import resume from "../assets/resume.pdf";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 sm:px-6 pt-32 pb-16"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span
                className="text-cyan-400 border-r-4 border-cyan-400 whitespace-nowrap overflow-hidden inline-block"
                style={{
                  width: "17ch",
                  animation:
                    "typing 2.5s steps(17), blink 0.75s step-end infinite",
                }}
              >
                Dharaneesh Guhan T
              </span>
            </h1>

            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto lg:mx-0 mb-4"></div>

            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-4">
              Full Stack Developer{" "}
              <span className="text-cyan-400 font-bold">|</span> ECE Student
            </h2>

            <p className="text-lg text-gray-400 mb-6">
              Passionate ECE student specializing in building innovative web
              solutions and cutting-edge applications.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {["React.js", "SpringBoot", "MongoDB", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-gray-800 to-black border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium shadow-cyan shadow-md hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
              >
                <FaCode />
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-gray-900 px-5 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105"
              >
                <FaEnvelope />
                Contact Me
              </a>
              <a
                href={resume}
                download
                className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105 border border-cyan-500"
              >
                <FaFileDownload />
                Resume
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-[300px] max-w-[90%]">
              <div className="bg-gray-900 border-2 border-cyan-500 rounded-3xl rotate-3 w-full h-full absolute top-4 left-4 -z-10 shadow-cyan shadow-lg"></div>
              <img
                src={profileImage}
                alt="Dharaneesh Guhan"
                className="rounded-2xl border-4 border-white shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-gradient-to-tr from-black to-gray-900 border border-cyan-500 rounded-xl p-3 shadow-md text-center">
                <p className="text-cyan-400 font-bold text-lg">5+</p>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes typing {
            from { width: 0 }
            to { width: 17ch }
          }
          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: cyan }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
