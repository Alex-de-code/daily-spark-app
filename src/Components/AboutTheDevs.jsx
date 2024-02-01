import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { BsGearWide } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";

export const AboutTheDevs = () => {
  return (
    <>
      <div className="">
        <h1 className="p-10 text-3xl text-center font-semibold bg-zinc-100 shadow-lg">
          About the Developers
        </h1>
        <div
          className="p-5 flex flex-wrap justify-between bg-contain bg-center"
          style={{
            backgroundImage: `url("src/assets/cool-ocean-jellyfish-bg.jpeg")`,
          }}
        >
          <div className="mx-12 my-12 p-5 flex-1 flex flex-col items-center rounded-lg bg-white/20 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-blue-300">
            <FaLaptopCode className="rounded-full my-6 p-5 w-40 h-auto object-center bg-yellow-400 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4">
              Jaden Glenn is a Software Engineer with a passion for technology
              and a keen interest in cybersecurity.
              <div className="font-semibold m-4 text-center">
                "I am eager to delve into the dynamic and ever-evolving world of
                information security with a curiosity for the intricate
                mechanisms that safeguard digital assets."
              </div>
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/jaden-glenn/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="https://github.com/Jadeng62">
                <BsGithub className="text-6xl hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="mailto:jadenglenn@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
            </div>
          </div>
          <div className=" mx-2 my-2 p-5 flex-1 flex flex-col items-center rounded-lg bg-white/20 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-blue-300">
            <BsGearWide className="rounded-full my-6 p-5 w-40 h-auto object-center bg-yellow-400 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4">
              Carlitos Dutan is a Software Engineer passionate about front-end
              development, problem-solving, and collaborating with a team.
              <div className="font-semibold m-4 text-center">
                "I thrive on creating engaging user experiences and am eager to
                contribute my skills to collaborative projects."
              </div>
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/carlitosdutan/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="https://github.com/CRDutan5">
                <BsGithub className="text-6xl hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="mailto:carlitosdutan@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
            </div>
          </div>
          <div className=" mx-2 my-2 p-5 flex-1 flex flex-col items-center rounded-lg bg-white/20 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-blue-300">
            <MdOutlineDesignServices className="rounded-full my-6 p-5 w-40 h-auto bg-yellow-400 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4">
              Alexander Gonzalez is a Software Engineer driven by a relentless
              pursuit of crafting timeless user experiences through creative
              ideation, human-centric design, and continuous learning.
              <div className="font-semibold m-4 text-center">
                "I strive to integrate the human spirit into applications that
                embody efficiency, helpfulness, and immersion."
              </div>
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/alexander-gonzalez-can-code/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="https://github.com/Alex-de-code">
                <BsGithub className="text-6xl hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
              <Link to="mailto:alexandergonzalez@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:opacity-100 ease-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
