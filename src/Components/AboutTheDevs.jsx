import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { BsGearWide } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";

// Note: Importing the CSS file related to the video
// import "/src/assets/bgVideoDailySpark.mp4";

export const AboutTheDevs = () => {
  // Constructing the path to the video file
  //   const videoPath = new URL(
  //     "./assets/cool-video-zoom-for-Daily-Spark.mp4",
  //     import.meta.url
  //   ).pathname;

  return (
    <>
      <div className="">
        <h1 className="p-10 text-3xl text-center font-semibold bg-zinc-100 shadow-lg">
          About the Developers
        </h1>
        <div
          className="p-5 flex flex-wrap justify-between relative"
          //   style={{
          //     backgroundImage: `url("src/assets/cool-ocean-jellyfish-bg.jpeg")`,
          //   }}
          //   style={{
          //     background: `url("../src/assets/cool-video-zoom-for-Daily-Spark.mp4")`,
          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //   }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            id="video/mp4"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src={
                "https://res.cloudinary.com/dvmczcg3f/video/upload/v1706758815/Daily%20Spark%20-%20Landing%20Page%20Landscape%20Photos/Daily%20Spark%20-%20Bg%20Vid/pexels-gamol_w6fufw.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="mx-12 my-12 p-5 flex-1 flex flex-col items-center rounded-lg bg-green-500/30 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-green-800">
            <FaLaptopCode className="rounded-full my-6 p-5 w-40 h-auto object-center bg-zinc-300 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4 text-white">
              Jaden Glenn is a Software Engineer with a passion for technology
              and a keen interest in cybersecurity.
              <div className="font-semibold m-4 text-center">
                "I am eager to delve into the dynamic and ever-evolving world of
                information security with a curiosity for the intricate
                mechanisms that safeguard digital assets."
              </div>
            </div>
            <div className="flex flex-row text-lg text-white">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/jaden-glenn/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="https://github.com/Jadeng62">
                <BsGithub className="text-6xl hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="mailto:jadenglenn@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
            </div>
          </div>
          <div className="mx-12 my-12 p-5 flex-1 flex flex-col items-center rounded-lg bg-purple-500/30 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-purple-800">
            <BsGearWide className="rounded-full my-6 p-5 w-40 h-auto object-center bg-zinc-300 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4 text-white">
              Carlitos Dutan is a Software Engineer passionate about front-end
              development, problem-solving, and collaborating with a team.
              <div className="font-semibold m-4 text-center">
                "I thrive on creating engaging user experiences and am eager to
                contribute my skills to collaborative projects."
              </div>
            </div>
            <br />
            <div className="flex flex-row text-lg text-white">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/carlitosdutan/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="https://github.com/CRDutan5">
                <BsGithub className="text-6xl hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="mailto:carlitosdutan@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
            </div>
          </div>
          <div className="mx-12 my-12 p-5 flex-1 flex flex-col items-center rounded-lg bg-blue-500/30 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 border border-blue-800">
            <MdOutlineDesignServices className="rounded-full my-6 p-5 w-40 h-auto bg-zinc-300 transition ease-in-out duration-700 delay-700 hover:animate-bounce shadow-lg" />
            <div className="m-4 text-white">
              Alexander Gonzalez is a Software Engineer driven by a relentless
              pursuit of crafting timeless user experiences through creative
              ideation, human-centric design, and continuous learning.
              <div className="font-semibold m-4 text-center">
                "I strive to integrate the human spirit into applications that
                embody efficiency, helpfulness, and immersion."
              </div>
            </div>
            <div className="flex flex-row text-lg text-white">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10 my-4">
              <Link to="https://www.linkedin.com/in/alexander-gonzalez-can-code/">
                <FaLinkedin className="text-6xl text-blue-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="https://github.com/Alex-de-code">
                <BsGithub className="text-6xl hover:animate-pulse hover:text-white ease-in" />
              </Link>
              <Link to="mailto:alexandergonzalez@pursuit.org">
                <MdAlternateEmail className="text-6xl text-red-500 hover:animate-pulse hover:text-white ease-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
