import React from "react";
import { IconContext } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

const Skills = () => {
  return (
    <>
      <IconContext.Provider
        value={{ color: "white", className: "global-class-name", size: "3rem" }}
      >
        {/* ======= Skills Section ======= */}
        {/* <section id="skills" className="skills section-bg"> */}
        <section id="skills" className="bg-[#f5f8fd] py-16">
          <div className="mx-auto px-3 lg:max-w-6xl">
            {/* <div className="section-title"> */}
            <div className="pb-8">
              <h2 className="mb-5 pb-5 text-3xl font-bold text-[#173b6c]">
                Technologies
              </h2>
              {/* <p>Technologies I have utilized</p> */}
            </div>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaHtml5 className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaCss3Alt className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <SiJavascript className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <SiTypescript className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaGitAlt className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaReact className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <SiTailwindcss className="mx-auto py-2" />
                </p>
              </div>
              <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaWordpress className="mx-auto py-2" />
                </p>
              </div>
              {/* <div className="bg-black">
                <p className="w-full bg-slate-600 hover:bg-opacity-50  md:py-4">
                  {" "}
                  <FaHtml5 className="mx-auto py-2" />
                </p>
              </div>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <FaCss3Alt className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <SiJavascript className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <SiTypescript className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <FaGitAlt className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <FaReact className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <SiTailwindcss className="mx-auto py-2" />
              </p>
              <p className="relative w-full bg-slate-600 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-0 hover:bg-opacity-50 hover:after:bg-opacity-50 md:py-4">
                {" "}
                <FaWordpress className="mx-auto py-2" />
              </p> */}
              {/* <FaCss3Alt className="w-full bg-slate-600 py-2 md:py-4" />
              <SiJavascript className="w-full bg-slate-600 py-2 md:py-4" />
              <SiTypescript className="w-full bg-slate-600 py-2 md:py-4" />
              <FaGitAlt className="w-full bg-slate-600 py-2 md:py-4" />
              <FaReact className="w-full bg-slate-600 py-2 md:py-4" />
              <SiTailwindcss className="w-full bg-slate-600 py-2 md:py-4" />
              <FaWordpress className="w-full bg-slate-600 py-2 md:py-4" /> */}
              {/* <div className="relative bg-slate-600">
                <FaCss3Alt className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <SiJavascript className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <SiTypescript className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <FaGitAlt className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <FaReact className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <SiTailwindcss className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div>
              <div className="relative bg-slate-600">
                <FaWordpress className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4" />
              </div> */}
              {/* <Skill_Icon icon="FaHtml5" /> */}
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
