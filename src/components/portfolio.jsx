export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="bg-[#f5f8fd] py-16">
        <div className="mx-auto px-3 lg:max-w-6xl">
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-[#173b6c]">Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {/* portfolio item */}
            <div className="grid overflow-hidden rounded-md bg-white">
              <img src="./assets/img/portfolio/dealbamathcenter.png" alt="" />
              <h3 className="p-4 pb-0 font-bold">De Alba Math Center </h3>
              <p className="p-4 pt-2 text-sm">
                <a className="font-bold">DeAlbaMathCenter.com</a> is an online
                math platform built to help math teachers teach the curriculum.
                I was responsible for the creation of interactive math tests. I
                utilized <a className="font-bold">Css</a>,{" "}
                <a className="font-bold">Javascript</a>, and{" "}
                <a className="font-bold">mCourser</a> to improve our student's
                scores.
              </p>
              <a
                href="https://dealbamathcenter.com/"
                target="_blank"
                className="py-.5 mx-4 mb-4 mt-2 block self-end rounded-md bg-black px-4 text-center font-bold text-white hover:bg-slate-700"
              >
                Visit the Site
              </a>
            </div>
            {/* portfolio item */}
            <div className="grid overflow-hidden rounded-md bg-white">
              <img src="./assets/img/portfolio/a-cade.png" alt="" />
              <h3 className="p-4 pb-0 font-bold">A-cade</h3>
              <p className="p-4 pt-2 text-sm">
                An arcade business site. Comes complete with a landing page, an
                arcade preview page, and a contact page. Put together using{" "}
                <a className="font-bold">Wordpress</a> and the{" "}
                <a className="font-bold">Elementor</a> plugin.
              </p>
              <a
                href="https://a-cade.charliemikealonso.com/"
                target="_blank"
                className="py-.5 mx-4 mb-4 mt-2 block self-end rounded-md bg-black px-4 text-center font-bold text-white hover:bg-slate-700"
              >
                Live Demo
              </a>
            </div>
            {/* portfolio item */}
            <div className="grid overflow-hidden rounded-md bg-white">
              <img
                src="./assets/img/portfolio/Interactive-card-details-form.png"
                alt=""
              />
              <h3 className="p-4 pb-0 font-bold">Interactive Card Form</h3>
              <p className="p-4 pt-2 text-sm">
                This project was asigned by{" "}
                <span className="font-bold">frontendmentor</span>. This is an
                interactive credit card form I've built using{" "}
                <a className="font-bold">React</a> and{" "}
                <a className="font-bold">React-hook-form</a>. Styling was done
                with <a className="font-bold">Tailwind</a>.
                {/* <a
                  href="https://charlie025x.github.io/Interactive-card-details-form/"
                  target="_blank"
                  className="py-.5 mt-2 block rounded-md bg-black px-4 text-center font-bold text-white hover:bg-slate-700"
                >
                  Live Demo
                </a> */}
              </p>
              <a
                href="https://charlie025x.github.io/Interactive-card-details-form/"
                target="_blank"
                className="py-.5 mx-4 mb-4 mt-2  self-end rounded-md bg-black px-4 text-center font-bold text-white hover:bg-slate-700"
              >
                Live Demo
              </a>
            </div>
            {/* portfolio item */}
            <div className="grid overflow-hidden rounded-md bg-white">
              <img src="./assets/img/portfolio/tip-calculator.png" alt="" />
              <h3 className="p-4 pb-0 font-bold">Tip Calculator App</h3>
              <p className="p-4 pt-2 text-sm">
                You want to give your waitress a generous 40% tip. But then you
                realize, you left your math skills behind at college. That's
                where my Tip Calculator App comes in. Coded using{" "}
                <a className="font-bold">React</a> and designed with{" "}
                <a className="font-bold">SCSS</a>.
              </p>
              <a
                href="https://tip-calculator-app.charliemikealonso.com/"
                target="_blank"
                className="py-.5 mx-4 mb-4 mt-2 block self-end rounded-md bg-black px-4 text-center font-bold text-white hover:bg-slate-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
