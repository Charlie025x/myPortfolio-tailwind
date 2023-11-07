export default function Hero() {
  return (
    <section
      id="hero"
      //   className="d-flex flex-column justify-content-center align-items-center"
      className="min-h-screen w-full bg-slate-500 bg-hero-img bg-fixed flex items-center justify-center"
    >
      <div className="hero-container " data-aos="fade-in">
        <h1 className="text-3xl text-white font-bold ">Charlie Alonso</h1>
        <p className="text-2xl text-white font-bold ">
          I'm a{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Researcher, Problem Solver, Engineer, Self Starter, Artist"
          ></span>
        </p>
      </div>
    </section>
  );
}
