import React from "react";

const SkillsProgress = () => {
  return (
    <>
      {/* ======= Skills Section ======= */}
      {/* <section id="skills" className="skills section-bg"> */}
      <section id="skills" className="bg-[#f5f8fd] py-16">
        <div className="mx-auto px-3 lg:max-w-6xl">
          {/* <div className="section-title"> */}
          <div className="pb-8">
            <h2 className="mb-5 pb-5 text-3xl font-bold text-[#173b6c]">
              Skills
            </h2>
            <p>Technologies I have utilized</p>
          </div>

          <div className="lg:flex lg:gap-8">
            <div className="lg:w-2/4">
              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  HTML <i className="val">100%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-full bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  CSS <i className="val">95%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[95%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  JavaScript <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Wordpress <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/4">
              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  React <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Sass <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Tailwind <i className="val">85%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[85%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Git <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}
    </>
  );
};

export default SkillsProgress;
